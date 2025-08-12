// Navigation menu constants
import type { NavigationItem } from '@/types';

export const MAIN_NAVIGATION: NavigationItem[] = [
  {
    label: 'Home',
    href: '/'
  },
  {
    label: 'About',
    href: '/about'
  },
  {
    label: 'Services',
    href: '/services',
    children: [
      {
        label: 'Financial & Accounting',
        href: '/financial-accounting'
      },
      {
        label: 'Income Tax',
        href: '/income-tax'
      },
      {
        label: 'Virtual CFO',
        href: '/virtual-cfo'
      },
      {
        label: 'Loans & Insurance',
        href: '/loans-insurance'
      },
      {
        label: 'Secretarial Compliances',
        href: '/secretarial-compliances'
      },
      {
        label: 'Innovative Dashboards',
        href: '/innovative-dashboards'
      }
    ]
  },
  {
    label: 'Careers',
    href: '/careers'
  },
  {
    label: 'Contact',
    href: '/contact'
  }
];

export const FOOTER_NAVIGATION = {
  services: [
    { label: 'Financial & Accounting', href: '/financial-accounting' },
    { label: 'Income Tax', href: '/income-tax' },
    { label: 'Virtual CFO', href: '/virtual-cfo' },
    { label: 'Loans & Insurance', href: '/loans-insurance' },
    { label: 'Secretarial Compliances', href: '/secretarial-compliances' },
    { label: 'Innovative Dashboards', href: '/innovative-dashboards' }
  ],
  company: [
    { label: 'About Us', href: '/about' },
    { label: 'Careers', href: '/careers' },
    { label: 'Contact', href: '/contact' }
  ],
  legal: [
    { label: 'Privacy Notice', href: '/privacy-notice' },
    { label: 'Terms of Use', href: '/terms-of-use' }
  ]
};
