import L from "leaflet";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const DefaultIcon = L.icon({
  iconUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});
L.Marker.prototype.options.icon = DefaultIcon;

export default function Map() {
  const position: [number, number] = [19.184862538093636, 72.85655142425968];

  const fullAddress =
    "01, 1st floor, A Wing, Neelyog Samruddhi, Khot Kua Road, Dhanjiwadi, Malad East, Mumbai 400097";

  // Custom HTML marker for Leaflet
  const customIcon = L.divIcon({
    html: `
          <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; transform: translate(-50%, -100%);">
            <span style="background-color: #4B1D92; color: white; padding: 5px 10px; border-radius: 8px; font-weight: bold; font-size: 16px; white-space: nowrap; box-shadow: 0 2px 5px rgba(0,0,0,0.3);">
              Ezygro
            </span>
            <span style="font-size: 40px; line-height: 0.5; color: #4B1D92; filter: drop-shadow(0 3px 3px rgba(0,0,0,0.4));">📍</span>
          </div>
        `,
    className: "",
    iconSize: [0, 0],
    iconAnchor: [0, 0],
    popupAnchor: [0, -30],
  });

  return (
    <MapContainer
      center={position}
      zoom={17}
      scrollWheelZoom={false}
      className="w-full h-full relative z-0"
    >
      <TileLayer
        attribution='© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors © <a href="https://carto.com/attributions">CARTO</a>'
        url="https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png"
      />
      <Marker position={position} icon={customIcon}>
        {/* === POPUP CODE EDITED HERE === */}
        <Popup>
          <div className="text-left p-2 w-48">
            {" "}
            {/* Changed to text-left, added padding, and set a fixed width w-48 (192px) */}
            <h3 className="font-bold text-base text-gray-800 mb-1">Ezygro</h3>
            <p className="text-sm text-gray-600 whitespace-normal mb-2">
              {fullAddress}
            </p>
            <a
              href={`https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
                fullAddress
              )}`} /* Corrected URL */
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 font-semibold hover:underline text-sm"
            >
              Get Directions
            </a>
          </div>
        </Popup>
      </Marker>
    </MapContainer>
  );
}
