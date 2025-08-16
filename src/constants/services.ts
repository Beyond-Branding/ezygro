// Service definitions and categories
import type { Service, ServiceCategory } from '@/types';

export const SERVICES: Service[] = [
  {
    id: 'financial-accounting',
    title: 'Financial & Accounting',
    description: 'Comprehensive financial management and accounting services for your business',
    href: '/financial-accounting',
    features: [
      'Bookkeeping & Account Management',
      'Financial Statement Preparation',
      'Tax Planning & Compliance',
      'Payroll Management'
    ]
  },
  {
    id: 'income-tax',
    title: 'Income Tax',
    description: 'Expert income tax services for individuals and businesses',
    href: '/income-tax',
    features: [
      'Income Tax Return Filing',
      'Tax Planning & Advisory',
      'TDS Compliance',
      'Assessment Support'
    ]
  },
  {
    id: 'virtual-cfo',
    title: 'Virtual CFO',
    description: 'Strategic financial leadership for growing businesses',
    href: '/virtual-cfo',
    features: [
      'Financial Strategy & Planning',
      'Cash Flow Management',
      'Investment Advisory',
      'Financial Reporting'
    ]
  },
  {
    id: 'loans-insurance',
    title: 'Loans & Insurance',
    description: 'Comprehensive loan and insurance solutions',
    href: '/loans-insurance',
    features: [
      'Business Loan Assistance',
      'Insurance Planning',
      'Credit Analysis',
      'Risk Management'
    ]
  },
  {
    id: 'secretarial-compliances',
    title: 'Secretarial Compliances',
    description: 'Complete secretarial and compliance services',
    href: '/secretarial-compliances',
    features: [
      'Company Formation',
      'Compliance Management',
      'Board Meeting Support',
      'Legal Documentation'
    ]
  },
  {
    id: 'innovative-dashboards',
    title: 'Innovative Dashboards',
    description: 'Modern business intelligence and dashboard solutions',
    href: '/innovative-dashboards',
    features: [
      'Custom Dashboard Development',
      'Business Intelligence',
      'Data Analytics',
      'Real-time Reporting'
    ]
  }
];

export const SERVICE_CATEGORIES: ServiceCategory[] = [
  {
    id: 'core-financial',
    title: 'Core Financial Services',
    description: 'Essential financial services for business operations',
    services: SERVICES.filter(s => 
      ['financial-accounting', 'income-tax', 'virtual-cfo'].includes(s.id)
    )
  },
  {
    id: 'business-support',
    title: 'Business Support Services',
    description: 'Additional services to support business growth',
    services: SERVICES.filter(s => 
      ['loans-insurance', 'secretarial-compliances'].includes(s.id)
    )
  },
  {
    id: 'technology',
    title: 'Technology Solutions',
    description: 'Modern technology solutions for business insights',
    services: SERVICES.filter(s => 
      ['innovative-dashboards'].includes(s.id)
    )
  }
];
