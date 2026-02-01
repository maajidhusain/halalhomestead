import logo from '../assets/logo.png'

export default function Header() {
  return (
    <header className="sticky top-0 z-50 backdrop-blur bg-white/60 dark:bg-black/40 border-b border-white/10">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-3 md:px-6 py-3">
        <a href="#" className="flex items-center gap-2 md:gap-3 no-underline">
          <div className="w-10 md:w-12 h-10 md:h-12 rounded-full overflow-hidden shadow-xl ring-1 ring-white/30 transform transition hover:scale-105">
            <img src={logo} alt="Halal Homestead" className="w-full h-full object-cover" />
          </div>
          <span className="text-base md:text-lg font-bold text-slate-900 dark:text-slate-100">Halal Homestead</span>
        </a>

        <nav className="flex items-center gap-1 md:gap-3">
          <a href="#products" className="px-2 md:px-3 py-2 rounded-full text-xs md:text-sm font-extrabold text-slate-900 bg-slate-100/60">Jerky</a>
          <a href="#founder" className="px-2 md:px-3 py-2 rounded-full text-xs md:text-sm font-medium text-slate-700 hover:bg-slate-100/60">Founder</a>
          <a href="#yea" className="px-2 md:px-3 py-2 rounded-full text-xs md:text-sm font-medium text-slate-700 hover:bg-slate-100/60">YEA!</a>
        </nav>
      </div>
    </header>
  )
}
