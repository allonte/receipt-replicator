import { Routes, Route, useLocation } from "react-router-dom";
import { NyotaNavigation } from './components/NyotaNavigation'
import { NyotaHero } from './components/NyotaHero'
import { NyotaClients } from './components/NyotaClients'
import { NyotaServices } from './components/NyotaServices'
import { NyotaCustomSoftware } from './components/NyotaCustomSoftware'
import { EcommerceCTA } from './components/EcommerceCTA'
import { NyotaContact } from './components/NyotaContact'
import { NyotaFooter } from './components/NyotaFooter'
import { AIChatWidget } from './components/AIChatWidget'
import Ecommerce from './pages/Ecommerce'

function HomePage() {
  return (
    <>
      <NyotaNavigation />
      <main className="relative" role="main">
        <section id="home" aria-label="Hero section">
          <NyotaHero />
        </section>
        <NyotaClients />
        <section id="shop" aria-label="E-Commerce store">
          <EcommerceCTA />
        </section>
        <section id="services" aria-label="Services section">
          <NyotaServices />
        </section>
        <section id="custom-software" aria-label="Custom software section">
          <NyotaCustomSoftware />
        </section>
        <section id="contact" aria-label="Contact section">
          <NyotaContact />
        </section>
      </main>
      <NyotaFooter />
    </>
  )
}

export default function App() {
  const location = useLocation()
  const isEcommerce = location.pathname === '/ecommerce'

  return (
    <div className="min-h-screen bg-background text-foreground">
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/ecommerce" element={<Ecommerce />} />
      </Routes>
      {!isEcommerce && <AIChatWidget />}
    </div>
  )
}
