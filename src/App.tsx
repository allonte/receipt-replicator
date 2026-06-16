import { NyotaNavigation } from './components/NyotaNavigation'
import { NyotaHero } from './components/NyotaHero'
import { NyotaClients } from './components/NyotaClients'
import { NyotaServices } from './components/NyotaServices'
import { NyotaSectors } from './components/NyotaSectors'
import { NyotaCustomSoftware } from './components/NyotaCustomSoftware'
import { NyotaPackages } from './components/NyotaPackages'
import { NyotaContact } from './components/NyotaContact'
import { NyotaFooter } from './components/NyotaFooter'
import { AIChatWidget } from './components/AIChatWidget'

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <NyotaNavigation />
      <main className="relative" role="main">
        <section id="home" aria-label="Hero section">
          <NyotaHero />
        </section>
        <NyotaClients />
        <section id="about" aria-label="Industry sectors">
          <NyotaSectors />
        </section>
        <section id="services" aria-label="Services section">
          <NyotaServices />
        </section>
        <section id="custom-software" aria-label="Custom software section">
          <NyotaCustomSoftware />
        </section>
        <section id="packages" aria-label="Pricing packages">
          <NyotaPackages />
        </section>
        <section id="ecommerce" aria-label="E-Commerce section">
          <div className="py-16 md:py-24 bg-card/50">
            <div className="container mx-auto px-4 sm:px-6 lg:px-12 text-center mb-8 md:mb-10">
              <h2 className="font-heading text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mb-4">
                E-Commerce
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto text-base md:text-lg">
                Browse our store directly below — no need to leave the site.
              </p>
            </div>
            <div className="container mx-auto px-4 sm:px-6 lg:px-12 max-w-6xl">
              <div className="relative w-full overflow-hidden rounded-xl border border-border bg-white">
                <iframe
                  src="https://iphoneplaystationwebsite.vercel.app/"
                  title="E-Commerce Store"
                  className="w-full block"
                  style={{ height: 'clamp(420px, 70vh, 800px)', border: 'none' }}
                  allow="fullscreen"
                  scrolling="no"
                />
              </div>
            </div>
          </div>
        </section>
        <section id="contact" aria-label="Contact section">
          <NyotaContact />
        </section>
      </main>
      <NyotaFooter />
      <AIChatWidget />
    </div>
  )
}
