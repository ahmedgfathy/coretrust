export interface Project {
  id: string
  title: { en: string; ar: string }
  category: { en: string; ar: string }
  location: { en: string; ar: string }
  year: string
  description: { en: string; ar: string }
  details: { en: string; ar: string }[]
  image: string
  gallery: string[]
  status: 'current' | 'completed'
  area?: string
}

export const categories = [
  { id: 'all', en: 'All Projects', ar: 'جميع المشاريع' },
  { id: 'real-estate', en: 'Real Estate', ar: 'الاستثمار العقاري' },
  { id: 'contracting', en: 'Contracting', ar: 'المقاولات' },
  { id: 'interior', en: 'Interior Design', ar: 'التصميم الداخلي' },
  { id: 'maintenance', en: 'Maintenance', ar: 'الصيانة' },
]

export const projects: Project[] = [
  {
    id: 'sabbia-resort',
    title: { en: 'Sabbia Resort', ar: 'منتجع صبية' },
    category: { en: 'Real Estate', ar: 'الاستثمار العقاري' },
    location: { en: 'Marsa Matrouh', ar: 'مرسى مطروح' },
    year: '2022-Present',
    description: {
      en: 'Luxury beach resort in Al-Qasr area, Marsa Matrouh, overlooking the mesmerizing beach. Features 7 districts with coastal units, private beach spanning half km, and water sports activities.',
      ar: 'منتجع فاخر على الشاطئ في منطقة القصر بمرسى مطروح، يطل على الشاطئ الساحر. يتكون من 7 حارات بوحدات ساحلية وشاطئ خاص يمتد لنصف كيلومتر وأنشطة رياضات مائية.'
    },
    details: [
      { en: 'Private beach over 0.5 km', ar: 'شاطئ خاص يمتد لأكثر من 0.5 كم' },
      { en: '7 districts with coastal units', ar: '7 حارات بوحدات ساحلية' },
      { en: 'Water sports: jet skis & parasailing', ar: 'رياضات مائية: زالجات نفاثة وتزلج هوائي' },
      { en: 'Fully furnished units with sea view', ar: 'وحدات مفروشة بالكامل مع إطلالة على البحر' },
    ],
    image: '/images/sabbia-resort.jpg',
    gallery: ['/images/sabbia-resort.jpg'],
    status: 'current',
  },
  {
    id: 'core-complex',
    title: { en: 'Core Complex', ar: 'مجمع كور' },
    category: { en: 'Real Estate', ar: 'الاستثمار العقاري' },
    location: { en: 'Autostrad, Cairo', ar: 'الأتوستRAD، القاهرة' },
    year: '2022-Present',
    description: {
      en: 'Residential and commercial complex at the intersection of Autostrad road & ring road. 13,000 sqm area with residential units, offices, commercial units, landscape, and club on upper floors.',
      ar: 'مجمع سكني تجاري في تقاطع طريق الأتوستراد والطريق الدائري. مساحة 13,000 متر مربع مع وحدات سكنية ومكاتب ووحدات تجارية ومناظر طبيعية ونادي في الطوابق العليا.'
    },
    details: [
      { en: 'Total area: 13,000 sqm', ar: 'المساحة الإجمالية: 13,000 متر مربع' },
      { en: 'Residential, commercial & office units', ar: 'وحدات سكنية وتجارية وإدارية' },
      { en: 'Club on upper floors as landmark', ar: 'نادي في الطوابق العليا كمعلم مميز' },
      { en: 'Construction supervision & finishing', ar: 'إشراف على البناء والتشطيب من الداخل والخارج' },
    ],
    image: '/images/core-complex.jpg',
    gallery: ['/images/core-complex.jpg'],
    status: 'current',
  },
  {
    id: 'la-nova-towers',
    title: { en: 'La Nova Towers', ar: 'أبراج لا نوفا' },
    category: { en: 'Real Estate', ar: 'الاستثمار العقاري' },
    location: { en: 'El-Waha, Nasr City', ar: 'الواحة، مدينة نصر' },
    year: '2022-Present',
    description: {
      en: 'Residential towers consisting of basement, ground floor, 9 floors & roof. Each floor has 6 apartments. Located in El-Waha with easy access from many corridors.',
      ar: 'أبراج سكنية تتكون من بدروم ودور أرضي و9 طوابق وروف. كل طابق يحتوي على 6 شقق. تقع في الواحة مع سهولة الوصول من المحاور المتعددة.'
    },
    details: [
      { en: 'Basement + Ground + 9 floors + Roof', ar: 'بدروم + دور أرضي + 9 طوابق + روف' },
      { en: '6 apartments per floor', ar: '6 شقق لكل طابق' },
      { en: 'Apartments: 108 - 162 sqm', ar: 'الشقق: 108 - 162 متر مربع' },
      { en: 'Land area: 870 sqm', ar: 'مساحة الأرض: 870 متر مربع' },
    ],
    image: '/images/la-nova-towers.jpg',
    gallery: ['/images/la-nova-towers.jpg'],
    status: 'current',
  },
  {
    id: 'waha-building',
    title: { en: 'Waha Buildings', ar: 'مباني الواحة' },
    category: { en: 'Real Estate', ar: 'الاستثمار العقاري' },
    location: { en: 'El-Waha, Nasr City', ar: 'الواحة، مدينة نصر' },
    year: '2016-2019',
    description: {
      en: 'Multiple residential buildings in El-Waha neighborhood, Nasr City. Buildings 2, 3, and 4 with 10-11 floors each, featuring 3 apartments per floor. Remarkable location overlooking Khamseen Street.',
      ar: 'مباني سكنية متعددة في حي الواحة بمدينة نصر. مباني 2 و 3 و 4 بـ 10-11 طابق لكل منها، تتميز بـ 3 شقق لكل طابق. موقع مميز يطل على شارع الخمسين.'
    },
    details: [
      { en: '10-11 floors per building', ar: '10-11 طابق لكل مبنى' },
      { en: '3 apartments per floor', ar: '3 شقق لكل طابق' },
      { en: 'Apartments: 115 - 190 sqm', ar: 'الشقق: 115 - 190 متر مربع' },
      { en: 'Overlooking Khamseen Street', ar: 'يطل على شارع الخمسين' },
    ],
    image: '/images/waha-building.jpg',
    gallery: ['/images/waha-building.jpg'],
    status: 'completed',
  },
  {
    id: 'el-merghany',
    title: { en: 'El-Merghany Building', ar: 'مبنى الميرغني' },
    category: { en: 'Real Estate', ar: 'الاستثمار العقاري' },
    location: { en: 'Heliopolis, Cairo', ar: 'مصر الجديدة، القاهرة' },
    year: '2020',
    description: {
      en: 'Elegant residential building in Heliopolis, one of Cairo\'s most elegant areas. Classic design with bright yellow stone terraces and beige color. Divided into apartments, commercial units and parking.',
      ar: 'مبنى سكني أنيق في مصر الجديدة، واحدة من أرقى مناطق القاهرة. تصميم كلاسيكي مع تراسات من الحجر الأصفر واللون البيج. مقسم إلى شقق ووحدات تجارية ومواقف سيارات.'
    },
    details: [
      { en: 'Classic design with yellow stone', ar: 'تصميم كلاسيكي مع حجر أصفر' },
      { en: 'Residential & commercial units', ar: 'وحدات سكنية وتجارية' },
      { en: 'Parking facilities', ar: 'مرافق مواقف سيارات' },
      { en: 'Premium Heliopolis location', ar: 'موقع مميز في مصر الجديدة' },
    ],
    image: '/images/el-merghany.jpg',
    gallery: ['/images/el-merghany.jpg'],
    status: 'completed',
  },
  {
    id: 'villa-nakheel',
    title: { en: 'Villa El-Nakheel', ar: 'فيلا النخيل' },
    category: { en: 'Real Estate', ar: 'الاستثمار العقاري' },
    location: { en: 'Fifth Settlement, New Cairo', ar: 'التجمع الخامس، القاهرة الجديدة' },
    year: '2007-2010',
    description: {
      en: 'Luxury villas in El-Nakheel compound, Fifth Settlement. Multiple villas executed with complete finishing and modern designs. Premium location in one of New Cairo\'s finest compounds.',
      ar: 'فيلات فاخرة في كمبوند النخيل بالتجمع الخامس. فيلات متعددة بتشطيبات كاملة وتصاميم عصرية. موقع مميز في أحد أرقى مجمعات القاهرة الجديدة.'
    },
    details: [
      { en: 'Multiple villas in El-Nakheel', ar: 'فيلات متعددة في النخيل' },
      { en: 'Complete finishing works', ar: 'أعمال تشطيب كاملة' },
      { en: 'Modern architectural design', ar: 'تصميم معماري عصري' },
      { en: 'Premium compound location', ar: 'موقع مميز في الكمبوند' },
    ],
    image: '/images/villa-nakheel.jpg',
    gallery: ['/images/villa-nakheel.jpg'],
    status: 'completed',
  },
  {
    id: 'narges-building',
    title: { en: 'Narges Building', ar: 'مبنى النرجس' },
    category: { en: 'Real Estate', ar: 'الاستثمار العقاري' },
    location: { en: 'Fifth Settlement, New Cairo', ar: 'التجمع الخامس، القاهرة الجديدة' },
    year: '2010-2012',
    description: {
      en: 'Residential building in El-Narges 6 compound, Fifth Settlement. Complete construction and finishing works with modern design and quality materials.',
      ar: 'مبنى سكني في كمبوند النرجس 6 بالتجمع الخامس. أعمال بناء وتشطيب كاملة بتصميم عصري ومواد عالية الجودة.'
    },
    details: [
      { en: 'Location: El-Narges 6', ar: 'الموقع: النرجس 6' },
      { en: 'Complete construction & finishing', ar: 'بناء وتشطيب كامل' },
      { en: 'Modern design', ar: 'تصميم عصري' },
      { en: 'Quality materials', ar: 'مواد عالية الجودة' },
    ],
    image: '/images/narges-building.jpg',
    gallery: ['/images/narges-building.jpg'],
    status: 'completed',
  },
  {
    id: 'yasmine-building',
    title: { en: 'Yasmine Building', ar: 'مبنى الياسمين' },
    category: { en: 'Real Estate', ar: 'الاستثمار العقاري' },
    location: { en: 'Fifth Settlement, New Cairo', ar: 'التجمع الخامس، القاهرة الجديدة' },
    year: '2007-2009',
    description: {
      en: 'Residential buildings in El-Yasmeen 7 compound, Fifth Settlement. Two villas and residential buildings with complete finishing and modern architectural solutions.',
      ar: 'مباني سكنية في كمبوند الياسمين 7 بالتجمع الخامس. فيلات ومباني سكنية بتشطيبات كاملة وحلول معمارية عصرية.'
    },
    details: [
      { en: 'Location: El-Yasmeen 7', ar: 'الموقع: الياسمين 7' },
      { en: 'Villas & residential buildings', ar: 'فيلات ومباني سكنية' },
      { en: 'Complete finishing', ar: 'تشطيبات كاملة' },
      { en: 'Modern solutions', ar: 'حلول عصرية' },
    ],
    image: '/images/yasmine-building.jpg',
    gallery: ['/images/yasmine-building.jpg'],
    status: 'completed',
  },
  {
    id: 'banafseg-building',
    title: { en: 'Banafseg Buildings', ar: 'مباني البنفسج' },
    category: { en: 'Real Estate', ar: 'الاستثمار العقاري' },
    location: { en: 'Fifth Settlement, New Cairo', ar: 'التجمع الخامس، القاهرة الجديدة' },
    year: '2006-2011',
    description: {
      en: 'Multiple residential buildings in El-Banafseg district. Buildings 3, 8 and residential apartments with complete finishing and modern design standards.',
      ar: 'مباني سكنية متعددة في حي البنفسج. مباني 3 و 8 وشقق سكنية بتشطيبات كاملة ومعايير تصميم عصرية.'
    },
    details: [
      { en: 'Multiple buildings in El-Banafseg', ar: 'مباني متعددة في البنفسج' },
      { en: 'Residential apartments', ar: 'شقق سكنية' },
      { en: 'Complete finishing works', ar: 'أعمال تشطيب كاملة' },
      { en: 'Quality construction', ar: 'بناء عالي الجودة' },
    ],
    image: '/images/banafseg-building.jpg',
    gallery: ['/images/banafseg-building.jpg'],
    status: 'completed',
  },
  {
    id: 'mostashareen',
    title: { en: 'Mostashareen Building', ar: 'مبنى المستشارين' },
    category: { en: 'Real Estate', ar: 'الاستثمار العقاري' },
    location: { en: 'Fifth Settlement, New Cairo', ar: 'التجمع الخامس، القاهرة الجديدة' },
    year: '2009',
    description: {
      en: 'Building in El-Mostsharen compound, Fifth Settlement. Located in the Northern Investors area with modern design and complete finishing.',
      ar: 'مبنى في كمبوند المستشارين بالتجمع الخامس. يقع في منطقة المستثمرين الشمالية بتصميم عصري وتشطيبات كاملة.'
    },
    details: [
      { en: 'Location: El-Mostsharen', ar: 'الموقع: المستشارين' },
      { en: 'Northern Investors area', ar: 'منطقة المستثمرين الشمالية' },
      { en: 'Modern design', ar: 'تصميم عصري' },
      { en: 'Complete finishing', ar: 'تشطيبات كاملة' },
    ],
    image: '/images/mostashareen.jpg',
    gallery: ['/images/mostashareen.jpg'],
    status: 'completed',
  },
  {
    id: 'engineers-club',
    title: { en: 'Engineers Syndicate Club', ar: 'نادي نقابة المهندسين' },
    category: { en: 'Contracting', ar: 'المقاولات' },
    location: { en: 'Fifth Settlement, New Cairo', ar: 'التجمع الخامس، القاهرة الجديدة' },
    year: '2022-Present',
    description: {
      en: 'Proposal design for courts and other activities in Egyptian Engineers Syndicate club in the 5th settlement. Comprehensive sporting facilities design.',
      ar: 'مقترح لتصميم ملاعب وخدمات لنادي نقابة المهندسين Egyptians بالتجمع الخامس. تصميم شامل لمرافق رياضية.'
    },
    details: [
      { en: 'Sports courts design', ar: 'تصميم ملاعب رياضية' },
      { en: 'Recreational facilities', ar: 'مرافق ترفيهية' },
      { en: 'Modern sporting complex', ar: 'مجمع رياضي عصري' },
      { en: '5th settlement location', ar: 'موقع في التجمع الخامس' },
    ],
    image: '/images/engineers-club.jpg',
    gallery: ['/images/engineers-club.jpg'],
    status: 'current',
  },
  {
    id: 'nesreen-center',
    title: { en: 'Nesreen Tafesh Center', ar: 'مركز نسرين طافش' },
    category: { en: 'Interior', ar: 'التصميم الداخلي' },
    location: { en: 'Al-Reef Al-Europi, Cairo', ar: 'الريف الأوروبي، القاهرة' },
    year: '2022-Present',
    description: {
      en: 'Design solutions for Holistic Center project at Cairo-Alexandria Desert Road. Complete interior design and execution for wellness center.',
      ar: 'حلول تصميمية لمشروع سنتر هوليستيك على طريق مصر الإسكندرية الصحراوي. تصميم داخلي وتنفيذ كامل لمركز عافية.'
    },
    details: [
      { en: 'Holistic wellness center', ar: 'مركز عافية شامل' },
      { en: 'Cairo-Alex Desert Road', ar: 'طريق مصر الإسكندرية الصحراوي' },
      { en: 'Complete interior design', ar: 'تصميم داخلي كامل' },
      { en: 'Modern execution', ar: 'تنفيذ عصري' },
    ],
    image: '/images/nesreen-center.jpg',
    gallery: ['/images/nesreen-center.jpg'],
    status: 'current',
  },
  {
    id: 'agricultural-bank',
    title: { en: 'Agricultural Bank Renovation', ar: 'تجديد البنك الزراعي' },
    category: { en: 'Maintenance', ar: 'الصيانة' },
    location: { en: 'Multiple Governorates, Egypt', ar: 'محافظات متعددة، مصر' },
    year: '2020-2023',
    description: {
      en: 'Developing branches of the Agricultural Bank of Egypt across multiple governorates. From as-built drawings to finishing process according to typical model.',
      ar: 'تطوير فروع البنك الزراعي المصري في محافظات متعددة. من الرسومات المبنية إلى عملية التشطيب وفقاً للنموذج النمطى.'
    },
    details: [
      { en: '5 branches development', ar: 'تطوير 5 فروع' },
      { en: 'As-built to finishing', ar: 'من الرسومات المبنية إلى التشطيب' },
      { en: 'New plumbing systems', ar: 'أنظمة سباكة جديدة' },
      { en: 'Facade renovation', ar: 'تجديد الواجهات' },
    ],
    image: '/images/agricultural-bank.jpg',
    gallery: ['/images/agricultural-bank.jpg'],
    status: 'current',
  },
  {
    id: 'suez-governorate',
    title: { en: 'Suez Governorate', ar: 'محافظة السويس' },
    category: { en: 'Maintenance', ar: 'الصيانة' },
    location: { en: 'Suez, Egypt', ar: 'السويس، مصر' },
    year: '2021-2023',
    description: {
      en: 'Raising efficiency and facade renovation of Suez Governorate buildings. Including Al-Tawfiqia and Al-Kawthar buildings renovation.',
      ar: 'رفع كفاءة وتجديد واجهات مباني محافظة السويس. تشمل تجديد عمارات التوفيقية والكوثر.'
    },
    details: [
      { en: 'Facade renovation', ar: 'تجديد الواجهات' },
      { en: 'Al-Tawfiqia buildings', ar: 'عمارات التوفيقية' },
      { en: 'Al-Kawthar buildings', ar: 'عمارات الكوثر' },
      { en: 'Efficiency improvement', ar: 'تحسين الكفاءة' },
    ],
    image: '/images/suez-governorate.jpg',
    gallery: ['/images/suez-governorate.jpg'],
    status: 'completed',
  },
  {
    id: 'dr-youssef',
    title: { en: 'Dr. Youssef Al-Amiri Apartment', ar: 'شقة الدكتور يوسف العميري' },
    category: { en: 'Interior', ar: 'التصميم الداخلي' },
    location: { en: 'Cairo, Egypt', ar: 'القاهرة، مصر' },
    year: '2024-2025',
    description: {
      en: 'Complete interior design and finishing for Dr. Youssef Al-Amiri apartment. 3D design solutions and luxury finishing works.',
      ar: 'تصميم داخلي وتشطيب كامل لشقة الدكتور يوسف العميري. حلول تصميم ثلاثية الأبعاد وتشطيبات فاخرة.'
    },
    details: [
      { en: '3D design solutions', ar: 'حلول تصميم ثلاثية الأبعاد' },
      { en: 'Luxury finishing', ar: 'تشطيبات فاخرة' },
      { en: 'Complete interior design', ar: 'تصميم داخلي كامل' },
      { en: 'Modern execution', ar: 'تنفيذ عصري' },
    ],
    image: '/images/dr-youssef.jpg',
    gallery: ['/images/dr-youssef.jpg'],
    status: 'current',
  },
  {
    id: 'interior-design',
    title: { en: 'Interior Design Projects', ar: 'مشاريع التصميم الداخلي' },
    category: { en: 'Interior', ar: 'التصميم الداخلي' },
    location: { en: 'Multiple Locations, Egypt', ar: 'مواقع متعددة، مصر' },
    year: '2020-Present',
    description: {
      en: 'Various interior design and execution projects including administrative offices, malls, and residential units across Egypt.',
      ar: 'مشاريع تصميم داخلي وتنفيذ متعددة تشمل مكاتب إدارية ومولات ووحدات سكنية في أنحاء مصر.'
    },
    details: [
      { en: 'Administrative offices', ar: 'مكاتب إدارية' },
      { en: 'Mall interiors', ar: 'تصميمات مولات' },
      { en: 'Residential units', ar: 'وحدات سكنية' },
      { en: '3D design solutions', ar: 'حلول تصميم ثلاثية الأبعاد' },
    ],
    image: '/images/interior-design.jpg',
    gallery: ['/images/interior-design.jpg'],
    status: 'current',
  },
]
