import { useState, useEffect } from 'react'

interface ContentData {
  hero: any
  about: any
  services: any
  divisions: any
  clients: any
  stats: any
  timeline: any
  cta: any
  contact: any
  footer: any
}

const defaultContent: ContentData = {
  hero: {
    titleEn: 'Innovating Spaces, Building Futures',
    titleAr: 'ابتكار المساحات، بناء المستقبل',
    subtitleEn: 'Est. 2004 - Architect Mohamed Yehia Group',
    subtitleAr: 'تأسست عام 2004 - مجموعة المهندس محمد يحيى',
    descriptionEn: 'A multidisciplinary real estate and engineering company established in 2004 in cooperation with Gulf Countries. Over 90 projects completed across Egypt and abroad.',
    descriptionAr: 'شركة عقارية وهندسية متعددة التخصصات تأسست عام 2004 بالتعاون مع دول الخليج. أكثر من 90 مشروع منجز في مصر وخارجها.',
    video: '/bg-video.mp4'
  },
  about: {
    titleEn: 'Who We Are',
    titleAr: 'من نحن',
    descriptionEn: 'Architect Mohamed Yehia Group was established in 2004 in cooperation with Gulf Countries. The company has completed more than 90 projects throughout the Arab Republic of Egypt and abroad.',
    descriptionAr: 'تأسست مجموعة المهندس محمد يحيى في عام 2004 بالتعاون مع دول الخليج. أنجزت الشركة أكثر من 90 مشروع في جميع أنحاء جمهورية مصر العربية وخارجها.',
    missionEn: 'To be unique in engineering and real estate fields by using the latest technologies while working within sustainability guidelines.',
    missionAr: 'أن نكون فريدين في المجال الهندسي والعقاري باستخدام أحدث التقنيات أثناء العمل ضمن إرشادات الاستدامة.',
    visionEn: 'To be a leading architecture firm, contractor and real estate agency in Egypt, reaching Africa in the near future.',
    visionAr: 'أن نكون شركة معمارية رائدة ومقاول ووكالة عقارية في مصر، للوصول إلى أفريقيا في المستقبل القريب.'
  },
  services: {
    titleEn: 'Our Divisions',
    titleAr: 'أقسامنا',
    descriptionEn: 'A multidisciplinary company with 6 specialized divisions serving Egypt and international markets since 2004.',
    descriptionAr: 'شركة متعددة التخصصات مع 6 أقسام متخصصة تخدم مصر والأسواق الدولية منذ عام 2004.'
  },
  divisions: {},
  clients: {
    titleEn: 'Trusted Partners',
    titleAr: 'شركاء موثوقون',
    descriptionEn: 'We are proud to work with leading organizations across Egypt and the Gulf region.',
    descriptionAr: 'نحن فخورون بالعمل مع المؤسسات الرائدة في مصر ودول الخليج.'
  },
  stats: {
    titleEn: 'Our Achievements',
    titleAr: 'إنجازاتنا',
    value1: '90+', label1En: 'Projects Completed', label1Ar: 'مشروع منجز',
    value2: '20+', label2En: 'Years of Excellence', label2Ar: 'عاماً من التميز',
    value3: '6', label3En: 'Specialized Divisions', label3Ar: 'أقسام متخصصة',
    value4: '15+', label4En: 'Cities Across Egypt', label4Ar: 'مدينة في مصر'
  },
  timeline: {
    titleEn: 'Our Journey',
    titleAr: 'رحلتنا',
    descriptionEn: 'From our founding in 2004 to today, we have continuously grown and delivered excellence.',
    descriptionAr: 'من تأسيسنا في 2004 حتى اليوم، نمونا باستمرار ونقدم التميز.'
  },
  cta: {
    titleEn: 'Start Your Project Today',
    titleAr: 'ابدأ مشروعك اليوم',
    descriptionEn: 'Ready to bring your vision to life? Contact us for a free consultation and let\'s build something extraordinary together.',
    descriptionAr: 'مستعد لتحويل رؤيتك إلى واقع؟ تواصل معنا لاستشارة مجانية ودعنا نبني شيئاً استثنائياً معاً.',
    buttonEn: 'Get Free Consultation',
    buttonAr: 'احصل على استشارة مجانية'
  },
  contact: {
    titleEn: 'Contact Us',
    titleAr: 'تواصل معنا',
    addressEn: 'Zaher Towers Bldg 2, Apt 316B, Maamoun St., Nasr City, Cairo',
    addressAr: 'أبراج زاهر برج 2 شقة 316 ب، شارع المأمون، مدينة نصر، القاهرة',
    phone: '02-20776044',
    email: 'info@mygroup-eg.com',
    facebook: 'https://facebook.com/mohamedyehiagroup',
    instagram: 'https://instagram.com/mohamed_yehia_group',
    linkedin: 'https://linkedin.com/company/mohamed-yehia-group'
  },
  footer: {
    copyrightEn: '© 2024 CoreTrust. All rights reserved.',
    copyrightAr: '© 2024 كورتراست. جميع الحقوق محفوظة.'
  }
}

export function useContent() {
  const [content, setContent] = useState<ContentData>(defaultContent)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('/api/content')
      .then(res => res.json())
      .then(data => {
        if (data && typeof data === 'object') {
          setContent({
            hero: { ...defaultContent.hero, ...data.hero },
            about: { ...defaultContent.about, ...data.about },
            services: { ...defaultContent.services, ...data.services },
            divisions: data.divisions || defaultContent.divisions,
            clients: { ...defaultContent.clients, ...data.clients },
            stats: { ...defaultContent.stats, ...data.stats },
            timeline: { ...defaultContent.timeline, ...data.timeline },
            cta: { ...defaultContent.cta, ...data.cta },
            contact: { ...defaultContent.contact, ...data.contact },
            footer: { ...defaultContent.footer, ...data.footer }
          })
        }
        setLoading(false)
      })
      .catch(() => {
        setLoading(false)
      })
  }, [])

  return { content, loading }
}
