export function NyotaFooter() {
  return (
    <footer className="py-16 bg-foreground text-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <div>
            <div className="font-heading text-2xl font-bold mb-4">
              all&co
            </div>
            <p className="text-background/70 text-sm leading-relaxed">
              An AI consultancy building practical AI systems for African businesses.
              Automate operations, cut costs, and scale faster.
            </p>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4 text-background">Services</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>Business Automation</li>
              <li>Custom AI Systems</li>
              <li>AI Chatbots</li>
              <li>Training & Consulting</li>
              <li>AI Integration</li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-semibold mb-4 text-background">Contact</h4>
            <ul className="space-y-2 text-sm text-background/70">
              <li>allankaoga1@gmail.com</li>
              <li>0742145267</li>
              <li>Nairobi, Kenya</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-background/60">
          <div>© {new Date().getFullYear()} all&co Consultancy. All rights reserved.</div>
          <div className="mt-2 md:mt-0">Built with purpose for African businesses.</div>
        </div>
      </div>
    </footer>
  )
}
