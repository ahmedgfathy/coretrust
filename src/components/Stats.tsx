import { useLanguage } from '../context/LanguageContext'
import { useContent } from '../hooks/useContent'

const Stats = () => {
  const { t } = useLanguage()
  const { content } = useContent()

  const stats = [
    { number: content.stats.value1 || '90+', label: t(content.stats.label1En || 'Projects Completed', content.stats.label1Ar || 'مشاريع مكتملة') },
    { number: content.stats.value2 || '20+', label: t(content.stats.label2En || 'Years Experience', content.stats.label2Ar || 'سنوات خبرة') },
    { number: content.stats.value3 || '6', label: t(content.stats.label3En || 'Service Divisions', content.stats.label3Ar || 'أقسام الخدمات') },
    { number: content.stats.value4 || '4+', label: t(content.stats.label4En || 'Countries Served', content.stats.label4Ar || 'دول نخدمها') },
  ]

  return (
    <section className="py-14 sm:py-18 lg:py-20 bg-white relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-brand-200 to-transparent"></div>
        <div className="absolute top-0 left-2/4 w-px h-full bg-gradient-to-b from-transparent via-brand-200 to-transparent"></div>
        <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-brand-200 to-transparent"></div>
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-2 gap-6 sm:gap-8 lg:gap-8">
          {stats.map((s, i) => (
            <div key={i} className="text-center">
              <span className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold brand-text" style={{ fontFamily: 'Playfair Display, serif' }}>{s.number}</span>
              <p className="text-dark-400 mt-2 sm:mt-3 text-[10px] sm:text-xs md:text-sm uppercase tracking-wider">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Stats
