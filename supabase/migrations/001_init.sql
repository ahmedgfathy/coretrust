-- Enable UUID generation
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ==================== PROJECTS TABLE ====================
CREATE TABLE IF NOT EXISTS projects (
  id TEXT PRIMARY KEY,
  "titleEn" TEXT NOT NULL DEFAULT '',
  "titleAr" TEXT NOT NULL DEFAULT '',
  "categoryEn" TEXT NOT NULL DEFAULT '',
  "categoryAr" TEXT NOT NULL DEFAULT '',
  "locationEn" TEXT NOT NULL DEFAULT '',
  "locationAr" TEXT NOT NULL DEFAULT '',
  "descriptionEn" TEXT NOT NULL DEFAULT '',
  "descriptionAr" TEXT NOT NULL DEFAULT '',
  "year" TEXT NOT NULL DEFAULT '',
  "status" TEXT NOT NULL DEFAULT 'current',
  "image" TEXT NOT NULL DEFAULT '',
  "gallery" JSONB DEFAULT '[]'::jsonb,
  "details" JSONB DEFAULT '[]'::jsonb,
  "createdAt" TIMESTAMPTZ DEFAULT NOW(),
  "updatedAt" TIMESTAMPTZ DEFAULT NOW()
);

-- ==================== CONTENT TABLE ====================
CREATE TABLE IF NOT EXISTS content (
  id TEXT PRIMARY KEY DEFAULT 'main',
  data JSONB NOT NULL DEFAULT '{}'::jsonb,
  "updatedAt" TIMESTAMPTZ DEFAULT NOW()
);

-- Insert default content
INSERT INTO content (id, data) VALUES ('main', '{
  "hero": {
    "titleEn": "Innovating Spaces, Building Futures",
    "titleAr": "ابتكار المساحات، بناء المستقبل",
    "subtitleEn": "Est. 2004 - Architect Mohamed Yehia Group",
    "subtitleAr": "تأسست عام 2004 - مجموعة المهندس محمد يحيى",
    "descriptionEn": "A multidisciplinary real estate and engineering company established in 2004 in cooperation with Gulf Countries. Over 90 projects completed across Egypt and abroad.",
    "descriptionAr": "شركة عقارية وهندسية متعددة التخصصات تأسست عام 2004 بالتعاون مع دول الخليج. أكثر من 90 مشروع منجز في مصر وخارجها."
  },
  "about": {
    "titleEn": "Who We Are",
    "titleAr": "من نحن",
    "descriptionEn": "Architect Mohamed Yehia Group was established in 2004 in cooperation with Gulf Countries. The company has completed more than 90 projects throughout the Arab Republic of Egypt and abroad covering different types of buildings.",
    "descriptionAr": "تأسست مجموعة المهندس محمد يحيى في عام 2004 بالتعاون مع دول الخليج. أنجزت الشركة أكثر من 90 مشروع في جميع أنحاء جمهورية مصر العربية وخارجها تغطي أنماطًا مختلفة من المباني.",
    "missionEn": "To be unique in engineering and real estate fields by using the latest technologies while working within sustainability guidelines.",
    "missionAr": "أن نكون فريدين في المجال الهندسي والعقاري باستخدام أحدث التقنيات أثناء العمل ضمن إرشادات الاستدامة.",
    "visionEn": "To be a leading architecture firm, contractor and real estate agency in Egypt, reaching Africa in the near future.",
    "visionAr": "أن نكون شركة معمارية رائدة ومقاول ووكالة عقارية في مصر، للوصول إلى أفريقيا في المستقبل القريب."
  },
  "services": {
    "titleEn": "Our Divisions",
    "titleAr": "أقسامنا",
    "descriptionEn": "A multidisciplinary company with 6 specialized divisions covering all aspects of real estate and construction.",
    "descriptionAr": "شركة متعددة التخصصات مع 6 أقسام متخصصة تغطي جميع جوانب العقارات والبناء."
  },
  "contact": {
    "addressEn": "Zaher Towers Bldg 2, Apt 316B, Maamoun St., Nasr City, Cairo",
    "addressAr": "أبراج زاهر برج 2 شقة 316 ب، شارع المأمون، مدينة نصر، القاهرة",
    "phone": "02-20776044",
    "email": "info@mygroup-eg.com",
    "facebook": "https://facebook.com/mohamedyehiagroup",
    "instagram": "https://instagram.com/mohamed_yehia_group",
    "linkedin": "https://linkedin.com/company/mohamed-yehia-group"
  },
  "social": {
    "facebook": "https://facebook.com/mohamedyehiagroup",
    "instagram": "https://instagram.com/mohamed_yehia_group",
    "linkedin": "https://linkedin.com/company/mohamed-yehia-group"
  }
}'::jsonb)
ON CONFLICT (id) DO NOTHING;

-- ==================== ROW LEVEL SECURITY ====================
-- Disable RLS for service role access (admin panel uses service role key for writes)
ALTER TABLE projects ENABLE ROW LEVEL SECURITY;
ALTER TABLE content ENABLE ROW LEVEL SECURITY;

-- Allow public read access to projects
CREATE POLICY "Public read projects" ON projects
  FOR SELECT USING (true);

-- Allow public read access to content
CREATE POLICY "Public read content" ON content
  FOR SELECT USING (true);

-- Allow authenticated full access to projects
CREATE POLICY "Auth all projects" ON projects
  FOR ALL USING (auth.role() = 'authenticated');

-- Allow authenticated full access to content
CREATE POLICY "Auth all content" ON content
  FOR ALL USING (auth.role() = 'authenticated');
