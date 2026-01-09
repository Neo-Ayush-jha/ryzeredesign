'use client';

import { testimonials } from '@/data/testimonials';
import { Star, Quote } from 'lucide-react';

export default function Testimonials() {
  return (
    <section className="py-32 lg:py-32 bg-gradient-to-br from-[#050b1a] to-[#020617] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-blue-400 tracking-widest text-sm mb-2">
            INTERN SUCCESS
          </p>
          <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
            What our interns say?
          </h2>
          <p className="text-lg text-blue-200 max-w-3xl mx-auto">
            Join thousands of successful interns who have transformed their
            careers through our program
          </p>
        </div>

        <div className="relative">
          <div className="testimonial-track">
            {[...testimonials, ...testimonials].map((t, index) => (
              <div
                key={index}
                className="testimonial-card"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="flex space-x-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="h-4 w-4 fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>
                  <Quote className="h-6 w-6 text-white/30" />
                </div>

                <p className="text-blue-100 mb-6 leading-relaxed">
                  {t.content}
                </p>

                <div className="flex items-center space-x-3 pt-5 border-t border-white/10">
                  <div className="h-11 w-11 rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center text-white font-bold">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <p className="text-white font-semibold">{t.name}</p>
                    <p className="text-sm text-blue-300">
                      {t.role} · {t.company}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        .testimonial-track {
          display: flex;
          width: max-content;
          animation: scroll 20s linear infinite;
        }

        .testimonial-card {
          width: 380px;
          flex-shrink: 0;
          margin-right: 24px;
          padding: 28px;
          border-radius: 18px;
          background: linear-gradient(
            145deg,
            rgba(255, 255, 255, 0.08),
            rgba(255, 255, 255, 0.02)
          );
          backdrop-filter: blur(10px);
          border: 1px solid rgba(255, 255, 255, 0.08);
          box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
        }

        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }

        /* Pause on hover (optional) */
        .testimonial-track:hover {
          animation-play-state: paused;
        }

        /* Accessibility */
        @media (prefers-reduced-motion: reduce) {
          .testimonial-track {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
}
