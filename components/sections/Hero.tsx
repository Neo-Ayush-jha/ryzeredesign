'use client';

import { Button } from '@/components/button';
import { ArrowRight, Play, Sparkles } from 'lucide-react';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import HeroImg from '@/public/src.svg'
export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(0deg,white,rgba(255,255,255,0.6))] -z-10"></div>

      <div className="absolute top-20 left-10 w-72 h-72 bg-blue-400 rounded-full mix-blend-multiply filter blur-2xl opacity-25 animate-blob blob-1"></div>
      <div className="absolute top-40 right-10 w-80 h-80 bg-cyan-400 rounded-full mix-blend-multiply filter blur-2xl opacity-22 animate-blob blob-2"></div>
      <div className="absolute -bottom-8 left-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-18 animate-blob blob-3"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-32 relative z-10">
        <div className="text-center">
          <div
            className={`inline-flex items-center space-x-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-8 transition-all duration-700 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
          >
            <Sparkles className="h-4 w-4" />
            <span className="text-sm font-medium">
              Trusted by 10,000+ teams worldwide
            </span>
          </div>

          <h1
            className={`text-5xl sm:text-6xl lg:text-7xl font-bold text-gray-900 mb-6 transition-all duration-700 delay-100 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
          >
           Let  AI  manage
            <br />
            <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">
              your  ads
            </span>
          </h1>

          <p
            className={`text-xl sm:text-2xl text-gray-600 mb-10 max-w-3xl mx-auto transition-all duration-700 delay-200 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
          >
            Ryze empowers your team with intelligent automation, real-time
            collaboration, and powerful analytics to achieve more in less time.
          </p>

          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-12 transition-all duration-700 delay-300 ${
              isVisible
                ? 'opacity-100 translate-y-0 animate-pop'
                : 'opacity-0 translate-y-4'
            }`}
          >
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-cyan-600 hover:from-blue-700 hover:to-cyan-700 text-white px-8 py-6 text-lg shadow-xl hover:shadow-2xl transition-all hover:scale-105"
            >
              Start Free Trial
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="px-8 py-6 text-lg border-2 hover:bg-gray-50 transition-all hover:scale-105"
            >
              <Play className="mr-2 h-5 w-5" />
              Watch Demo
            </Button>
          </div>

          <div
            className={`flex items-center justify-center space-x-8 text-sm text-gray-600 transition-all duration-700 delay-400 ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
          >
            <div className="flex items-center space-x-2">
              <svg
                className="h-5 w-5 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>No credit card required</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg
                className="h-5 w-5 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>14-day free trial</span>
            </div>
            <div className="flex items-center space-x-2">
              <svg
                className="h-5 w-5 text-green-500"
                fill="currentColor"
                viewBox="0 0 20 20"
              >
                <path
                  fillRule="evenodd"
                  d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                  clipRule="evenodd"
                />
              </svg>
              <span>Cancel anytime</span>
            </div>
          </div>

          <div
            className={`mt-16 relative transition-all duration-1000 delay-500 ${
              isVisible
                ? 'opacity-100 translate-y-0 animate-float animate-tilt'
                : 'opacity-0 translate-y-8'
            }`}
          >
            <div className="relative mx-auto max-w-5xl">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur-2xl opacity-20"></div>
              <div className="relative bg-white p-2 rounded-2xl shadow-2xl border border-gray-200">
                <div className="bg-gradient-to-br from-gray-50 to-gray-100 rounded-xl p-8 aspect-video flex items-center justify-center">
                  <div className="text-center">
                    <Image
                        src={HeroImg}
                        className=" max-h-full object-cover inline-block p-4 mb-4"
                        alt="profile pic"
                      />
                    <p className="text-gray-600 font-medium">
                      Dashboard Preview
                    </p>
                  </div>
                </div>
              </div>
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
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        @keyframes blob {
          0%,
          100% {
            transform: translate(0, 0) scale(1) rotate(0deg);
          }
          25% {
            transform: translate(40px, -40px) scale(1.08) rotate(6deg);
          }
          50% {
            transform: translate(-30px, 30px) scale(0.94) rotate(-4deg);
          }
          75% {
            transform: translate(20px, 20px) scale(1.02) rotate(3deg);
          }
        }

        .animate-blob {
          animation: blob 10s ease-in-out infinite;
        }
        .blob-1 {
          animation-duration: 10s;
          opacity: 0.26;
        }
        .blob-2 {
          animation-duration: 12s;
          animation-delay: 1.5s;
          opacity: 0.22;
        }
        .blob-3 {
          animation-duration: 14s;
          animation-delay: 3s;
          opacity: 0.18;
        }

        @keyframes floaty {
          0% { transform: translateY(0) }
          50% { transform: translateY(-12px) }
          100% { transform: translateY(0) }
        }

        .animate-float {
          animation: floaty 6s ease-in-out infinite;
        }

        @keyframes tilt {
          0% { transform: rotate(0deg) }
          50% { transform: rotate(1.2deg) }
          100% { transform: rotate(0deg) }
        }

        .animate-tilt {
          animation: tilt 8s ease-in-out infinite;
        }

        @keyframes pop {
          0% { transform: translateY(12px) scale(.98); opacity: 0 }
          60% { transform: translateY(-6px) scale(1.04); opacity: 1 }
          100% { transform: translateY(0) scale(1); opacity: 1 }
        }

        .animate-pop {
          animation: pop 800ms cubic-bezier(.2,.9,.2,1) both;
          animation-delay: 300ms;
        }
        `}</style>
    </section>
  );
}
