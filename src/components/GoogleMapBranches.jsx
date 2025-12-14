import { GoogleMap, Marker, useJsApiLoader } from '@react-google-maps/api';
import { branches } from './branchData';

const containerStyle = {
  width: '100%',
  height: '400px',
  borderRadius: '1rem',
};

// Center on Kathmandu by default
const defaultCenter = { lat: 27.7172, lng: 85.3240 };

export default function GoogleMapBranches() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY || '',
  });

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={defaultCenter}
      zoom={12}
    >
      {branches.map((branch) => (
        <Marker
          key={branch.id}
          position={{ lat: branch.coordinates.lat, lng: branch.coordinates.lng }}
          title={branch.name}
        />
      ))}
    </GoogleMap>
  ) : (
    <div className="w-full h-[400px] flex items-center justify-center bg-slate-100 rounded-2xl border border-slate-200">
      Loading Google Map...
    </div>
  );
}
