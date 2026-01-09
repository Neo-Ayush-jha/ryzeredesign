export interface Feature {
  icon: string;
  title: string;
  description: string;
}

export const features: Feature[] = [
  {
    icon: 'Zap',
    title: 'Lightning Fast Performance',
    description: 'Experience blazing-fast load times and seamless interactions that keep your users engaged and productive.',
  },
  {
    icon: 'Shield',
    title: 'Enterprise-Grade Security',
    description: 'Bank-level encryption and security protocols to keep your data safe and compliant with industry standards.',
  },
  {
    icon: 'Users',
    title: 'Team Collaboration',
    description: 'Work together effortlessly with real-time collaboration tools designed for modern teams.',
  },
  {
    icon: 'BarChart3',
    title: 'Advanced Analytics',
    description: 'Gain deep insights into your business with powerful analytics and customizable reporting tools.',
  },
  {
    icon: 'Smartphone',
    title: 'Mobile First',
    description: 'Access your work anywhere, anytime with our fully responsive mobile-optimized platform.',
  },
  {
    icon: 'Puzzle',
    title: 'Seamless Integrations',
    description: 'Connect with your favorite tools and services through our extensive integration ecosystem.',
  },
];

export const detailedFeatures = [
  {
    icon: 'Layers',
    title: 'Intelligent Automation',
    description: 'Automate repetitive tasks and workflows to save time and reduce errors. Our AI-powered automation learns from your patterns and suggests optimizations.',
    benefits: [
      'Save up to 10 hours per week',
      'Reduce manual errors by 95%',
      'Custom workflow builder',
      'Smart task prioritization',
    ],
  },
  {
    icon: 'TrendingUp',
    title: 'Real-Time Insights',
    description: 'Make data-driven decisions with live dashboards and customizable reports that update in real-time as your business grows.',
    benefits: [
      'Live performance metrics',
      'Custom dashboard builder',
      'Predictive analytics',
      'Export to any format',
    ],
  },
  {
    icon: 'Lock',
    title: 'Advanced Security',
    description: 'Enterprise-grade security features including 2FA, SSO, role-based access control, and comprehensive audit logs.',
    benefits: [
      'SOC 2 Type II certified',
      '256-bit encryption',
      'Regular security audits',
      'GDPR compliant',
    ],
  },
  {
    icon: 'Sparkles',
    title: 'AI-Powered Assistant',
    description: 'Get intelligent suggestions and automated insights powered by cutting-edge AI that understands your business context.',
    benefits: [
      'Natural language queries',
      'Smart recommendations',
      'Automated reports',
      'Predictive modeling',
    ],
  },
];
