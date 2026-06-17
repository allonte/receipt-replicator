import { motion } from 'framer-motion'
import { GraduationCap, HardHat, HeartPulse, Hotel, Landmark, MapPin, ShoppingBag, Truck } from 'lucide-react'
import { KenyaCountiesMap } from './KenyaCountiesMap'
import founderPhoto from '@/assets/founder-photo.jpeg'

const sectors = [
  {
    icon: HeartPulse,
    title: 'Healthcare',
    items: ['Appointment bots', 'Patient triage chatbots', 'AI summaries for doctors', 'Records management'],
  },
  {
    icon: HardHat,
    title: 'Construction & Engineering',
    items: ['AI for hire equipment tracking', 'Project forecasting', 'Site management reports', 'Delivery notes & stock reconciliation'],
  },
  {
    icon: GraduationCap,
    title: 'Education & Training',
    items: ['AI tutoring assistants', 'Learner progress analytics', 'Admissions query automation', 'Course content personalization'],
  },
  {
    icon: Landmark,
    title: 'Financial Services',
    items: ['Fraud detection support', 'Automated compliance checks', 'Loan pre-screening assistants', 'Customer risk insights'],
  },
  {
    icon: Hotel,
    title: 'Hospitality',
    items: ['AI booking assistants', 'POS recommendations', 'Customer feedback analysis', 'Revenue optimization'],
  },
  {
    icon: Truck,
    title: 'Logistics',
    items: ['Route optimization', 'AI delivery tracking', 'Document processing', 'Fleet management insights'],
  },
  {
    icon: ShoppingBag,
    title: 'Retail & E-Commerce',
    items: ['Demand forecasting', 'AI product recommendations', 'Customer support automation', 'Inventory planning insights'],
  },
]

export function NyotaSectors() {
  return (
    <div className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12">

        {/* About / Founder section */}
        <div className="max-w-6xl mx-auto mb-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

            {/* Founder photo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center lg:justify-start"
            >
              <div className="relative">
                {/* Decorative border frame */}
                <div className="absolute -inset-3 rounded-2xl border-2 border-primary/20 rotate-2" />
                <div className="absolute -inset-3 rounded-2xl border border-primary/10 -rotate-1" />
                <img
                  src={founderPhoto}
                  alt="Founder of all&co"
                  className="relative w-72 h-96 object-cover rounded-2xl shadow-2xl"
                />
                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-xl px-4 py-3 shadow-lg">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-primary" />
                    <div>
                      <div className="text-xs font-bold text-foreground">Founder & CEO</div>
                      <div className="text-xs text-muted-foreground">Nairobi, Kenya</div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Text + Map */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <span className="text-sm font-semibold text-primary uppercase tracking-wider">About Us</span>
              <div className="flex items-center gap-3 mt-3 mb-6">
                <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground">
                  Built in Nairobi.<br />Built for Africa.
                </h2>
                <div className="flex items-center gap-1.5 bg-primary/10 border border-primary/30 rounded-lg px-3 py-2 whitespace-nowrap h-fit">
                  <MapPin className="w-4 h-4 text-primary" />
                  <span className="text-sm font-semibold text-primary">Nairobi HQ</span>
                </div>
              </div>
              <p className="text-muted-foreground text-lg leading-relaxed mb-4">
                all&co is an AI consultancy headquartered in Nairobi, Kenya. We build practical,
                real-world AI systems for African businesses — from chatbots and automation to
                custom dashboards and intelligent workflows.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Our team understands the unique challenges of operating on the continent — unreliable
                infrastructure, multilingual customers, and the need for cost-effective solutions that
                actually work without enterprise-sized budgets.
              </p>

              {/* Map */}
              <KenyaCountiesMap />
            </motion.div>
          </div>
        </div>

        <div className="text-center mb-16">
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Industries</span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mt-3 mb-4">
            High-Value Sectors
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Deep expertise in industries where AI delivers the most impact.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {sectors.map((sector, i) => (
            <motion.div
              key={sector.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="bg-card clean-border rounded-xl p-8 hover:elevated-shadow gentle-animation"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-foreground/10 flex items-center justify-center">
                  <sector.icon className="w-7 h-7 text-foreground" />
                </div>
                <h3 className="font-heading text-xl font-semibold text-foreground">{sector.title}</h3>
              </div>
              <ul className="space-y-3">
                {sector.items.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                    <span className="text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
