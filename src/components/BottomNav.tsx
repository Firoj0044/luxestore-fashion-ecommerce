import React from 'react';
import { useStore } from '../context/StoreContext';
import { Home, Store, Heart, User } from 'lucide-react';

export const BottomNav: React.FC = () => {
  const { view, setView, wishlist } = useStore();

  return (
    <nav
      id="bottom-nav-bar"
      className="fixed bottom-0 w-full z-40 bg-[#080808]/95 backdrop-blur-md border-t border-white/10 flex justify-around items-center h-16 px-4 md:hidden pb-safe shadow-[0_-4px_20px_rgba(0,0,0,0.5)]"
    >
      {/* Home */}
      <button
        id="bottom-nav-home"
        onClick={() => {
          setView('home');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className={`flex flex-col items-center justify-center w-16 transition-all active:scale-90 cursor-pointer ${
          view === 'home' ? 'text-[#FF3E00] font-black' : 'text-white/60 hover:text-white'
        }`}
      >
        <Home className={`w-5 h-5 mb-1 ${view === 'home' ? 'stroke-[2.5]' : 'stroke-[1.75]'}`} />
        <span className="font-sans text-[10px] tracking-widest uppercase font-bold">Home</span>
      </button>

      {/* Shop */}
      <button
        id="bottom-nav-shop"
        onClick={() => {
          setView('shop');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className={`flex flex-col items-center justify-center w-16 transition-all active:scale-90 cursor-pointer ${
          view === 'shop' || view === 'product-detail'
            ? 'text-[#FF3E00] font-black'
            : 'text-white/60 hover:text-white'
        }`}
      >
        <Store
          className={`w-5 h-5 mb-1 ${
            view === 'shop' || view === 'product-detail' ? 'stroke-[2.5]' : 'stroke-[1.75]'
          }`}
        />
        <span className="font-sans text-[10px] tracking-widest uppercase font-bold">Shop</span>
      </button>

      {/* Wishlist */}
      <button
        id="bottom-nav-wishlist"
        onClick={() => {
          setView('wishlist');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className={`flex flex-col items-center justify-center w-16 transition-all active:scale-90 relative cursor-pointer ${
          view === 'wishlist' ? 'text-[#FF3E00] font-black' : 'text-white/60 hover:text-white'
        }`}
      >
        <div className="relative">
          <Heart
            className={`w-5 h-5 mb-1 ${
              view === 'wishlist' ? 'fill-[#FF3E00] stroke-[#FF3E00]' : 'stroke-[1.75]'
            }`}
          />
          {wishlist.length > 0 && (
            <span className="absolute -top-1 -right-2 bg-[#FF3E00] text-white text-[9px] w-3.5 h-3.5 rounded-full flex items-center justify-center font-black">
              {wishlist.length}
            </span>
          )}
        </div>
        <span className="font-sans text-[10px] tracking-widest uppercase font-bold">Wishlist</span>
      </button>

      {/* Profile */}
      <button
        id="bottom-nav-profile"
        onClick={() => {
          setView('profile');
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        className={`flex flex-col items-center justify-center w-16 transition-all active:scale-90 cursor-pointer ${
          view === 'profile' || view === 'login' || view === 'signup'
            ? 'text-[#FF3E00] font-black'
            : 'text-white/60 hover:text-white'
        }`}
      >
        <User
          className={`w-5 h-5 mb-1 ${
            view === 'profile' || view === 'login' || view === 'signup'
              ? 'stroke-[2.5]'
              : 'stroke-[1.75]'
          }`}
        />
        <span className="font-sans text-[10px] tracking-widest uppercase font-bold">Profile</span>
      </button>
    </nav>
  );
};
