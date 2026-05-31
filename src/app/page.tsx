import Link from "next/link";
import { CtaCards } from "../../components/cta-cards";
import { TrustSafety } from "../../components/trust-safety";
import { PricingComparison } from "../../components/pricing-comparison";
import { FAQ } from "../../components/faq";
import { Footer } from "../../components/footer";
import { CtaOrange } from "../../components/cta-orange";
import { LottiePlayer } from "../../components/lottie-player";

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] font-sans text-zinc-900 flex flex-col justify-between overflow-x-hidden">
      {/* Hero Section Container */}
      <section className="relative flex items-center pt-32 pb-8 lg:pt-24 lg:pb-6 bg-white">
        {/* Subtle Background Glows */}
        <div className="absolute top-0 left-1/4 w-[400px] h-[400px] bg-orange-200/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>
        <div className="absolute bottom-10 right-1/4 w-[400px] h-[400px] bg-indigo-200/10 rounded-full blur-3xl -z-10 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative">
          {/* Abstract Dot Matrix Shape (Left Side) */}
          <svg className="absolute -left-4 top-0 opacity-25 text-orange-500 hidden md:block -z-10" width="80" height="80" fill="none" viewBox="0 0 80 80">
            <circle cx="10" cy="10" r="2.5" fill="currentColor" />
            <circle cx="30" cy="10" r="2.5" fill="currentColor" />
            <circle cx="50" cy="10" r="2.5" fill="currentColor" />
            <circle cx="70" cy="10" r="2.5" fill="currentColor" />
            <circle cx="10" cy="30" r="2.5" fill="currentColor" />
            <circle cx="30" cy="30" r="2.5" fill="currentColor" />
            <circle cx="50" cy="30" r="2.5" fill="currentColor" />
            <circle cx="70" cy="30" r="2.5" fill="currentColor" />
            <circle cx="10" cy="50" r="2.5" fill="currentColor" />
            <circle cx="30" cy="50" r="2.5" fill="currentColor" />
            <circle cx="50" cy="50" r="2.5" fill="currentColor" />
            <circle cx="70" cy="50" r="2.5" fill="currentColor" />
            <circle cx="10" cy="70" r="2.5" fill="currentColor" />
            <circle cx="30" cy="70" r="2.5" fill="currentColor" />
            <circle cx="50" cy="70" r="2.5" fill="currentColor" />
            <circle cx="70" cy="70" r="2.5" fill="currentColor" />
          </svg>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6">
              <h1 className="text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-950 leading-tight">
                Send Packages in Hyderabad <br />
                <span className="bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 bg-clip-text text-transparent">
                  With Everyday Travelers
                </span>
              </h1>

              <p className="text-base sm:text-lg text-zinc-650 font-normal leading-relaxed max-w-xl">
                Send packages safely with travelers going your way. 70% cheaper, ID-verified, and secure.
              </p>

              <div className="flex flex-row items-center gap-4 pt-2">
                <Link
                  href="#book"
                  className="inline-flex items-center justify-center px-5 py-3 rounded-xl text-sm font-medium text-white bg-orange-500 hover:bg-orange-600 shadow-md hover:shadow-lg hover:-translate-y-0.5 active:translate-y-0 transition-all duration-200"
                >
                  Book a Delivery
                </Link>

                <Link
                  href="#become-traveler"
                  className="inline-flex items-center justify-center px-5 py-3 rounded-xl text-sm font-medium text-zinc-700 bg-white border border-zinc-200 hover:border-zinc-300 hover:text-zinc-950 shadow-sm hover:shadow transition-all duration-200"
                >
                  Become a Traveler
                </Link>
              </div>
            </div>

            {/* Right Column: Lottie Animation */}
            <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
              <div className="relative w-[400px] h-[400px] flex justify-center items-center">
                
                {/* Shape Layer 1: Orange Tilted Card */}
                <div className="absolute inset-4 bg-orange-50/70 rounded-[40px] rotate-3 -z-10 border border-orange-100/50 shadow-sm pointer-events-none"></div>
                
                {/* Shape Layer 2: White Inverse Tilted Card */}
                <div className="absolute inset-6 bg-zinc-50 rounded-[40px] -rotate-3 -z-20 border border-zinc-150 shadow-xs pointer-events-none"></div>
                
                {/* Animation Player */}
                <LottiePlayer
                  src="https://lottie.host/b9888d10-1ea2-4fb2-b295-c4ad2fcb230e/EP2EBKihce.lottie"
                  className="w-full h-full relative z-10"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* How it Works Section (Vibrant Orange Background with Symmetrical Wave Divider) */}
      <section id="how-it-works" className="relative bg-orange-500 text-white overflow-hidden">
        
        {/* Wave Divider at the top */}
        <div className="w-full overflow-hidden leading-[0] bg-white pointer-events-none">
          <svg className="relative block w-full h-[100px] text-orange-500 fill-current" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0 C300,120 900,120 1200,0 L1200,120 L0,120 Z"></path>
          </svg>
        </div>

        {/* Section Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 pb-2 relative z-10">
          
          {/* Section Header */}
          <div className="text-left mb-16">
            <h2 className="text-xs font-bold text-orange-100 uppercase tracking-widest mb-2">
              How it Works
            </h2>
            <p className="text-3xl sm:text-4xl font-semibold text-white">
              Simple. Safe. Affordable.
            </p>
          </div>

          {/* Senders & Travelers Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Senders Column (Modern Cards) */}
            <div className="space-y-8">
              <div className="pb-3 border-b border-orange-400/60">
                <h3 className="text-sm font-bold text-white tracking-wider uppercase">
                  For Senders
                </h3>
              </div>
              
              <div className="space-y-4">
                {/* Step 1 */}
                <div className="group bg-white/10 border border-white/10 hover:bg-white/15 hover:border-white/20 hover:-translate-y-0.5 p-5 rounded-2xl transition-all duration-300 flex items-start space-x-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-white flex items-center justify-center text-orange-600 font-bold text-sm shadow-sm transition-transform duration-300 group-hover:scale-105">
                    1
                  </span>
                  <div className="space-y-1">
                    <h4 className="text-base font-semibold text-white">Post your parcel</h4>
                    <p className="text-sm text-orange-100/90 leading-relaxed font-normal">
                      Tell us where to pick up the parcel and where it should be delivered. Mention the parcel size (small, medium, large).
                    </p>
                  </div>
                </div>
                
                {/* Step 2 */}
                <div className="group bg-white/10 border border-white/10 hover:bg-white/15 hover:border-white/20 hover:-translate-y-0.5 p-5 rounded-2xl transition-all duration-300 flex items-start space-x-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-white flex items-center justify-center text-orange-600 font-bold text-sm shadow-sm transition-transform duration-300 group-hover:scale-105">
                    2
                  </span>
                  <div className="space-y-1">
                    <h4 className="text-base font-semibold text-white">Match a traveler</h4>
                    <p className="text-sm text-orange-100/90 leading-relaxed font-normal">
                      PicsiDrop finds a verified traveler going your way. See their name, rating, and vehicle.
                    </p>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="group bg-white/10 border border-white/10 hover:bg-white/15 hover:border-white/20 hover:-translate-y-0.5 p-5 rounded-2xl transition-all duration-300 flex items-start space-x-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-white flex items-center justify-center text-orange-600 font-bold text-sm shadow-sm transition-transform duration-300 group-hover:scale-105">
                    3
                  </span>
                  <div className="space-y-1">
                    <h4 className="text-base font-semibold text-white">Delivered safely</h4>
                    <p className="text-sm text-orange-100/90 leading-relaxed font-normal">
                      The traveler delivers your parcel. Both sides confirm with a one-time password. Your money stays safely in escrow.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Travelers Column (Modern Cards) */}
            <div className="space-y-8">
              <div className="pb-3 border-b border-orange-400/60">
                <h3 className="text-sm font-bold text-white tracking-wider uppercase">
                  For Travelers
                </h3>
              </div>
              
              <div className="space-y-4">
                {/* Step 1 */}
                <div className="group bg-white/10 border border-white/10 hover:bg-white/15 hover:border-white/20 hover:-translate-y-0.5 p-5 rounded-2xl transition-all duration-300 flex items-start space-x-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-white flex items-center justify-center text-orange-600 font-bold text-sm shadow-sm transition-transform duration-300 group-hover:scale-105">
                    1
                  </span>
                  <div className="space-y-1">
                    <h4 className="text-base font-semibold text-white">Register your route</h4>
                    <p className="text-sm text-orange-100/90 leading-relaxed font-normal">
                      Tell PicsiDrop the route you travel daily. For example: Madhapur to Secunderabad every morning.
                    </p>
                  </div>
                </div>
                
                {/* Step 2 */}
                <div className="group bg-white/10 border border-white/10 hover:bg-white/15 hover:border-white/20 hover:-translate-y-0.5 p-5 rounded-2xl transition-all duration-300 flex items-start space-x-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-white flex items-center justify-center text-orange-600 font-bold text-sm shadow-sm transition-transform duration-300 group-hover:scale-105">
                    2
                  </span>
                  <div className="space-y-1">
                    <h4 className="text-base font-semibold text-white">Accept a parcel</h4>
                    <p className="text-sm text-orange-100/90 leading-relaxed font-normal">
                      Browse parcels matching your route. Choose one that fits in your bag or seat. Accept with one tap.
                    </p>
                  </div>
                </div>
                
                {/* Step 3 */}
                <div className="group bg-white/10 border border-white/10 hover:bg-white/15 hover:border-white/20 hover:-translate-y-0.5 p-5 rounded-2xl transition-all duration-300 flex items-start space-x-4">
                  <span className="flex-shrink-0 w-9 h-9 rounded-xl bg-white flex items-center justify-center text-orange-600 font-bold text-sm shadow-sm transition-transform duration-300 group-hover:scale-105">
                    3
                  </span>
                  <div className="space-y-1">
                    <h4 className="text-base font-semibold text-white">Deliver and earn</h4>
                    <p className="text-sm text-orange-100/90 leading-relaxed font-normal">
                      Pick up, deliver, confirm with OTP. Earnings (₹200-500) reach your UPI account directly.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
          </div>
        </div>

        {/* Symmetrical Wave Divider at the bottom (Transitions back to white background) */}
        <div className="w-full overflow-hidden leading-[0] bg-white pointer-events-none">
          <svg className="relative block w-full h-[100px] text-orange-500 fill-current rotate-180" viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0 C300,120 900,120 1200,0 L1200,120 L0,120 Z"></path>
          </svg>
        </div>
      </section>

      {/* Double CTA Cards Component (Right after How it Works section) */}
      <CtaCards />

      {/* Trust & Safety Section */}
      <TrustSafety />

      {/* Pricing Comparison Section */}
      <PricingComparison />

      {/* FAQ Section */}
      <FAQ />

      {/* Orange CTA Section */}
      <CtaOrange />

      {/* Footer */}
      <Footer />
    </div>
  );
}
