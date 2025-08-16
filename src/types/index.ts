// Global type definitions for the Ezygro application

export interface MapPosition {
  lat: number;
  lng: number;
}

export interface CompanyInfo {
  name: string;
  address: string;
  phone: string;
  email: string;
  coordinates: MapPosition;
}

// Navigation types
export interface NavigationItem {
  label: string;
  href: string;
  isExternal?: boolean;
  children?: NavigationItem[];
}

// Service types
export interface Service {
  id: string;
  title: string;
  description: string;
  icon?: string;
  features?: string[];
  href: string;
}

export interface ServiceCategory {
  id: string;
  title: string;
  description: string;
  services: Service[];
}

// Industry types
export interface Industry {
  id: string;
  name: string;
  description: string;
  icon?: string;
  image?: string;
  services?: string[];
}

// API Response types
export interface ApiResponse<T> {
  success: boolean;
  data: T;
  message?: string;
  error?: string;
}

// Component props types
export interface BaseComponentProps {
  className?: string;
  children?: React.ReactNode;
}

export interface ButtonProps extends BaseComponentProps {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  disabled?: boolean;
  loading?: boolean;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
}

export interface ModalProps extends BaseComponentProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}
