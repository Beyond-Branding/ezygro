import React, { useRef, useState } from 'react';
import { COMPANY_INFO, MAP_POSITION } from '@/constants';
import { initializeMap, createCustomMarker, getDirectionsUrl, cleanupMap } from '@/lib/maps';
import type { MapPosition } from '@/types';
import ContactForm from './ContactForm';

// SVG Icon for Email
function EmailIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-6 w-6 text-purple-900">
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <polyline points="3 7 12 13 21 7" />
    </svg>
  );
}

// SVG Icon for Map Pin
function MapPin() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"  className="h-10 w-6 text-purple-900">
      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
      <circle cx="12" cy="10" r="3" fill="currentColor" />
    </svg>
  );
}

// SVG Icon for Phone
function PhoneIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-8 w-6 text-purple-900">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
  );
}

// Create a client-side only map component
const LoadingMap = () => (
  <div className="h-96 bg-gray-200 animate-pulse rounded-lg flex items-center justify-center">
    Loading map...
  </div>
);

// Map wrapper component to handle container initialization properly
const MapWrapper = ({ position, fullAddress }: { 
  position: MapPosition; 
  fullAddress: string; 
}) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<L.Map | null>(null);

  React.useEffect(() => {
    if (!mapRef.current || mapInstanceRef.current) return;

    try {
      // Clear any existing map instance
      if (mapInstanceRef.current) {
        cleanupMap(mapInstanceRef.current);
        mapInstanceRef.current = null;
      }

      // Initialize map with our utility
      const { map, L } = initializeMap(mapRef.current, position);
      if (!map || !L) return;

      // Create custom marker
      const customIcon = createCustomMarker('Ezygro');
      if (!customIcon) return;

      // Add marker with popup
      const marker = L.marker([position.lat, position.lng], { icon: customIcon }).addTo(map);
      
      const popupContent = `
        <div style="text-align: left; padding: 8px; width: 200px;">
          <h3 style="font-weight: bold; font-size: 16px; color: #1f2937; margin-bottom: 4px;">Ezygro</h3>
          <p style="font-size: 14px; color: #4b5563; white-space: normal; margin-bottom: 8px;">${fullAddress}</p>
          <a href="${getDirectionsUrl(fullAddress)}" target="_blank" rel="noopener noreferrer" style="color: #2563eb; font-weight: 600; text-decoration: none; font-size: 14px;">
            Get Directions
          </a>
        </div>
      `;
      
      marker.bindPopup(popupContent);
      mapInstanceRef.current = map;

    } catch (error) {
      console.error('Error initializing map:', error);
    }

    // Cleanup function
    return () => {
      if (mapInstanceRef.current) {
        cleanupMap(mapInstanceRef.current);
        mapInstanceRef.current = null;
      }
    };
  }, [position, fullAddress]);

  return <div ref={mapRef} className="w-full h-full" />;
};

export default function Contact() {
  const [isClient, setIsClient] = useState(false);
  
  const position: MapPosition = MAP_POSITION;
  const fullAddress = COMPANY_INFO.address;

  React.useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="bg-white text-gray-800 min-h-screen flex flex-col items-center font-sans">
      
      <div className="w-full max-w-6xl mx-auto flex flex-col p-4 sm:p-6 md:p-8">

        <div className="mb-12 w-full text-left">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 mb-4">
            Let&apos;s <span style={{ color: '#4B1D92' }}>Connect</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600">
            We would love to hear from you!
          </p>
        </div>

        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
            
          <div className="w-full h-[50vh] md:h-full min-h-[500px] bg-gray-200 rounded-lg overflow-hidden shadow-lg">
            {isClient ? (
              <MapWrapper 
                position={position}
                fullAddress={fullAddress}
              />
            ) : (
              <LoadingMap />
            )}
          </div>

          <div className="flex flex-col space-y-8 text-left">
            <div className="flex items-start space-x-4">
              <div className="shrink-0 pt-1">
                <MapPin />
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-800">Address:</p>
                <p className="text-base text-gray-600 break-words">
                  {fullAddress}
                </p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="shrink-0">
                <PhoneIcon />
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-800">Phone:</p>
                <a href={`tel:${COMPANY_INFO.phone}`} className="text-base text-gray-600 hover:text-indigo-600 break-all">
                  {COMPANY_INFO.phone}
                </a>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div className="shrink-0">
                <EmailIcon />
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-800">Email:</p>
                <a href={`mailto:${COMPANY_INFO.email}`} className="text-base text-gray-600 hover:text-indigo-600 break-all">
                  {COMPANY_INFO.email}
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full">
        <ContactForm />
      </div>

    </div>
  );
}
