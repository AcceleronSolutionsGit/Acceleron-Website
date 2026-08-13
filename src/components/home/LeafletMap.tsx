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
      map.flyTo([activeLocation.lat, activeLocation.lng], 6, { duration: 1.5 });
    }
  }, [activeLocation, map]);
  return null;
}

export default function LeafletMap({ activeLocation }: { activeLocation: typeof LOCATION_CARDS[0] | null }) {
  const createFlagIcon = (url: string) => {
    return L.divIcon({
      html: `<img src="${url}" style="width: 32px; height: 24px; object-fit: cover; border-radius: 4px; box-shadow: 0 4px 6px rgba(0,0,0,0.3); border: 2px solid white; display: block;" />`,
      className: "custom-flag-marker",
      iconSize: [32, 24],
      iconAnchor: [16, 12],
      popupAnchor: [0, -12],
    });
  };

  return (
    <div className="h-[400px] md:h-[500px] w-full rounded-3xl overflow-hidden border border-border shadow-glow relative z-10">
      <MapContainer 
        center={[22.5726, 88.3639]} // Default to HQ
        zoom={3} 
        style={{ height: '100%', width: '100%', zIndex: 1 }}
        zoomControl={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {LOCATION_CARDS.map((loc) => (
          <Marker key={loc.city} position={[loc.lat, loc.lng]} icon={createFlagIcon(loc.flagUrl)}>
            <Popup>
              <div className="font-sans">
                <strong className="text-sm flex items-center gap-2">
                  <img src={loc.flagUrl} alt={loc.country} className="h-3.5 w-auto rounded-[2px]" /> {loc.city}
                </strong><br/>
                <span className="text-xs text-muted-foreground">{loc.label}</span>
              </div>
            </Popup>
          </Marker>
        ))}
        <MapController activeLocation={activeLocation} />
      </MapContainer>
    </div>
  );
}
