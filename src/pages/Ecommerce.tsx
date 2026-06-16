import { useRef, useEffect, useState } from 'react'
import { ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'

export default function Ecommerce() {
  const [loading, setLoading] = useState(true)
  const iframeRef = useRef<HTMLIFrameElement>(null)

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="h-screen flex flex-col bg-white">
      {/* Minimal header */}
      <header className="flex items-center justify-between px-4 py-3 border-b border-border bg-background z-50">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-medium text-foreground hover:text-primary transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to all&co
        </Link>
        <div className="font-heading text-lg font-bold text-foreground">all&co Store</div>
        <div className="w-20" />
      </header>

      {/* Full-screen iframe */}
      <div className="relative flex-1 overflow-hidden">
        {loading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white z-10">
            <div className="flex flex-col items-center gap-3">
              <div className="w-8 h-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
              <span className="text-sm text-muted-foreground">Loading store...</span>
            </div>
          </div>
        )}
        <iframe
          ref={iframeRef}
          src="https://iphoneplaystationwebsite.vercel.app/"
          title="all&co E-Commerce Store"
          className="w-full h-full block"
          style={{ border: 'none' }}
          allow="fullscreen"
          onLoad={() => setLoading(false)}
        />
      </div>
    </div>
  )
}
