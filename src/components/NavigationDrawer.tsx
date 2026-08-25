import React from 'react';
import { useStore } from '../context/StoreContext';
import { X, Sparkles, User, ShoppingBag, Heart, Tag, Home, Search } from 'lucide-react';
import { LOGO_URL } from '../data/products';

export const NavigationDrawer: React.FC = () => {
  const { isNavDrawerOpen, setIsNavDrawerOpen, setView, setSelectedCategory, user } = useStore();

  if (!isNavDrawerOpen) return null;

  const navigateTo = (categoryOrView: string) => {
    setIsNavDrawerOpen(false);
    if (categoryOrView === 'home') {
      setView('home');
    } else if (categoryOrView === 'wishlist') {
      setView('wishlist');
    } else if (categoryOrView === 'profile') {
      setView('profile');
    } else if (categoryOrView === 'search') {
      setView('search');
    } else {
      setSelectedCategory(categoryOrView);
      setView('shop');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* Backdrop */}
      <div
        id="drawer-overlay"
        onClick={() => setIsNavDrawerOpen(false)}
        className="fixed inset-0 bg-black/80 backdrop-blur-xs z-50 transition-opacity duration-300 md:hidden animate-fade-in"
      />

      {/* Drawer */}
      <aside
        id="nav-drawer"
        className="fixed inset-y-0 left-0 z-50 h-full w-80 bg-[#0c0c0c] border-r border-white/10 shadow-2xl flex flex-col py-8 px-6 transition-transform duration-300 md:hidden text-white"
      >
        <div className="flex justify-between items-center mb-8 border-b border-white/10 pb-4">
          <div className="flex items-center gap-2">
            <img src={LOGO_URL} alt="LuxeStore" className="h-7 w-7 object-contain invert brightness-200" />
            <span className="font-display text-[22px] font-black tracking-wider text-white uppercase">
              LuxeStore
            </span>
          </div>
          <button
            id="close-drawer"
            aria-label="Close menu"
            onClick={() => setIsNavDrawerOpen(false)}
            className="text-white/60 hover:text-white p-1 transition-colors cursor-pointer"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        <nav className="flex flex-col gap-2 flex-1 overflow-y-auto">
          <button
            onClick={() => navigateTo('home')}
            className="flex items-center gap-4 py-3 px-3 text-white/70 hover:bg-white/10 hover:text-white transition-colors font-sans text-[12px] font-bold tracking-widest uppercase rounded-none cursor-pointer"
          >
            <Home className="w-5 h-5 text-[#FF3E00]" />
            Home
          </button>

          <button
            onClick={() => navigateTo('New Arrivals')}
            className="flex items-center gap-4 py-3 px-3 text-white/70 hover:bg-white/10 hover:text-white transition-colors font-sans text-[12px] font-bold tracking-widest uppercase rounded-none cursor-pointer"
          >
            <Sparkles className="w-5 h-5 text-[#FF3E00]" />
            New Arrivals
          </button>

          <button
            onClick={() => navigateTo('Women')}
            className="flex items-center gap-4 py-3 px-3 text-white/70 hover:bg-white/10 hover:text-white transition-colors font-sans text-[12px] font-bold tracking-widest uppercase rounded-none cursor-pointer"
          >
            <span className="w-5 h-5 flex items-center justify-center font-display text-sm font-black">W</span>
            Women's Collection
          </button>

          <button
            onClick={() => navigateTo('Men')}
            className="flex items-center gap-4 py-3 px-3 text-white/70 hover:bg-white/10 hover:text-white transition-colors font-sans text-[12px] font-bold tracking-widest uppercase rounded-none cursor-pointer"
          >
            <span className="w-5 h-5 flex items-center justify-center font-display text-sm font-black">M</span>
            Men's Collection
          </button>

          <button
            onClick={() => navigateTo('Accessories')}
            className="flex items-center gap-4 py-3 px-3 text-white/70 hover:bg-white/10 hover:text-white transition-colors font-sans text-[12px] font-bold tracking-widest uppercase rounded-none cursor-pointer"
          >
            <ShoppingBag className="w-5 h-5 text-white/70" />
            Accessories & Bags
          </button>

          <button
            onClick={() => navigateTo('Sale')}
            className="flex items-center gap-4 py-3 px-3 text-[#FF3E00] hover:bg-white/10 transition-colors font-sans text-[12px] font-bold tracking-widest uppercase rounded-none cursor-pointer"
          >
            <Tag className="w-5 h-5 text-[#FF3E00]" />
            Private Sale
          </button>

          <div className="border-t border-white/10 my-4 pt-4">
            <button
              onClick={() => navigateTo('search')}
              className="flex items-center gap-4 py-3 px-3 text-white/70 hover:bg-white/10 hover:text-white transition-colors font-sans text-[12px] font-bold tracking-widest uppercase w-full cursor-pointer"
            >
              <Search className="w-5 h-5" />
              Search Boutique
            </button>

            <button
              onClick={() => navigateTo('wishlist')}
              className="flex items-center gap-4 py-3 px-3 text-white/70 hover:bg-white/10 hover:text-white transition-colors font-sans text-[12px] font-bold tracking-widest uppercase w-full cursor-pointer"
            >
              <Heart className="w-5 h-5" />
              My Wishlist
            </button>

            <button
              onClick={() => navigateTo('profile')}
              className="flex items-center gap-4 py-3 px-3 text-white/70 hover:bg-white/10 hover:text-white transition-colors font-sans text-[12px] font-bold tracking-widest uppercase w-full cursor-pointer"
            >
              <User className="w-5 h-5" />
              {user ? user.name : 'Sign In / Account'}
            </button>
          </div>
        </nav>

        {/* Footer info */}
        <div className="pt-4 border-t border-white/10 text-xs text-white/40 text-center font-mono-tech">
          <p>© 2026 LUXESTORE AVANT-GARDE</p>
        </div>
      </aside>
    </>
  );
};
