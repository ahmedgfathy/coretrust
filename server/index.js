const express = require('express');
const cors = require('cors');
const multer = require('multer');
const path = require('path');
const fs = require('fs');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');

const app = express();
const PORT = 3001;
const JWT_SECRET = 'mohamed-yahia-group-secret-key-2024';
const DATA_DIR = path.join(__dirname, '../src/data');
const UPLOAD_DIR = path.join(__dirname, '../public/images');

// Middleware
app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ extended: true, limit: '50mb' }));
app.use('/uploads', express.static(UPLOAD_DIR));

// Ensure directories exist
if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
if (!fs.existsSync(UPLOAD_DIR)) fs.mkdirSync(UPLOAD_DIR, { recursive: true });

// JSON file helpers
const readJSON = (file) => {
  const filePath = path.join(DATA_DIR, file);
  if (!fs.existsSync(filePath)) return null;
  return JSON.parse(fs.readFileSync(filePath, 'utf8'));
};

const writeJSON = (file, data) => {
  const filePath = path.join(DATA_DIR, file);
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf8');
};

// Initialize data files
const initData = () => {
  if (!fs.existsSync(path.join(DATA_DIR, 'admin.json'))) {
    const hashedPassword = bcrypt.hashSync('ZeroCall20!@H', 10);
    writeJSON('admin.json', {
      users: [{
        id: '1',
        username: 'xinreal',
        password: hashedPassword,
        role: 'admin'
      }]
    });
  }

  if (!fs.existsSync(path.join(DATA_DIR, 'projects.json'))) {
    writeJSON('projects.json', { projects: [] });
  }

  if (!fs.existsSync(path.join(DATA_DIR, 'content.json'))) {
    writeJSON('content.json', {
      hero: {
        titleEn: 'Innovating Spaces, Building Futures',
        titleAr: 'ابتكار المساحات، بناء المستقبل',
        subtitleEn: 'Est. 2004 - Architect Mohamed Yehia Group',
        subtitleAr: 'تأسست عام 2004 - مجموعة المهندس محمد يحيى',
        descriptionEn: 'A multidisciplinary real estate and engineering company established in 2004.',
        descriptionAr: 'شركة عقارية وهندسية متعددة التخصصات تأسست عام 2004.'
      },
      about: {
        titleEn: 'Who We Are',
        titleAr: 'من نحن',
        descriptionEn: 'Architect Mohamed Yehia Group was established in 2004 in cooperation with Gulf Countries.',
        descriptionAr: 'تأسست مجموعة المهندس محمد يحيى في عام 2004 بالتعاون مع دول الخليج.'
      },
      services: {
        titleEn: 'Our Divisions',
        titleAr: 'أقسامنا',
        descriptionEn: 'A multidisciplinary company with 6 specialized divisions.',
        descriptionAr: 'شركة متعددة التخصصات مع 6 أقسام متخصصة.'
      },
      contact: {
        addressEn: 'Zaher Towers Bldg 2, Apt 316B, Maamoun St., Nasr City, Cairo',
        addressAr: 'أبراج زاهر برج 2 شقة 316 ب، شارع المأمون، مدينة نصر، القاهرة',
        phone: '02-20776044',
        email: 'info@mygroup-eg.com',
        facebook: 'https://facebook.com/mohamedyehiagroup',
        instagram: 'https://instagram.com/mohamed_yehia_group',
        linkedin: 'https://linkedin.com/company/mohamed-yehia-group'
      },
      social: {
        facebook: 'https://facebook.com/mohamedyehiagroup',
        instagram: 'https://instagram.com/mohamed_yehia_group',
        linkedin: 'https://linkedin.com/company/mohamed-yehia-group'
      }
    });
  }
};

initData();

// Auth middleware
const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'No token provided' });

  try {
    const decoded = jwt.verify(token, JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid token' });
  }
};

// Multer config for file uploads
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, UPLOAD_DIR),
  filename: (req, file, cb) => {
    const ext = path.extname(file.originalname);
    cb(null, `${uuidv4()}${ext}`);
  }
});

const upload = multer({ 
  storage,
  limits: { fileSize: 10 * 1024 * 1024 },
  fileFilter: (req, file, cb) => {
    const allowed = /jpeg|jpg|png|gif|webp/;
    const extname = allowed.test(path.extname(file.originalname).toLowerCase());
    const mimetype = allowed.test(file.mimetype);
    if (extname && mimetype) return cb(null, true);
    cb(new Error('Only image files allowed'));
  }
});

// ==================== AUTH ROUTES ====================

app.post('/api/auth/login', (req, res) => {
  const { username, password } = req.body;
  const data = readJSON('admin.json');
  const user = data.users.find(u => u.username === username);

  if (!user || !bcrypt.compareSync(password, user.password)) {
    return res.status(401).json({ error: 'Invalid credentials' });
  }

  const token = jwt.sign({ id: user.id, username: user.username, role: user.role }, JWT_SECRET, { expiresIn: '24h' });
  res.json({ token, user: { id: user.id, username: user.username, role: user.role } });
});

app.get('/api/auth/verify', authenticate, (req, res) => {
  res.json({ valid: true, user: req.user });
});

// ==================== PROJECTS ROUTES ====================

app.get('/api/projects', (req, res) => {
  const data = readJSON('projects.json');
  res.json(data.projects);
});

app.get('/api/projects/:id', (req, res) => {
  const data = readJSON('projects.json');
  const project = data.projects.find(p => p.id === req.params.id);
  if (!project) return res.status(404).json({ error: 'Project not found' });
  res.json(project);
});

app.post('/api/projects', authenticate, upload.single('image'), (req, res) => {
  const data = readJSON('projects.json');
  const project = {
    id: uuidv4(),
    ...req.body,
    image: req.file ? `/images/${req.file.filename}` : req.body.image,
    createdAt: new Date().toISOString()
  };
  data.projects.push(project);
  writeJSON('projects.json', data);
  res.json(project);
});

app.put('/api/projects/:id', authenticate, upload.single('image'), (req, res) => {
  const data = readJSON('projects.json');
  const index = data.projects.findIndex(p => p.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Project not found' });

  const updated = {
    ...data.projects[index],
    ...req.body,
    image: req.file ? `/images/${req.file.filename}` : req.body.image || data.projects[index].image,
    updatedAt: new Date().toISOString()
  };
  data.projects[index] = updated;
  writeJSON('projects.json', data);
  res.json(updated);
});

app.delete('/api/projects/:id', authenticate, (req, res) => {
  const data = readJSON('projects.json');
  const index = data.projects.findIndex(p => p.id === req.params.id);
  if (index === -1) return res.status(404).json({ error: 'Project not found' });

  data.projects.splice(index, 1);
  writeJSON('projects.json', data);
  res.json({ success: true });
});

// ==================== CONTENT ROUTES ====================

app.get('/api/content', (req, res) => {
  const data = readJSON('content.json');
  res.json(data);
});

app.get('/api/content/:section', (req, res) => {
  const data = readJSON('content.json');
  if (!data[req.params.section]) return res.status(404).json({ error: 'Section not found' });
  res.json(data[req.params.section]);
});

app.put('/api/content/:section', authenticate, (req, res) => {
  const data = readJSON('content.json');
  data[req.params.section] = { ...data[req.params.section], ...req.body };
  writeJSON('content.json', data);
  res.json(data[req.params.section]);
});

// ==================== IMAGE UPLOAD ROUTES ====================

app.post('/api/upload', authenticate, upload.single('image'), (req, res) => {
  if (!req.file) return res.status(400).json({ error: 'No file uploaded' });
  res.json({ url: `/images/${req.file.filename}`, filename: req.file.filename });
});

app.post('/api/upload/multiple', authenticate, upload.array('images', 10), (req, res) => {
  if (!req.files || req.files.length === 0) return res.status(400).json({ error: 'No files uploaded' });
  const urls = req.files.map(f => ({ url: `/images/${f.filename}`, filename: f.filename }));
  res.json(urls);
});

app.get('/api/images', authenticate, (req, res) => {
  const files = fs.readdirSync(UPLOAD_DIR).filter(f => /\.(jpg|jpeg|png|gif|webp)$/i.test(f));
  const images = files.map(f => ({
    filename: f,
    url: `/images/${f}`,
    size: fs.statSync(path.join(UPLOAD_DIR, f)).size
  }));
  res.json(images);
});

app.delete('/api/images/:filename', authenticate, (req, res) => {
  const filePath = path.join(UPLOAD_DIR, req.params.filename);
  if (!fs.existsSync(filePath)) return res.status(404).json({ error: 'File not found' });
  fs.unlinkSync(filePath);
  res.json({ success: true });
});

// ==================== SETTINGS ROUTES ====================

app.get('/api/settings', (req, res) => {
  const data = readJSON('settings.json') || { siteName: 'Mohamed Yahia Group', logo: '' };
  res.json(data);
});

app.put('/api/settings', authenticate, (req, res) => {
  const data = readJSON('settings.json') || {};
  const updated = { ...data, ...req.body };
  writeJSON('settings.json', updated);
  res.json(updated);
});

// ==================== START SERVER ====================

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
