import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default marker icon missing in Leaflet with Webpack
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

export default function BranchMap({ coordinates, name, landmark }) {
  // Default to Kathmandu coordinates if none provided
  const position = coordinates ? [coordinates.lat, coordinates.lng] : [27.7172, 85.3240];

  // Simulated nearby points of interest (offsets for demo purposes)
  const pois = [
    { name: "Local Cafe", type: "Cafe", lat: position[0] + 0.002, lng: position[1] + 0.002 },
    { name: "Supermarket", type: "Shop", lat: position[0] - 0.002, lng: position[1] - 0.001 },
    { name: "Pharmacy", type: "Health", lat: position[0] + 0.001, lng: position[1] - 0.003 },
  ];

  return (
    <div className="h-full w-full isolate">
      <MapContainer 
        center={position} 
        zoom={15} 
        scrollWheelZoom={false} 
        style={{ height: '100%', width: '100%', zIndex: 0 }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {/* Main Branch Marker */}
        <Marker position={position}>
          <Popup>
            <div className="min-w-[150px] text-center">
                <h3 className="font-bold text-slate-900 text-sm mb-1">{name}</h3>
                <p className="text-slate-500 text-xs m-0 mb-2">{landmark}</p>
                <a 
                    href={`https://www.google.com/maps/dir/?api=1&destination=${position[0]},${position[1]}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white bg-red-500 hover:bg-red-600 px-3 py-1 rounded-full text-xs font-bold transition-colors inline-block no-underline"
                >
                    Get Directions
                </a>
            </div>
          </Popup>
        </Marker>

        {/* POI Markers (Small circles) */}
        {pois.map((poi, idx) => (
           <Marker 
             key={idx} 
             position={[poi.lat, poi.lng]}
             icon={L.divIcon({
               className: 'custom-div-icon',
               html: `<div style="background-color: #64748b; width: 10px; height: 10px; border-radius: 50%; border: 2px solid white;"></div>`,
               iconSize: [10, 10],
               iconAnchor: [5, 5]
             })}
           >
             <Popup>
               <div className="text-xs font-semibold">{poi.name} <span className="text-slate-400">({poi.type})</span></div>
             </Popup>
           </Marker>
        ))}
      </MapContainer>
    </div>
  );
}