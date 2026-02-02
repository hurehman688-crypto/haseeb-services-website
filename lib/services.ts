export interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  icon: string;
  features: string[]; // "Types of Work"
  tools: string[];
  benefits: string[];
  sampleProject: {
    title: string;
    description: string;
    image: string;
    results: string[];
  };
}

export const services: Service[] = [
  {
    slug: 'lead-generation',
    title: 'Lead Generation',
    shortDescription: 'We provide high-quality, targeted leads to help businesses grow faster and improve conversion rates.',
    fullDescription: 'Our lead generation services help businesses identify, attract, and convert high-quality prospects. We use advanced targeting techniques, data analysis, and proven outreach strategies to deliver qualified leads that convert.',
    icon: 'target',
    features: [ // Types of work
      'B2B Prospect Lists',
      'Cold Email Campaigns',
      'LinkedIn Outreach',
      'Lead Qualification',
      'Appointment Setting'
    ],
    tools: ['Apollo.io', 'LinkedIn Sales Navigator', 'Hunter.io', 'Lemlist'],
    benefits: [
      'Fill your pipeline with qualified prospects',
      'Reduce time spent on prospecting',
      'Increase conversion rates',
      'Scalable growth system'
    ],
    sampleProject: {
      title: 'B2B SaaS Lead Generation',
      description: 'Generated 500+ qualified leads for a SaaS company targeting mid-market businesses.',
      image: '/projects/lead-gen.png',
      results: [
        '500+ qualified leads delivered',
        '35% conversion rate to demo',
        'Automated scoring system'
      ],
    },
  },
  {
    slug: 'accounting-bookkeeping',
    title: 'Accounting',
    shortDescription: 'Comprehensive financial management including bookkeeping, invoicing, and financial reporting.',
    fullDescription: 'Our accounting services ensure your financial records are accurate, organized, and compliant. We handle everything from day-to-day bookkeeping to complex financial reporting, giving you peace of mind.',
    icon: 'calculator',
    features: [
      'Bookkeeping & Reconciliation',
      'Accounts Payable/Receivable',
      'Financial Reporting (P&L, Balance Sheet)',
      'Tax Preparation Support',
      'Payroll Management'
    ],
    tools: ['QuickBooks', 'Xero', 'Wave', 'Excel'],
    benefits: [
      'Tax-ready financial records',
      'Clear view of cash flow',
      'Reduced administrative burden',
      'Avoid costly errors'
    ],
    sampleProject: {
      title: 'E-commerce Bookkeeping',
      description: 'Streamlined financial operations for a high-volume e-commerce store.',
      image: '/projects/admin.png',
      results: [
        'Organized 12 months of backlog',
        'Monthly closing time reduced by 5 days',
        '100% tax compliance'
      ],
    },
  },
  {
    slug: 'virtual-assistance',
    title: 'General Virtual Assistance',
    shortDescription: 'Flexible support for administrative tasks, research, and daily operations.',
    fullDescription: 'Our virtual assistants provide reliable support for a wide range of business needs, from scheduling and email management to research and data entry. We act as an extension of your team.',
    icon: 'briefcase',
    features: [
      'Email & Calendar Management',
      'Data Entry & Research',
      'Customer Support',
      'Travel Arrangements',
      'Document Preparation'
    ],
    tools: ['Google Workspace', 'Slack', 'Asana', 'Notion'],
    benefits: [
      'Focus on high-value tasks',
      'Flexible, scalable support',
      'Reduced overhead costs',
      'Improved operational efficiency'
    ],
    sampleProject: {
      title: 'Executive Support',
      description: 'Provided daily administrative support for a busy consulting firm.',
      image: '/projects/va.png',
      results: [
        'Saved 15 hours/week for CEO',
        'Managed 50+ weekly client emails',
        'Streamlined scheduling process'
      ],
    },
  },
  {
    slug: 'automation',
    title: 'Automation',
    shortDescription: 'Streamline repetitive tasks and connect your apps with intelligent automated workflows.',
    fullDescription: 'We design and build custom automation workflows that connect your favorite business tools. Eliminate manual data entry and repetitive tasks to save time and reduce errors.',
    icon: 'cog',
    features: [
      'Workflow Design (Zapier/Make)',
      'CRM Automation',
      'Email Marketing Automation',
      'Data Syncing',
      'Form Integration'
    ],
    tools: ['Zapier', 'Make (Integromat)', 'HubSpot', 'Airtable'],
    benefits: [
      'Eliminate manual data entry',
      'Reduce human error',
      'Save hours of work weekly',
      'Seamless tool integration'
    ],
    sampleProject: {
      title: 'Sales Process Automation',
      description: 'Automated the entire lead-to-deal process for a marketing agency.',
      image: '/projects/crm.png',
      results: [
        'Automated lead capture & follow-up',
        'Reduced response time to 5 mins',
        'Integrated CRM with Slack alerts'
      ],
    },
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
