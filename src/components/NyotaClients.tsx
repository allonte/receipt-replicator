import { motion } from 'framer-motion'
import ballanLogo from '@/assets/ballan-software-logo.png'
import murbanLogo from '@/assets/murban-engineering-logo.ico'
import mazikaLogo from '@/assets/mazika-engineering-logo.png'
import otnoLogo from '@/assets/otno-logo.png'

const clients = [
  { name: 'Ballan Software', logo: ballanLogo },
  { name: 'Murban Engineering', logo: murbanLogo },
  { name: 'Mazika Engineering', logo: mazikaLogo },
  { name: 'Otno', logo: otnoLogo },
]

const LogoCard = ({ name, logo }: { name: string; logo: string }) => (
  <div className="flex items-center justify-center gap-3 px-8 py-4 mx-4 min-w-[180px] h-16 flex-shrink-0">
    <img src={logo} alt={name} className="h-8 w-8 object-contain" />
    <span className="text-sm font-semibold text-foreground whitespace-nowrap">{name}</span>
  </div>
)

export function NyotaClients() {
  return (
    <section className="py-16 overflow-hidden border-y border-border bg-muted/20">
      <div className="container mx-auto px-6 lg:px-12 mb-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-sm font-semibold uppercase tracking-widest text-primary mb-2">Trusted By</p>
          <h2 className="text-3xl font-bold text-foreground">Our Previous Clients</h2>
          <p className="text-muted-foreground mt-2 max-w-xl mx-auto">
            Proud to have worked with leading organizations across Kenya and beyond.
          </p>
        </motion.div>
      </div>

      {/* Marquee Row — left to right */}
      <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_15%,black_85%,transparent)]">
        <div className="flex animate-marquee whitespace-nowrap">
          {[...clients, ...clients, ...clients, ...clients].map((client, i) => (
            <LogoCard key={`row-a-${i}`} name={client.name} logo={client.logo} />
          ))}
        </div>
        <div className="flex animate-marquee whitespace-nowrap" aria-hidden>
          {[...clients, ...clients, ...clients, ...clients].map((client, i) => (
            <LogoCard key={`row-b-${i}`} name={client.name} logo={client.logo} />
          ))}
        </div>
      </div>
    </section>
  )
}
