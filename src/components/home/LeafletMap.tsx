import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { LOCATION_CARDS } from "./HomeSections";

// Fix Leaflet marker icons in React
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

function MapController({ activeLocation }: { activeLocation: typeof LOCATION_CARDS[0] | null }) {
  const map = useMap();
  useEffect(() => {
    if (activeLocation) {
      map.flyTo([activeLocation.lat, activeLocation.lng], 14, { duration: 1.5 });
    }
  }, [activeLocation, map]);
  return null;
}

export default function LeafletMap({ activeLocation }: { activeLocation: typeof LOCATION_CARDS[0] | null }) {
  const createPinIcon = (isHq?: boolean) => {
    const bgGradient = isHq
      ? "linear-gradient(135deg, #e11d48 0%, #be123c 100%)"
      : "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)";
    const shadowColor = isHq ? "rgba(225, 29, 72, 0.4)" : "rgba(37, 99, 235, 0.4)";

    return L.divIcon({
      html: `
        <div style="position: relative; width: 40px; height: 48px; display: flex; flex-direction: column; align-items: center; cursor: pointer;">
          <div style="
            width: 36px;
            height: 36px;
            border-radius: 50% 50% 50% 0;
            background: ${bgGradient};
            transform: rotate(-45deg);
            display: flex;
            align-items: center;
            justify-content: center;
            border: 2.5px solid #ffffff;
            box-shadow: 0 6px 16px ${shadowColor};
          ">
            <svg style="transform: rotate(45deg); width: 18px; height: 18px; color: #ffffff;" fill="none" stroke="currentColor" stroke-width="2.2" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
              <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
            </svg>
          </div>
          <div style="
            width: 10px;
            height: 4px;
            background: rgba(0, 0, 0, 0.35);
            border-radius: 50%;
            margin-top: 2px;
            filter: blur(1px);
          "></div>
        </div>
      `,
      className: "custom-pin-marker",
      iconSize: [40, 48],
      iconAnchor: [20, 44],
      popupAnchor: [0, -44],
    });
  };

  return (
    <div className="h-[320px] sm:h-[400px] md:h-[500px] w-full rounded-2xl sm:rounded-3xl overflow-hidden border border-border shadow-glow relative z-10">
      <MapContainer 
        center={[25.5, 82.5]} 
        zoom={5} 
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%', zIndex: 1 }}
        zoomControl={true}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {LOCATION_CARDS.map((loc) => (
          <Marker key={loc.city} position={[loc.lat, loc.lng]} icon={createPinIcon(loc.isHq)}>
            <Popup maxWidth={300} minWidth={240}>
              <div className="font-sans text-slate-900 py-1">
                <div className="flex items-center justify-between gap-2 mb-1">
                  <div className="flex items-center gap-1.5 font-bold text-sm text-slate-900">
                    <span>{loc.city}</span>
                    {loc.isHq && (
                      <span className="text-[9px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded bg-rose-600 text-white">
                        HQ
                      </span>
                    )}
                  </div>
                  <span className="text-[11px] text-slate-500 font-medium">{loc.country}</span>
                </div>
                <div className="text-xs font-semibold text-rose-600 mb-1.5">
                  {loc.label}
                </div>
                <p className="text-xs text-slate-600 leading-relaxed mb-3">
                  {loc.address}
                </p>
                <a
                  href={loc.directionsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-1.5 w-full px-3 py-2 text-xs font-semibold text-white bg-slate-900 hover:bg-rose-600 rounded-lg transition-colors shadow-sm"
                  style={{ color: '#ffffff', textDecoration: 'none' }}
                >
                  <svg style={{ width: '14px', height: '14px' }} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
                  </svg>
                  Get Directions
                </a>
              </div>
            </Popup>
          </Marker>
        ))}
        <MapController activeLocation={activeLocation} />
      </MapContainer>
    </div>
  );
}
