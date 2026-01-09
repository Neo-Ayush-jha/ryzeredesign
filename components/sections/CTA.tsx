'use client';

import { Button } from '@/components/button';
import { ArrowRight, Sparkles } from 'lucide-react';
import { useEffect, useState, useRef } from 'react';

export default function CTA() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.getElementById('cta-section');
    if (section) observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="cta-section"
      className="py-20 lg:py-32 bg-gradient-to-br from-blue-600 via-blue-700 to-cyan-600 relative overflow-hidden"
    >
      <div className="absolute inset-0 bg-grid-white/10 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))]"></div>
      
      <Ticker
        items={[
          '2000+ CLIENTS',
          '700+ AGENCIES',
          '23+ COUNTRIES',
          '$500M+ AD SPEND MANAGED',
        ]}
        direction="left"
        placement="top"
      />

      <Ticker
        items={[
          '$500M+ AD SPEND MANAGED',
          '23+ COUNTRIES',
          '700+ AGENCIES',
          '2000+ CLIENTS',
        ]}
        direction="right"
        placement="bottom"
      />
      <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-400 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-overlay filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <div
          className={`transition-all duration-700 ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm text-white px-4 py-2 rounded-full mb-8">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">
              Join 10,000+ successful teams
            </span>
          </div>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6">
            Ready to transform your workflow?
          </h2>

          <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Start your 14-day free trial today. No credit card required, cancel
            anytime.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="bg-transparent border-2 border-white text-black hover:text-white hover:bg-white/10 px-8 py-6 text-lg transition-all hover:scale-105"
            >
              Book a Demo
            </Button>
          </div>

          <div className="mt-10 flex items-center justify-center space-x-8 text-sm text-blue-100">
            <div className="flex items-center space-x-2">
              <svg
                className="h-5 w-5 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Free 14-day trial</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg
                className="h-5 w-5 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>No credit card needed</span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }

        
      `}</style>
    </section>
  );
}

function Ticker({
  items,
  direction = 'left',
  placement = 'top',
}: {
  items: string[];
  direction?: 'left' | 'right';
  placement?: 'top' | 'bottom';
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const moveRef = useRef<HTMLDivElement | null>(null);
  const [repeats, setRepeats] = useState(2);

  useEffect(() => {
    const container = containerRef.current;
    const move = moveRef.current;
    if (!container || !move) return;

    const group = move.querySelector('.ticker__group') as HTMLElement | null;
    if (!group) return;

    const containerW = container.clientWidth;
    const groupW = group.offsetWidth;

    if (groupW === 0) return;

    const needed = Math.max(2, Math.ceil((containerW * 2) / groupW));
    setRepeats(needed);

    const distance = groupW;
    move.style.setProperty('--ticker-distance', `${distance}px`);

    const speed = 0.03; 
    const duration = Math.max(8, Math.round(distance * speed));
    move.style.setProperty('--ticker-duration', `${duration}s`);
  }, [items]);

  return (
    <div
      ref={containerRef}
      className={`absolute left-0 right-0 ${placement === 'top' ? 'top-0' : 'bottom-0'} overflow-hidden pointer-events-none z-40`}
    >
      <div className="ticker bg-orange-600 text-white">
        <div
          ref={moveRef}
          className={`ticker__move ticker__move--${direction}`}
          style={{ animationTimingFunction: 'linear' }}
        >
          {Array.from({ length: repeats }).map((_, i) => (
            <div key={i} className="ticker__group" aria-hidden={i > 0}>
              {items.map((t, idx) => (
                <span key={idx} className="px-6 whitespace-nowrap">
                  {t}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
      <style jsx>{`
        .ticker { height: 44px; display: flex; align-items: center; }
        .ticker__move { display: flex; align-items: center; width: auto; --ticker-distance: 200px; --ticker-duration: 12s; }
        .ticker__group { display: flex; gap: 24px; align-items: center; flex: 0 0 auto; }

        @keyframes marquee-left {
          0% { transform: translateX(0); }
          100% { transform: translateX(calc(-1 * var(--ticker-distance))); }
        }

        @keyframes marquee-right {
          0% { transform: translateX(calc(-1 * var(--ticker-distance))); }
          100% { transform: translateX(0); }
        }

        .ticker__move--left { animation: marquee-left var(--ticker-duration) linear infinite; }
        .ticker__move--right { animation: marquee-right var(--ticker-duration) linear infinite; }

        @media (prefers-reduced-motion: reduce) {
          .ticker__move--left, .ticker__move--right { animation: none !important; }
        }
      `}</style>
    </div>
  );
}
