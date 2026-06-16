import { useState } from 'react'
import { MapPin } from 'lucide-react'
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps'
import { useTheme } from 'next-themes'

const GEO_URL = '/kenya-counties.json'

export function KenyaCountiesMap() {
  const [tooltip, setTooltip] = useState<string | null>(null)
  const { resolvedTheme } = useTheme()
  const isDark = resolvedTheme === 'dark'

  const colors = {
    county:    isDark ? '#1C1917' : '#F5F0E8',
    countyHover: isDark ? '#292524' : '#EDE8DC',
    stroke:    isDark ? '#0C0A09' : '#FDFAF6',
    nairobi:   isDark ? '#EA580C' : '#C2410C',
    markerBg:  isDark ? '#0C0A09' : '#FDFAF6',
    tooltip:   isDark ? '#FAFAF9' : '#1C1917',
    tooltipText: isDark ? '#0C0A09' : '#FDFAF6',
    badgeBg:   isDark ? '#EA580C' : '#C2410C',
    badgeText: isDark ? '#0C0A09' : '#FDFAF6',
  }

  return (
    <div className="relative w-full select-none">
      <div className="relative">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            center: [37.9, 0.5],
            scale: 2200,
          }}
          width={340}
          height={460}
          style={{ width: '100%', maxWidth: 320 }}
        >
          <Geographies geography={GEO_URL}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const countyName = geo.properties.COUNTY || geo.properties.name || ''
                const isNairobi = countyName === 'Nairobi'
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    onMouseEnter={() => setTooltip(countyName)}
                    onMouseLeave={() => setTooltip(null)}
                    style={{
                      default: {
                        fill: isNairobi ? colors.nairobi : colors.county,
                        stroke: colors.stroke,
                        strokeWidth: 0.6,
                        outline: 'none',
                      },
                      hover: {
                        fill: isNairobi ? colors.nairobi : colors.countyHover,
                        stroke: colors.stroke,
                        strokeWidth: 0.6,
                        outline: 'none',
                        cursor: 'pointer',
                      },
                      pressed: {
                        fill: colors.nairobi,
                        outline: 'none',
                      },
                    }}
                  />
                )
              })
            }
          </Geographies>

          {/* Nairobi HQ marker */}
          <Marker coordinates={[36.82, -1.29]}>
            <circle r={5} fill={colors.markerBg} stroke={colors.nairobi} strokeWidth={2} />
            <circle r={2.5} fill={colors.nairobi} />
            <circle r={10} fill="none" stroke={colors.nairobi} strokeWidth={1} opacity={0.4}>
              <animate attributeName="r" from="6" to="18" dur="2s" repeatCount="indefinite" />
              <animate attributeName="opacity" from="0.5" to="0" dur="2s" repeatCount="indefinite" />
            </circle>
          </Marker>
        </ComposableMap>

        {/* Nairobi label */}
        <div
          className="absolute flex items-center gap-1.5 text-xs font-semibold px-2.5 py-1.5 rounded-full shadow-md whitespace-nowrap pointer-events-none"
          style={{
            backgroundColor: colors.badgeBg,
            color: colors.badgeText,
            left: '52%',
            top: '50%',
            transform: 'translate(-50%, -130%)',
          }}
        >
          <MapPin className="w-3 h-3" />
          Nairobi HQ
        </div>

        {/* County tooltip */}
        {tooltip && (
          <div
            className="absolute bottom-2 left-1/2 -translate-x-1/2 text-xs font-semibold px-3 py-1.5 rounded-full shadow pointer-events-none"
            style={{ backgroundColor: colors.tooltip, color: colors.tooltipText }}
          >
            {tooltip}
          </div>
        )}
      </div>
    </div>
  )
}
