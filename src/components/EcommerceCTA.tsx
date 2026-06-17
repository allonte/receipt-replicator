import { motion } from 'framer-motion'
import { ArrowUpRight, ShoppingBag, Smartphone, Gamepad2, Laptop } from 'lucide-react'
import { Link } from 'react-router-dom'

const highlights = [
  { icon: Smartphone, label: 'iPhones' },
  { icon: Gamepad2, label: 'PlayStation' },
  { icon: Laptop, label: 'Electronics' },
  { icon: ShoppingBag, label: 'And more' },
]

export function EcommerceCTA() {
  return (
    <div className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="relative overflow-hidden rounded-3xl bg-foreground text-background p-10 sm:p-16"
        >
          <div className="absolute -top-24 -right-24 w-72 h-72 rounded-full bg-primary/30 blur-3xl pointer-events-none" />
          <div className="relative max-w-3xl">
            <span className="text-xs font-semibold uppercase tracking-wider text-primary">
              all&co Store
            </span>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold mt-3 mb-5 leading-tight">
              Shop iPhones, PlayStations & more — delivered fast.
            </h2>
            <p className="text-base sm:text-lg text-background/70 mb-8 max-w-xl">
              Browse authentic devices and accessories in our online store. Secure checkout, transparent prices, friendly support.
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              {highlights.map((h) => (
                <div
                  key={h.label}
                  className="inline-flex items-center gap-2 bg-background/10 border border-background/15 px-4 py-2 rounded-full text-sm"
                >
                  <h.icon className="w-4 h-4 text-primary" />
                  {h.label}
                </div>
              ))}
            </div>

            <Link
              to="/ecommerce"
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground hover:bg-primary/90 transition-colors px-7 py-3.5 rounded-full text-sm font-semibold shadow-md"
            >
              Enter the Store
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </motion.div>
      </div>
    </div>
  )
}
