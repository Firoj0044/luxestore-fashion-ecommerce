import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { PRODUCTS } from '../data/products';
import { Search as SearchIcon, X, Heart } from 'lucide-react';

export const SearchView: React.FC = () => {
  const {
    searchQuery,
    setSearchQuery,
    openProductDetail,
    addToCart,
    toggleWishlist,
    isInWishlist
  } = useStore();

  const [activeFilter, setActiveFilter] = useState('All');
  const suggestions = ['Silk', 'Dress', 'Leather', 'Bag', 'Suit', 'Gold', 'Scarf', 'Mules'];

  const results = PRODUCTS.filter((p) => {
    const query = searchQuery.toLowerCase().trim();
    if (!query) return true;
    const matchesText =
      p.name.toLowerCase().includes(query) ||
      (p.subtitle && p.subtitle.toLowerCase().includes(query)) ||
      p.description.toLowerCase().includes(query) ||
      p.category.toLowerCase().includes(query);

    if (activeFilter !== 'All' && p.category !== activeFilter) {
      return false;
    }
    return matchesText;
  });

  return (
    <div className="w-full min-h-screen pt-28 pb-24 px-5 md:px-16 max-w-[1440px] mx-auto flex flex-col bg-[#080808] text-white">
      {/* Search Input Bar */}
      <div className="max-w-3xl mx-auto w-full mb-12">
        <div className="relative border-b-2 border-[#FF3E00] flex items-center pb-3">
          <SearchIcon className="w-6 h-6 text-[#FF3E00] mr-3 shrink-0" />
          <input
            type="text"
            autoFocus
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="SEARCH SILHOUETTES, MATERIALS, CAPSULES..."
            className="w-full bg-transparent text-xl md:text-2xl font-display font-black uppercase text-white placeholder-white/30 outline-none tracking-tight"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery('')}
              className="text-white/40 hover:text-white p-1 transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Quick Suggestion Pills */}
        <div className="flex items-center gap-2 mt-5 overflow-x-auto no-scrollbar">
          <span className="text-xs uppercase tracking-widest text-[#FF3E00] shrink-0 font-mono-tech font-bold">
            TRENDING:
          </span>
          {suggestions.map((item) => (
            <button
              key={item}
              onClick={() => setSearchQuery(item)}
              className="px-3.5 py-1 bg-[#141414] border border-white/10 hover:border-[#FF3E00] text-xs font-sans uppercase tracking-wider text-white/80 hover:text-[#FF3E00] whitespace-nowrap transition-colors cursor-pointer font-bold"
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      {/* Results Header */}
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-white/10 pb-4 mb-8 gap-4 font-mono-tech">
        <h2 className="font-display text-2xl md:text-3xl text-white font-black uppercase tracking-tight">
          {searchQuery ? `RESULTS FOR "${searchQuery.toUpperCase()}"` : 'ALL CAPSULE ARCHIVES'}
        </h2>
        <span className="text-xs uppercase tracking-widest text-[#FF3E00] font-bold">
          {results.length} PIECES LOCATED
        </span>
      </div>

      {/* Results Grid */}
      {results.length === 0 ? (
        <div className="py-20 text-center flex flex-col items-center">
          <p className="font-display text-2xl md:text-3xl text-white font-black uppercase mb-2">
            No Matching Styles Found
          </p>
          <p className="text-sm text-white/60 max-w-sm mb-6 font-light">
            We couldn't find matches for "{searchQuery}". Try exploring our trending capsule terms above.
          </p>
          <button
            onClick={() => setSearchQuery('')}
            className="bg-[#FF3E00] text-white px-6 py-3 font-sans text-xs uppercase tracking-widest font-black hover:bg-white hover:text-black transition-colors cursor-pointer"
          >
            Clear Search
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {results.map((product) => {
            const isSaved = isInWishlist(product.id);
            return (
              <div
                key={product.id}
                className="group flex flex-col bg-[#111111] border border-white/10 hover:border-white/30 transition-all duration-300 relative shadow-lg"
              >
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

                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleWishlist(product);
                  }}
                  aria-label="Save to Wishlist"
                  className="absolute top-3 right-3 p-2 bg-black/80 hover:bg-[#FF3E00] text-white transition-transform active:scale-90 cursor-pointer"
                >
                  <Heart
                    className={`w-4 h-4 ${
                      isSaved ? 'fill-[#FF3E00] stroke-[#FF3E00] text-[#FF3E00]' : 'stroke-[2]'
                    }`}
                  />
                </button>

                <div className="p-5 flex flex-col flex-1 justify-between">
                  <div>
                    <span className="text-[10px] font-sans uppercase tracking-widest text-white/40 block mb-1 font-black">
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
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-white/10 mt-2 font-mono-tech">
                    <span className="text-base font-bold text-white">
                      ${product.price.toFixed(2)}
                    </span>
                    <button
                      onClick={() => addToCart(product)}
                      className="text-xs font-sans uppercase tracking-widest font-black text-[#FF3E00] hover:text-white cursor-pointer"
                    >
                      ADD +
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};
