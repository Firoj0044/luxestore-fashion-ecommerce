import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { LOGO_URL } from '../data/products';

export const Footer: React.FC = () => {
  const { setView, setSelectedCategory, showToast } = useStore();
  const [email, setEmail] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !email.includes('@')) {
      showToast('Please enter a valid email address');
      return;
    }
    showToast('Subscribed to LuxeStore Avant-Garde Dispatches');
    setEmail('');
  };

  return (
    <footer className="w-full bg-[#050505] border-t border-white/10 pt-16 pb-24 md:pb-16 text-white">
      <div className="max-w-[1440px] mx-auto px-5 md:px-16">
        <div className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-16">
          {/* Brand Col */}
          <div className="flex flex-col gap-4 max-w-sm">
            <div className="flex items-center gap-2">
              <img src={LOGO_URL} alt="LuxeStore" className="h-8 w-8 object-contain invert brightness-200" />
              <span className="font-display text-[24px] font-black tracking-widest uppercase text-white">
                LuxeStore
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed font-light">
              Radical avant-garde luxury and brutalist silhouettes for the modern aesthete. Exclusive limited releases engineered with uncompromising precision.
            </p>
          </div>

          {/* Links Col */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16 w-full lg:w-auto">
            {/* Help */}
            <div className="flex flex-col gap-3">
              <span className="font-sans text-[11px] font-black text-white/40 uppercase tracking-[0.25em] mb-1">
                Help & Concierge
              </span>
              <button
                onClick={() => showToast('Connecting to 24/7 Concierge Support...')}
                className="text-left text-white/70 hover:text-[#FF3E00] transition-colors text-sm cursor-pointer"
              >
                Support Desk
              </button>
              <button
                onClick={() => {
                  setView('profile');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-left text-white/70 hover:text-[#FF3E00] transition-colors text-sm cursor-pointer"
              >
                Order Status
              </button>
              <button
                onClick={() => showToast('30-day complimentary returns policy applied to all orders.')}
                className="text-left text-white/70 hover:text-[#FF3E00] transition-colors text-sm cursor-pointer"
              >
                Returns & Claims
              </button>
            </div>

            {/* Company */}
            <div className="flex flex-col gap-3">
              <span className="font-sans text-[11px] font-black text-white/40 uppercase tracking-[0.25em] mb-1">
                Maison & Studio
              </span>
              <button
                onClick={() => {
                  setView('home');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-left text-white/70 hover:text-[#FF3E00] transition-colors text-sm cursor-pointer"
              >
                About Atelier
              </button>
              <button
                onClick={() => showToast('Visit our Maison careers portal for editorial & tailoring roles.')}
                className="text-left text-white/70 hover:text-[#FF3E00] transition-colors text-sm cursor-pointer"
              >
                Careers
              </button>
              <button
                onClick={() => showToast('LuxeStore Terms of Service & Privacy Policy')}
                className="text-left text-white/70 hover:text-[#FF3E00] transition-colors text-sm cursor-pointer"
              >
                Legal Terms
              </button>
            </div>

            {/* Collections */}
            <div className="flex flex-col gap-3 col-span-2 md:col-span-1">
              <span className="font-sans text-[11px] font-black text-white/40 uppercase tracking-[0.25em] mb-1">
                Collections
              </span>
              <button
                onClick={() => {
                  setSelectedCategory('Women');
                  setView('shop');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-left text-white/70 hover:text-[#FF3E00] transition-colors text-sm cursor-pointer"
              >
                Women's Capsule
              </button>
              <button
                onClick={() => {
                  setSelectedCategory('Men');
                  setView('shop');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-left text-white/70 hover:text-[#FF3E00] transition-colors text-sm cursor-pointer"
              >
                Men's Tailoring
              </button>
              <button
                onClick={() => {
                  setSelectedCategory('Accessories');
                  setView('shop');
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                }}
                className="text-left text-white/70 hover:text-[#FF3E00] transition-colors text-sm cursor-pointer"
              >
                Fine Accessories
              </button>
            </div>
          </div>

          {/* Newsletter Box */}
          <div className="flex flex-col gap-4 w-full lg:w-80">
            <span className="font-sans text-[11px] font-black text-white/40 uppercase tracking-[0.25em] mb-1">
              Join the Dispatch
            </span>
            <p className="text-xs text-white/60 font-light">
              Receive private drop notifications, seasonal lookbooks, and preview privileges.
            </p>
            <form onSubmit={handleSubscribe} className="flex border-b border-white/30 pb-2 w-full mt-2 focus-within:border-[#FF3E00]">
              <input
                type="email"
                placeholder="Enter email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-transparent border-none outline-none focus:ring-0 p-0 text-sm text-white placeholder-white/40 w-full"
              />
              <button
                type="submit"
                className="text-[#FF3E00] hover:text-white transition-colors uppercase font-sans text-xs font-black tracking-widest ml-3 whitespace-nowrap cursor-pointer"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Bottom copyright line */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40 font-mono-tech">
          <p>© 2026 LUXESTORE. ALL RIGHTS RESERVED.</p>
          <div className="flex gap-6">
            <span>ENCRYPTED 256-BIT SSL</span>
            <span>WORLDWIDE INSURED DISPATCH</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
