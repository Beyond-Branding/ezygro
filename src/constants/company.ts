// Company information constants
import type { CompanyInfo, MapPosition } from '@/types';

export const COMPANY_INFO: CompanyInfo = {
  name: 'Ezygro',
  address: '01, 1st floor, A Wing, Neelyog Samruddhi, Khot Kua Road, Dhanjiwadi, Malad East, Mumbai 400097',
  phone: '+91 97699 47744',
  email: 'contactus@ezygro.com',
  coordinates: {
    lat: 19.18876,
    lng: 72.85825
  }
};

export const MAP_POSITION: MapPosition = COMPANY_INFO.coordinates;

export const SOCIAL_LINKS = {
  whatsapp: `https://wa.me/919769947744`,
  linkedin: '#',
  twitter: '#',
  facebook: '#',
  instagram: '#'
};

export const BUSINESS_HOURS = {
  weekdays: '9:00 AM - 6:00 PM',
  weekends: 'Closed',
  timezone: 'IST (GMT +5:30)'
};
