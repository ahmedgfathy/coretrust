const Logo = () => {
  return (
    <a href="#home" className="flex items-center gap-4">
      <div className="relative">
        <img
          src="https://mygroup-eg.com/wp-content/uploads/2026/02/لقطة_شاشة_2026-02-15_160729-removebg-preview.png"
          alt="Mohammed Yahia Group"
          className="h-20 md:h-24 w-auto"
        />
        <div className="absolute inset-0 bg-[#d4a017]/25 blur-2xl rounded-full"></div>
      </div>
      <span
        className="gold-shimmer font-bold text-sm md:text-lg tracking-[0.3em] hidden sm:block"
        style={{
          fontFamily: 'Playfair Display, serif',
          textShadow: '0 0 15px rgba(212,160,23,0.9), 0 0 30px rgba(212,160,23,0.6), 0 0 50px rgba(212,160,23,0.4)',
        }}
      >
        MOHAMED YAHIA GROUP
      </span>
    </a>
  )
}

export default Logo
