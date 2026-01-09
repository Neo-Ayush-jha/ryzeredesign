import Header from '@/components/layout/Header';
import PricingSection from '@/components/sections/Pricing';

export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-1">
        

        <PricingSection />
      </main>

    </div>
  );
}