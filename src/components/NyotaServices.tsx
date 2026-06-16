import { motion } from 'framer-motion'
import { Bot, Cpu, BarChart3, Plug, GraduationCap, Megaphone, Settings, MessageSquare } from 'lucide-react'

const services = [
  {
    icon: Settings,
    title: 'Business Automation',
    description: 'Automate reports, invoices, data entry, approvals, stock updates and workflow processes to save time and money.',
    clients: 'SMEs, logistics, construction, hire companies',
  },
  {
    icon: Cpu,
    title: 'Custom AI Systems',
    description: 'Tailored AI tools — inventory systems, hire management, AI-powered POS, and management dashboards.',
    clients: 'Hotels, retail, scaffold hire, boba shops',
  },
  {
    icon: MessageSquare,
    title: 'AI Chatbots',
    description: 'Website and WhatsApp chatbots for customer support, order tracking, FAQs, bookings, and hire inquiries.',
    clients: 'Hotels, schools, hospitals, real estate, e-commerce',
  },
  {
    icon: BarChart3,
    title: 'Data & Decision Making',
    description: 'Sales prediction, demand forecasting, stock optimization, BI dashboards, and automated reports.',
    clients: 'Companies with existing data sets',
  },
  {
    icon: Plug,
    title: 'AI Integration',
    description: 'AI-enable existing ERP, CRM, POS systems with smart search, recommendations, summaries, and fraud detection.',
    clients: 'Companies with existing software',
  },
  {
    icon: GraduationCap,
    title: 'Training & Consulting',
    description: 'Corporate AI workshops, adoption strategy for executives, prompt engineering, and AI policy setup.',
    clients: 'Banks, corporates, NGOs, universities, startups',
  },
  {
    icon: Megaphone,
    title: 'AI for Marketing',
    description: 'AI-powered social media content, ad copywriting, website content, SEO optimization, and lead generation bots.',
    clients: 'SMEs and marketing teams',
  },
  {
    icon: Bot,
    title: 'AI-Powered Support',
    description: 'Intelligent assistants that handle customer queries around the clock across multiple channels.',
    clients: 'Any customer-facing business',
  },
]

export function NyotaServices() {
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
          <span className="text-sm font-semibold text-primary uppercase tracking-wider">What We Do</span>
          <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mt-3 mb-4">
            Our Services
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Practical, high-impact AI solutions designed for the Kenyan and African market.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.07 }}
              className="bg-background clean-border rounded-xl p-6 hover:elevated-shadow gentle-animation group"
            >
              <div className="w-12 h-12 rounded-lg bg-foreground/10 flex items-center justify-center mb-4 group-hover:bg-foreground/20 gentle-animation">
                <service.icon className="w-6 h-6 text-foreground" />
              </div>
              <h3 className="font-heading text-lg font-semibold text-foreground mb-2">{service.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-3">{service.description}</p>
              <p className="text-xs text-primary/80 font-medium">For: {service.clients}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
