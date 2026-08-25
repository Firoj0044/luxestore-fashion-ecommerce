import React from 'react';
import { useStore } from '../context/StoreContext';
import { LOGO_URL } from '../data/products';
import { Menu, Search, ShoppingBag } from 'lucide-react';

export const Navbar: React.FC = () => {
  const { view, setView, cartCount, setIsNavDrawerOpen, setSelectedCategory } = useStore();

  const handleNavClick = (category: string) => {
    if (category === 'Home') {
      setView('home');
    } else {
      setSelectedCategory(category);
      setView('shop');
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      id="top-app-bar"
      className="fixed top-0 w-full z-50 bg-[#080808]/90 backdrop-blur-md border-b border-white/10 h-20 transition-all"
    >
      <div className="flex justify-between items-center px-5 md:px-16 h-full max-w-[1440px] mx-auto w-full">
        {/* Mobile Hamburger */}
        <button
          id="btn-mobile-menu"
          aria-label="Open Navigation Menu"
          onClick={() => setIsNavDrawerOpen(true)}
          className="md:hidden text-white hover:text-[#FF3E00] transition-colors p-2 active:scale-95 cursor-pointer"
        >
          <Menu className="w-6 h-6" />
        </button>

        {/* Desktop Navigation Links */}
        <nav className="hidden md:flex gap-8 items-center h-full">
          <button
            onClick={() => handleNavClick('New Arrivals')}
            className="font-sans text-[11px] font-bold tracking-[0.2em] uppercase transition-colors text-white/60 hover:text-white cursor-pointer"
          >
            New Arrivals
          </button>
          <button
            onClick={() => handleNavClick('Women')}
            className="font-sans text-[11px] font-bold tracking-[0.2em] uppercase text-white/60 hover:text-white transition-colors cursor-pointer"
          >
            Women
          </button>
          <button
            onClick={() => handleNavClick('Men')}
            className="font-sans text-[11px] font-bold tracking-[0.2em] uppercase text-white/60 hover:text-white transition-colors cursor-pointer"
          >
            Men
          </button>
          <button
            onClick={() => handleNavClick('Accessories')}
            className="font-sans text-[11px] font-bold tracking-[0.2em] uppercase text-white/60 hover:text-white transition-colors cursor-pointer"
          >
            Accessories
          </button>
          <button
            onClick={() => handleNavClick('Home')}
            className={`font-sans text-[11px] font-bold tracking-[0.2em] uppercase transition-all cursor-pointer ${
              view === 'home'
                ? 'text-[#FF3E00] font-black border-b-2 border-[#FF3E00] pb-1'
                : 'text-white/60 hover:text-white'
            }`}
          >
            Home
          </button>
        </nav>

        {/* Brand Logo with Crown */}
        <div className="flex items-center justify-center flex-1 md:flex-none h-full">
          <button
            id="brand-logo-btn"
            onClick={() => {
              setView('home');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <img
              src={LOGO_URL}
              alt="LuxeStore Crown Logo"
              className="h-8 w-8 object-contain group-hover:scale-105 transition-transform duration-300 invert brightness-200"
            />
            <span className="font-display text-[22px] md:text-[26px] font-black tracking-[0.16em] text-white uppercase group-hover:text-[#FF3E00] transition-colors">
              LuxeStore
            </span>
          </button>
        </div>

        {/* Trailing Actions: Search & Shopping Bag */}
        <div className="flex items-center gap-3">
          <button
            id="btn-search-nav"
            aria-label="Search"
            onClick={() => {
              setView('search');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className={`text-white hover:text-[#FF3E00] transition-colors p-2.5 rounded-full active:scale-95 cursor-pointer ${
              view === 'search' ? 'bg-white/10 text-[#FF3E00]' : ''
            }`}
          >
            <Search className="w-5 h-5" />
          </button>

          <button
            id="btn-cart-nav"
            aria-label="Shopping Bag"
            onClick={() => {
              setView('cart');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="text-white hover:text-[#FF3E00] transition-colors p-2.5 relative active:scale-95 cursor-pointer"
          >
            <ShoppingBag className="w-5 h-5" />
            {cartCount > 0 && (
              <span className="absolute top-0.5 right-0.5 bg-[#FF3E00] text-white text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-black shadow-xs">
                {cartCount}
              </span>
            )}
          </button>
        </div>
      </div>
    </header>
  );
};
