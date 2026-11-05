import { useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { LocationCardItem } from "./HomeSections";

// Fix Leaflet marker icons in React
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
  iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  shadowUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

export interface MapPinItem {
  id: string;
  city: string;
  country: string;
  label: string;
  address: string;
  lat: number;
  lng: number;
  isHq?: boolean;
  isInternational?: boolean;
  directionsUrl?: string;
}

export const MAP_PINS: MapPinItem[] = [
  {
    id: "kolkata",
    city: "Kolkata Headquarters",
    country: "India",
    label: "Global HQ & Center of Excellence (CoE)",
    address: "3rd Floor, STPI IT Park, Block-DP, Plot-5/1, Sector V, Salt Lake, Kolkata – 700091, West Bengal, India",
    lat: 22.574625,
    lng: 88.438630,
    directionsUrl: "https://maps.app.goo.gl/PDjDU26TL5tt7HgD6",
    isHq: true,
  },
  {
    id: "delhi",
    city: "Delhi NCR Hub",
    country: "India",
    label: "Enterprise Delivery Center",
    address: "Gainwell Ecotech II, 1-C/1, Udyog Vihar, Greater Noida, Delhi NCR – 201306, Uttar Pradesh, India",
    lat: 28.4986,
    lng: 77.5348,
    directionsUrl: "https://www.google.com/maps/dir/?api=1&destination=28.4986,77.5348",
  },
  {
    id: "usa",
    city: "USA Engagement Hub",
    country: "USA (West Virginia)",
    label: "Strategic Client Engagements",
    address: "Active enterprise engagements across West Virginia, USA",
    lat: 38.5976,
    lng: -80.4549,
    isInternational: true,
  },
  {
    id: "australia",
    city: "Australia Engagement Hub",
    country: "Australia (NSW)",
    label: "Strategic Client Engagements",
    address: "Active enterprise engagements across New South Wales, Australia",
    lat: -33.8688,
    lng: 151.2093,
    isInternational: true,
  },
  {
    id: "singapore",
    city: "Singapore Operations",
    country: "Singapore",
    label: "Strategic Client Operations",
    address: "Active enterprise engagements across Singapore",
    lat: 1.3521,
    lng: 103.8198,
    isInternational: true,
  },
  {
    id: "middle-east",
    city: "Middle East Hub",
    country: "Middle East",
    label: "Strategic Client Operations",
    address: "Active enterprise engagements across the Middle East",
    lat: 25.2048,
    lng: 55.2708,
    isInternational: true,
  },
];

function MapController({ activeLocation }: { activeLocation: LocationCardItem | null }) {
  const map = useMap();
  useEffect(() => {
    if (activeLocation && activeLocation.lat !== undefined && activeLocation.lng !== undefined) {
      const zoom = activeLocation.zoomLevel ?? 14;
      map.flyTo([activeLocation.lat, activeLocation.lng], zoom, { duration: 1.5 });
    }
  }, [activeLocation, map]);
  return null;
}

export default function LeafletMap({ activeLocation }: { activeLocation: LocationCardItem | null }) {
  const createPinIcon = (isHq?: boolean, isInternational?: boolean) => {
    let bgGradient = "linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)";
    let shadowColor = "rgba(37, 99, 235, 0.4)";
    if (isHq) {
      bgGradient = "linear-gradient(135deg, #e11d48 0%, #be123c 100%)";
      shadowColor = "rgba(225, 29, 72, 0.4)";
    } else if (isInternational) {
      bgGradient = "linear-gradient(135deg, #059669 0%, #047857 100%)";
      shadowColor = "rgba(5, 150, 105, 0.4)";
    }

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
        center={[23.5, 80.0]} 
        zoom={4} 
        scrollWheelZoom={false}
        style={{ height: '100%', width: '100%', zIndex: 1 }}
        zoomControl={true}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {MAP_PINS.map((loc) => (
          <Marker key={loc.id} position={[loc.lat, loc.lng]} icon={createPinIcon(loc.isHq, loc.isInternational)}>
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
                {loc.directionsUrl && (
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
                )}
              </div>
            </Popup>
          </Marker>
        ))}
        <MapController activeLocation={activeLocation} />
      </MapContainer>
    </div>
  );
}
