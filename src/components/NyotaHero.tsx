import { motion } from 'framer-motion'
import { ArrowUpRight, Sparkles, ChevronDown } from 'lucide-react'
import aiHero from '@/assets/ai-hero.jpg'

export function NyotaHero() {
  return (
    <div className="relative min-h-screen flex flex-col overflow-hidden">

      {/* Full-bleed background image */}
      <img
        src={aiHero}
        alt="AI robot hand holding a chip"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Dark overlay for readability */}
      <div className="absolute inset-0 bg-black/55 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 flex flex-col justify-center flex-1 px-8 sm:px-14 lg:px-20 pt-32 pb-24">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 w-fit text-slate-300 px-4 py-2 rounded-full text-xs font-semibold mb-8 tracking-wide uppercase"
        >
          <Sparkles className="w-3 h-3 text-primary" />
          AI Consultancy · Africa
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.65, delay: 0.1 }}
          className="font-heading text-4xl sm:text-5xl xl:text-6xl font-bold leading-[1.1] tracking-tight text-slate-100 mb-6 max-w-3xl"
        >
          We help businesses
          <br />
          adopt AI to{' '}
          <span className="italic text-primary">automate,</span>
          <br />
          <span className="italic text-primary">cut costs,</span> and scale.
        </motion.h1>

        {/* Sub-copy */}
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-sm sm:text-base text-slate-400 leading-relaxed mb-10 max-w-md"
        >
          From intelligent chatbots to custom dashboards — practical AI
          systems built for the real world, tailored to African businesses.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-start sm:items-center gap-3"
        >
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="inline-flex items-center gap-2 bg-white text-black hover:bg-white/90 transition-colors px-7 py-3.5 rounded-full text-sm font-semibold shadow-md"
          >
            Book a Free Consultation
            <ArrowUpRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => document.getElementById('services')?.scrollIntoView({ behavior: 'smooth' })}
            className="inline-flex items-center gap-2 border border-slate-400/40 text-slate-200 hover:bg-white/10 transition-colors px-7 py-3.5 rounded-full text-sm font-semibold"
          >
            See Our Services
          </button>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="flex flex-wrap gap-x-10 gap-y-4 mt-14"
        >
          {[
            { value: '50+', label: 'Businesses Served' },
            { value: '8', label: 'Service Categories' },
            { value: '4', label: 'Industry Verticals' },
            { value: '24/7', label: 'AI Systems Running' },
          ].map((stat) => (
            <div key={stat.label} className="flex flex-col">
              <span className="font-heading text-2xl font-bold text-slate-100">{stat.value}</span>
              <span className="text-xs text-slate-400 mt-0.5 tracking-wide">{stat.label}</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/50 z-20"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-4 h-4 animate-bounce" />
      </motion.div>
    </div>
  )
}
