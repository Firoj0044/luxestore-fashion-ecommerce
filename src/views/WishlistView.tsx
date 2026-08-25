import React from 'react';
import { useStore } from '../context/StoreContext';
import { Heart, Trash2, ArrowRight } from 'lucide-react';

export const WishlistView: React.FC = () => {
  const { wishlist, removeFromWishlist, moveToCartFromWishlist, openProductDetail, setView } = useStore();

  if (wishlist.length === 0) {
    return (
      <div className="w-full min-h-[70vh] pt-32 pb-24 px-5 md:px-16 max-w-[1440px] mx-auto flex flex-col items-center justify-center text-center bg-[#080808] text-white">
        <div className="w-20 h-20 bg-[#141414] border border-white/10 flex items-center justify-center mb-6">
          <Heart className="w-10 h-10 text-white/40" />
        </div>
        <h2 className="font-display text-3xl md:text-5xl text-white font-black uppercase tracking-tight mb-3">
          Your Wishlist is Empty
        </h2>
        <p className="text-sm text-white/60 max-w-md mb-8 font-light">
          Save your favorite capsule and runway archive pieces to curate your bespoke private wishlist.
        </p>
        <button
          onClick={() => {
            setView('shop');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="bg-[#FF3E00] text-white px-8 py-4 font-sans text-xs uppercase tracking-widest font-black hover:bg-white hover:text-black transition-colors cursor-pointer"
        >
          Discover Collection
        </button>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen pt-28 pb-24 px-5 md:px-16 max-w-[1440px] mx-auto flex flex-col bg-[#080808] text-white">
      {/* Title */}
      <div className="border-b border-white/10 pb-6 mb-10">
        <span className="font-sans text-[11px] font-black tracking-[0.3em] uppercase text-[#FF3E00] mb-2 block font-mono-tech">
          // PRIVATE ARCHIVE
        </span>
        <h1 className="font-display text-4xl md:text-6xl text-white font-black uppercase tracking-tight">
          My Wishlist
        </h1>
        <p className="text-xs uppercase tracking-widest text-white/50 mt-2 font-mono-tech">
          {wishlist.length} CURATED ITEMS STORED
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
        {wishlist.map(({ product }) => (
          <div
            key={product.id}
            className="group flex flex-col bg-[#111111] border border-white/10 hover:border-white/30 transition-all duration-300 relative shadow-lg"
          >
            {/* Image Container */}
            <div
              onClick={() => openProductDetail(product)}
              className="relative aspect-3/4 overflow-hidden bg-[#181818] cursor-pointer"
            >
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out brightness-95"
              />
              {product.tag && (
                <span className="absolute top-3 left-3 bg-[#FF3E00] text-white text-[10px] uppercase font-sans tracking-widest font-black px-2.5 py-1">
                  {product.tag}
                </span>
              )}
            </div>

            {/* Remove from wishlist */}
            <button
              onClick={() => removeFromWishlist(product.id)}
              aria-label="Remove from wishlist"
              className="absolute top-3 right-3 p-2 bg-black/80 hover:bg-[#FF3E00] text-white/70 hover:text-white transition-colors active:scale-90 cursor-pointer"
            >
              <Trash2 className="w-4 h-4" />
            </button>

            {/* Content */}
            <div className="p-5 flex flex-col flex-1 justify-between">
              <div>
                <span className="text-[10px] font-sans font-black uppercase tracking-widest text-white/40 block mb-1">
                  {product.category}
                </span>
                <h3
                  onClick={() => openProductDetail(product)}
                  className="font-display text-base text-white font-bold hover:text-[#FF3E00] transition-colors cursor-pointer line-clamp-1 mb-1 uppercase"
                >
                  {product.name}
                </h3>
                <p className="text-xs text-white/50 mb-3 line-clamp-1 font-light">
                  {product.subtitle}
                </p>
                <span className="font-mono-tech text-base font-bold text-white block mb-4">
                  ${product.price.toFixed(2)}
                </span>
              </div>

              {/* Move to Bag CTA */}
              <button
                onClick={() => moveToCartFromWishlist(product)}
                className="w-full bg-[#FF3E00] text-white hover:bg-white hover:text-black py-3 text-xs font-sans uppercase tracking-widest font-black transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-md"
              >
                <span>Move to Bag</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
