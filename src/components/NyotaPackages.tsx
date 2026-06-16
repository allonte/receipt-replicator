import { motion } from 'framer-motion'
import { Check, ArrowRight } from 'lucide-react'
import { Button } from './ui/button'

const packages = [
  {
    name: 'SME AI Starter',
    price: 'KES 30,000 – 150,000',
    description: 'Perfect for small businesses getting started with AI automation.',
    features: [
      'AI chatbot for website or WhatsApp',
      'Basic automation (reports, invoices)',
      'AI business setup guide',
      'Email & chat support',
    ],
    highlight: false,
    from: -60,
  },
  {
    name: 'Enterprise AI Transformation',
    price: 'KES 100,000 – 1M+',
    description: 'Comprehensive AI overhaul for established companies ready to scale.',
    features: [
      'Custom AI system design',
      'Full workflow automation',
      'AI management dashboards',
      'Staff training & onboarding',
      'Dedicated support & maintenance',
    ],
    highlight: true,
    from: 0,
  },
  {
    name: 'AI Training for Teams',
    price: 'KES 30,000 – 150,000',
    description: 'Upskill your team with hands-on AI training workshops.',
    features: [
      '1-day or 2-day workshops',
      'Prompt engineering for teams',
      'AI adoption strategy',
      'Certificate of completion',
    ],
    highlight: false,
    from: 60,
  },
]

export function NyotaPackages() {
  return (
    <div className="py-24 bg-card/50">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Pricing</span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mt-3 mb-4">
            Starter Packages
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Transparent pricing designed for the Kenyan market. Custom quotes available.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, x: pkg.from, y: pkg.from === 0 ? 30 : 0 }}
              whileInView={{ opacity: 1, x: 0, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.55, delay: i * 0.1 }}
              className={`rounded-xl p-8 gentle-animation ${
                pkg.highlight
                  ? 'bg-foreground text-background ring-2 ring-primary scale-[1.02]'
                  : 'bg-background clean-border'
              }`}
            >
              <h3 className={`font-heading text-xl font-bold mb-2 ${pkg.highlight ? 'text-background' : 'text-foreground'}`}>
                {pkg.name}
              </h3>
              <div className={`font-heading text-2xl font-bold mb-3 ${pkg.highlight ? 'text-primary-foreground' : 'text-primary'}`}>
                {pkg.price}
              </div>
              <p className={`text-sm mb-6 ${pkg.highlight ? 'text-background/70' : 'text-muted-foreground'}`}>
                {pkg.description}
              </p>
              <ul className="space-y-3 mb-8">
                {pkg.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className={`w-4 h-4 mt-0.5 flex-shrink-0 ${pkg.highlight ? 'text-accent-gold' : 'text-accent-green'}`} />
                    <span className={`text-sm ${pkg.highlight ? 'text-background/80' : 'text-muted-foreground'}`}>{feature}</span>
                  </li>
                ))}
              </ul>
              <Button
                onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                className={`w-full ${
                  pkg.highlight
                    ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                    : 'bg-foreground text-background hover:bg-foreground/90'
                }`}
              >
                Get Started
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
