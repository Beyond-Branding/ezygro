// Leaflet type definitions for our use case
declare global {
  namespace L {
    interface Map {
      remove(): void;
    }
    
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    interface DivIcon extends Record<string, unknown> {
      // Leaflet DivIcon properties
    }
    
    // eslint-disable-next-line @typescript-eslint/no-empty-object-type
    interface Marker extends Record<string, unknown> {
      // Leaflet Marker properties
    }
  }
}

export {};
