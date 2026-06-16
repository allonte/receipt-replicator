import { useState } from 'react'
import { motion } from 'framer-motion'
import { Button } from './ui/button'
import { Mail, Phone, MapPin, Send, MessageCircle } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'
import { supabase } from '@/integrations/supabase/client'

export function NyotaContact() {
  const { toast } = useToast()
  const [formData, setFormData] = useState({ name: '', email: '', company: '', message: '' })
  const [sending, setSending] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSending(true)
    try {
      const { error } = await supabase.functions.invoke('send-contact-email', {
        body: formData,
      })
      if (error) throw error
      toast({ title: 'Message sent!', description: "We'll get back to you within 24 hours." })
      setFormData({ name: '', email: '', company: '', message: '' })
    } catch (err) {
      console.error(err)
      toast({ title: 'Failed to send', description: 'Please try again or email us directly.', variant: 'destructive' })
    } finally {
      setSending(false)
    }
  }

  return (
    <div className="py-24 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 max-w-5xl mx-auto">
          {/* Left side — slides in from left */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-sm font-semibold text-primary uppercase tracking-wider">Contact</span>
            <h2 className="font-heading text-4xl sm:text-5xl font-bold text-foreground mt-3 mb-4">
              Let's Build Together
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Ready to bring AI into your business? Book a free discovery call or send us a message.
            </p>

            <div className="space-y-6">
              {[
                { icon: Mail, label: 'Email', value: 'allankaoga1@gmail.com' },
                { icon: Phone, label: 'Contact Centre', value: '+254 742 145 267', href: 'tel:+254742145267' },
                { icon: MessageCircle, label: 'WhatsApp', value: '+254 742 145 267', href: 'https://wa.me/254742145267' },
                { icon: MapPin, label: 'Location', value: 'Nairobi, Kenya' },
              ].map(({ icon: Icon, label, value, href }, i) => (
                <motion.div
                  key={label}
                  initial={{ opacity: 0, x: -40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-4"
                >
                  <div className="w-12 h-12 rounded-lg bg-foreground/10 flex items-center justify-center">
                    <Icon className="w-5 h-5 text-foreground" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{label}</div>
                    {href ? (
                      <a href={href} className="font-medium text-foreground hover:text-primary transition-colors">{value}</a>
                    ) : (
                      <div className="font-medium text-foreground">{value}</div>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side — slides in from right */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-card clean-border rounded-xl p-8"
          >
            <form onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Name</label>
                <input
                  type="text"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Email</label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                  placeholder="you@company.co.ke"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Company</label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30"
                  placeholder="Your company name"
                />
              </div>
              <div>
                <label className="text-sm font-medium text-foreground mb-1.5 block">Message</label>
                <textarea
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full rounded-lg border border-border bg-background px-4 py-3 text-foreground text-sm focus:outline-none focus:ring-2 focus:ring-primary/30 resize-none"
                  placeholder="Tell us about your project..."
                />
              </div>
              <Button
                type="submit"
                disabled={sending}
                className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
              >
                {sending ? 'Sending...' : 'Send Message'}
                <Send className="w-4 h-4 ml-2" />
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
