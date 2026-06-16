import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import nyotaLogo from '@/assets/nyota-logo.png'

const navItems = [
  { label: 'Home', id: 'home' },
  { label: 'About', id: 'about' },
  { label: 'Services', id: 'services' },
  { label: 'Custom Software', id: 'custom-software' },
  { label: 'Packages', id: 'packages' },
  { label: 'E-Commerce', id: 'ecommerce' },
  { label: 'Contact', id: 'contact' },
]

export function NyotaNavigation() {
  const [isOpen, setIsOpen] = useState(false)

  const handleScroll = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setIsOpen(false)
  }

  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      {/* Gradient fade so text is always readable over the hero image */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-transparent pointer-events-none" />

      <div className="relative container mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <img 
            src={nyotaLogo} 
            alt="all&co" 
            className="h-10 w-auto brightness-0 invert"
          />

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className="text-sm font-medium text-white/80 hover:text-white transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button
              onClick={() => handleScroll('contact')}
              className="text-sm font-semibold bg-white/15 hover:bg-white/25 text-white border border-white/30 px-5 py-2 rounded-full transition-colors backdrop-blur-sm"
            >
              Book a Call
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-1 bg-black/80 backdrop-blur-md rounded-xl mt-1 px-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleScroll(item.id)}
                className="block w-full text-left px-4 py-3 text-sm font-medium text-white/80 hover:text-white hover:bg-white/10 rounded-lg transition-colors"
              >
                {item.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}
