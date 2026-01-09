'use client';

import { Button } from '@/components/button';
import { Check, Sparkles } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

interface PricingTier {
  name: string;
  price: string;
  period: string;
  description: string;
  features: string[];
  highlighted?: boolean;
  cta: string;
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Starter',
    price: '$29',
    period: '/month',
    description: 'Perfect for small teams getting started',
    features: [
      'Up to 10 team members',
      'Basic analytics',
      '5GB storage',
      'Email support',
      'Core integrations',
      'Mobile apps',
    ],
    cta: 'Start Free Trial',
  },
  {
    name: 'Professional',
    price: '$79',
    period: '/month',
    description: 'For growing teams that need more power',
    features: [
      'Up to 50 team members',
      'Advanced analytics',
      '100GB storage',
      'Priority support',
      'All integrations',
      'Custom workflows',
      'API access',
      'Advanced security',
    ],
    highlighted: true,
    cta: 'Start Free Trial',
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    period: '',
    description: 'For large organizations with custom needs',
    features: [
      'Unlimited team members',
      'Enterprise analytics',
      'Unlimited storage',
      'Dedicated support',
      'Custom integrations',
      'Advanced automation',
      'SSO & SAML',
      'SLA guarantee',
      'Custom training',
    ],
    cta: 'Contact Sales',
  },
];

export default function Pricing() {
  const [visibleCards, setVisibleCards] = useState<number[]>([]);
  const observerRef = useRef<IntersectionObserver | null>(null);
  const cardRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.indexOf(
              entry.target as HTMLDivElement
            );
            if (index !== -1 && !visibleCards.includes(index)) {
              setVisibleCards((prev) => [...prev, index]);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observerRef.current?.observe(ref);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  return (
    <section className="min-h-screen flex items-center py-20 lg:py-32 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">
            Simple, transparent
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              {' '}
              pricing
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose the perfect plan for your team. All plans include a 14-day
            free trial.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {pricingTiers.map((tier, index) => {
            const isVisible = visibleCards.includes(index);

            return (
              <div
                key={index}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                className={`relative transition-all duration-500 ${
                  isVisible
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {tier.highlighted && (
                  <div className="absolute -top-5 left-0 right-0 flex justify-center">
                    <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                      <Sparkles className="h-4 w-4" />
                      <span>Most Popular</span>
                    </div>
                  </div>
                )}

                <div
                  className={`h-full p-8 rounded-2xl border-2 transition-all ${
                    tier.highlighted
                      ? 'border-blue-500 shadow-2xl scale-105 bg-gradient-to-br from-blue-50 to-cyan-50'
                      : 'border-gray-200 hover:border-blue-300 hover:shadow-xl bg-white'
                  }`}
                >
                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      {tier.name}
                    </h3>
                    <p className="text-gray-600 mb-4">{tier.description}</p>
                    <div className="flex items-baseline">
                      <span className="text-5xl font-bold text-gray-900">
                        {tier.price}
                      </span>
                      <span className="text-gray-600 ml-2">{tier.period}</span>
                    </div>
                  </div>

                  <Button
                    className={`w-full mb-8 ${
                      tier.highlighted
                        ? 'bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white shadow-lg'
                        : 'bg-white border-2 border-gray-300 text-gray-900 hover:border-blue-600 hover:bg-blue-50'
                    }`}
                  >
                    {tier.cta}
                  </Button>

                  <ul className="space-y-4">
                    {tier.features.map((feature, i) => (
                      <li key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-600">
            All plans include our core features. Need a custom solution?{' '}
            <a
              href="#"
              className="text-blue-600 hover:text-blue-700 font-medium"
            >
              Contact us
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
