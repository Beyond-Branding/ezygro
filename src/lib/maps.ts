// Map utilities and configuration
import type { MapPosition } from '@/types';

// Map configuration
export const MAP_CONFIG = {
  defaultZoom: 17,
  tileLayerUrl: 'https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png',
  attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors © <a href="https://carto.com/attributions">CARTO</a>',
  scrollWheelZoom: false
};

/**
 * Create custom marker icon for Leaflet
 */
export function createCustomMarker(title: string = 'Ezygro'): L.DivIcon | null {
  if (typeof window === 'undefined') return null;
  
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const L = require('leaflet');
  
  return L.divIcon({
    html: `
      <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; transform: translate(-50%, -100%);">
        <span style="background-color: #4B1D92; color: white; padding: 5px 10px; border-radius: 8px; font-weight: bold; font-size: 16px; white-space: nowrap; box-shadow: 0 2px 5px rgba(0,0,0,0.3);">
          ${title}
        </span>
        <span style="font-size: 40px; line-height: 0.5; color: #4B1D92; filter: drop-shadow(0 3px 3px rgba(0,0,0,0.4));">📍</span>
      </div>
    `,
    className: '', 
    iconSize: [0, 0], 
    iconAnchor: [0, 0], 
    popupAnchor: [0, -30] 
  });
}

/**
 * Generate Google Maps directions URL
 */
export function getDirectionsUrl(address: string): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(address)}`;
}

/**
 * Initialize Leaflet map with cleanup
 */
export function initializeMap(
  container: HTMLElement, 
  position: MapPosition, 
  options: Partial<typeof MAP_CONFIG> = {}
): { map: L.Map; L: typeof L } | { map: null; L: null } {
  if (typeof window === 'undefined') return { map: null, L: null };
  
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  const L = require('leaflet');
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  require('leaflet/dist/leaflet.css');
  
  // Set default icon
  const DefaultIcon = L.icon({
    iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
    shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });
  L.Marker.prototype.options.icon = DefaultIcon;
  
  // Merge options
  const config = { ...MAP_CONFIG, ...options };
  
  // Create map
  const map = L.map(container, {
    center: [position.lat, position.lng],
    zoom: config.defaultZoom,
    scrollWheelZoom: config.scrollWheelZoom,
  });

  // Add tile layer
  L.tileLayer(config.tileLayerUrl, {
    attribution: config.attribution,
  }).addTo(map);

  return { map, L };
}

/**
 * Cleanup map instance
 */
export function cleanupMap(mapInstance: L.Map | null): void {
  if (mapInstance) {
    try {
      mapInstance.remove();
    } catch (error) {
      console.error('Error cleaning up map:', error);
    }
  }
}
