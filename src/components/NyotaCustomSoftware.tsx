import { motion } from 'framer-motion'
import { Zap, Palette, Cog, Shield, TrendingUp, Users, HardHat, Globe, Building2, Stethoscope, GraduationCap, Briefcase, ShoppingCart, Search } from 'lucide-react'
import { Button } from './ui/button'

const features = [
  { icon: Zap, title: 'Lightning Fast', description: 'Optimized AI systems that run efficiently at scale' },
  { icon: Palette, title: 'Custom Built', description: 'Tailored to your exact business processes and needs' },
  { icon: Cog, title: 'Seamless Integration', description: 'Integrates with your existing tools and workflows' },
  { icon: Shield, title: 'Secure & Reliable', description: 'Enterprise-grade security and 99.9% uptime' },
  { icon: TrendingUp, title: 'Growth Ready', description: 'Scales with your business as you grow' },
  { icon: Users, title: 'Full Support', description: 'Dedicated team to maintain and improve your system' },
]

const examples = [
  {
    icon: HardHat,
    industry: 'Construction',
    system: 'Scaffold Management Systems',
    benefit: 'Track equipment, automate hire/return, optimize inventory in real-time',
    color: 'bg-orange-500/10 text-orange-500',
  },
  {
    icon: Globe,
    industry: 'Web',
    system: 'Custom Websites',
    benefit: 'AI-powered content, SEO optimization, smart lead capture',
    color: 'bg-blue-500/10 text-blue-500',
  },
  {
    icon: Building2,
    industry: 'Construction',
    system: 'Construction Management Systems',
    benefit: 'Project tracking, resource allocation, automated reporting',
    color: 'bg-yellow-500/10 text-yellow-600',
  },
  {
    icon: Stethoscope,
    industry: 'Healthcare',
    system: 'Hospital Management Systems',
    benefit: 'Patient records, appointment scheduling, billing automation',
    color: 'bg-red-500/10 text-red-500',
  },
  {
    icon: GraduationCap,
    industry: 'Education',
    system: 'School Management Systems',
    benefit: 'Student records, attendance tracking, report generation, fee management',
    color: 'bg-purple-500/10 text-purple-500',
  },
  {
    icon: Briefcase,
    industry: 'HR',
    system: 'Workers Management System',
    benefit: 'Payroll, attendance, performance tracking, leave management',
    color: 'bg-green-500/10 text-green-600',
  },
  {
    icon: ShoppingCart,
    industry: 'Retail',
    system: 'Billing & Point of Sale',
    benefit: 'Fast checkout, inventory sync, sales analytics, customer loyalty',
    color: 'bg-primary/10 text-primary',
  },
  {
    icon: Search,
    industry: 'Research',
    system: 'Research Job Custom Software',
    benefit: 'Automated literature review, data extraction, citation management, AI-powered insights and reporting',
    color: 'bg-teal-500/10 text-teal-600',
  },
]

export function NyotaCustomSoftware() {
  return (
    <div className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">Custom Solutions</span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mt-3 mb-4">
            Custom AI Software Built for You
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            We don't build off-the-shelf. We build exactly what your business needs to compete and scale.
          </p>
        </motion.div>

        {/* Features Grid — alternating left/right */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="bg-card clean-border rounded-xl p-6 hover:elevated-shadow gentle-animation"
            >
              <div className="w-12 h-12 rounded-lg bg-foreground/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Real Examples */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="font-heading text-2xl font-bold text-foreground mb-8 text-center"
          >
            Real World Examples
          </motion.h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {examples.map((example, i) => {
              const Icon = example.icon
              return (
                <motion.div
                  key={example.system}
                  initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.06 }}
                  className="bg-card border border-border rounded-2xl p-6 flex flex-col gap-4 hover:shadow-md transition-shadow"
                >
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-foreground/10">
                    <Icon className="w-6 h-6 text-foreground" />
                  </div>
                  <div>
                    <span className={`text-xs font-semibold uppercase tracking-wider ${example.color.split(' ')[1]}`}>
                      {example.industry}
                    </span>
                    <h4 className="font-heading font-bold text-foreground mt-1 mb-2 leading-tight">
                      {example.system}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">{example.benefit}</p>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-muted-foreground mb-6 text-lg">
            Ready to build something extraordinary?
          </p>
          <Button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 text-lg"
          >
            Schedule a Consultation
          </Button>
        </motion.div>
      </div>
    </div>
  )
}
