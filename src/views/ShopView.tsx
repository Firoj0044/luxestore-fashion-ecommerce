import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { PRODUCTS } from '../data/products';
import { Heart, SlidersHorizontal, ChevronDown } from 'lucide-react';

export const ShopView: React.FC = () => {
  const {
    selectedCategory,
    setSelectedCategory,
    openProductDetail,
    addToCart,
    toggleWishlist,
    isInWishlist,
    setView
  } = useStore();

  const [sortOption, setSortOption] = useState<'featured' | 'low-high' | 'high-low' | 'rating'>('featured');
  const [selectedGenderFilter, setSelectedGenderFilter] = useState<string>('All');
  const [inStockOnly, setInStockOnly] = useState<boolean>(false);

  const categories = ['All', 'Women', 'Men', 'Accessories', 'Footwear', 'Jewelry', 'Bags'];

  // Filter and sort products
  const filteredProducts = PRODUCTS.filter((product) => {
    // Category filter
    if (selectedCategory !== 'All' && selectedCategory !== 'New Arrivals' && selectedCategory !== 'Sale') {
      if (product.category !== selectedCategory) return false;
    }
    if (selectedCategory === 'Sale' && !product.originalPrice) {
      return false;
    }
    if (selectedCategory === 'New Arrivals' && !product.isNew) {
      return false;
    }
    // Gender filter
    if (selectedGenderFilter !== 'All') {
      if (product.gender !== selectedGenderFilter && product.gender !== 'Unisex') return false;
    }
    // Stock filter
    if (inStockOnly && !product.inStock) {
      return false;
    }
    return true;
  }).sort((a, b) => {
    if (sortOption === 'low-high') return a.price - b.price;
    if (sortOption === 'high-low') return b.price - a.price;
    if (sortOption === 'rating') return b.rating - a.rating;
    return 0; // featured default
  });

  return (
    <div className="w-full min-h-screen pt-28 pb-24 px-5 md:px-16 max-w-[1440px] mx-auto flex flex-col bg-[#080808] text-white">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-white/40 mb-6 font-mono-tech">
        <button onClick={() => setView('home')} className="hover:text-[#FF3E00] transition-colors cursor-pointer">
          HOME
        </button>
        <span>/</span>
        <span className="text-white font-bold">
          {selectedCategory === 'All' ? 'COMPLETE CATALOG' : selectedCategory.toUpperCase()}
        </span>
      </nav>

      {/* Page Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-white/10 pb-8 mb-10">
        <div>
          <span className="font-sans text-[11px] font-black tracking-[0.3em] uppercase text-[#FF3E00] mb-2 block">
            AW26 CAPSULE ARCHIVE
          </span>
          <h1 className="font-display text-4xl md:text-6xl text-white font-black uppercase tracking-tight">
            {selectedCategory === 'All'
              ? 'The Catalog'
              : selectedCategory === 'New Arrivals'
              ? 'New Arrivals'
              : `${selectedCategory} Collection`}
          </h1>
        </div>

        <p className="text-xs uppercase tracking-widest text-white/50 mt-4 md:mt-0 font-mono-tech font-bold">
          {filteredProducts.length} STYLES AVAILABLE
        </p>
      </div>

      {/* Category Pills & Filters Bar */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 mb-8">
        {/* Category Pills */}
        <div className="flex items-center gap-2 overflow-x-auto pb-2 w-full lg:w-auto no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-5 py-2 font-sans text-xs uppercase tracking-widest transition-all whitespace-nowrap border cursor-pointer ${
                selectedCategory === cat
                  ? 'bg-[#FF3E00] text-white border-[#FF3E00] font-black shadow-lg'
                  : 'bg-[#121212] text-white/70 border-white/15 hover:border-white/40 hover:text-white font-bold'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Filters & Sort Controls */}
        <div className="flex items-center gap-4 w-full lg:w-auto justify-between lg:justify-end">
          {/* Gender Filter */}
          <div className="flex items-center gap-2">
            <span className="text-[11px] uppercase tracking-widest text-white/40 hidden sm:inline font-mono-tech">
              GENDER:
            </span>
            <select
              value={selectedGenderFilter}
              onChange={(e) => setSelectedGenderFilter(e.target.value)}
              aria-label="Filter by gender"
              className="bg-[#121212] border border-white/20 px-3 py-2 text-xs font-sans uppercase tracking-widest text-white outline-none focus:border-[#FF3E00] cursor-pointer"
            >
              <option value="All" className="bg-[#121212] text-white">ALL GENDERS</option>
              <option value="Women" className="bg-[#121212] text-white">WOMEN</option>
              <option value="Men" className="bg-[#121212] text-white">MEN</option>
              <option value="Unisex" className="bg-[#121212] text-white">UNISEX</option>
            </select>
          </div>

          {/* Sort Dropdown */}
          <div className="flex items-center gap-2">
            <span className="text-[11px] uppercase tracking-widest text-white/40 hidden sm:inline font-mono-tech">
              SORT:
            </span>
            <div className="relative">
              <select
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value as any)}
                aria-label="Sort products"
                className="bg-[#121212] border border-white/20 px-3 py-2 text-xs font-sans uppercase tracking-widest text-white outline-none focus:border-[#FF3E00] cursor-pointer pr-8"
              >
                <option value="featured" className="bg-[#121212] text-white">FEATURED</option>
                <option value="low-high" className="bg-[#121212] text-white">PRICE: LOW TO HIGH</option>
                <option value="high-low" className="bg-[#121212] text-white">PRICE: HIGH TO LOW</option>
                <option value="rating" className="bg-[#121212] text-white">HIGHEST RATED</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none text-white" />
            </div>
          </div>
        </div>
      </div>

      {/* Product Grid */}
      {filteredProducts.length === 0 ? (
        <div className="py-24 text-center flex flex-col items-center justify-center border border-dashed border-white/20 bg-[#101010] p-8">
          <SlidersHorizontal className="w-10 h-10 text-white/40 mb-4" />
          <h3 className="font-display text-2xl text-white font-black uppercase mb-2">No Products Found</h3>
          <p className="text-sm text-white/60 max-w-md mb-6 font-light">
            We could not find any items matching your selected criteria. Try resetting your filter preferences.
          </p>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setSelectedGenderFilter('All');
              setInStockOnly(false);
            }}
            className="bg-[#FF3E00] text-white px-6 py-3 font-sans text-xs uppercase tracking-widest font-black hover:bg-white hover:text-black transition-colors cursor-pointer"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {filteredProducts.map((product) => {
            const isSaved = isInWishlist(product.id);
            return (
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

                {/* Wishlist Toggle Button */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleWishlist(product);
                  }}
                  aria-label="Save to Wishlist"
                  className="absolute top-3 right-3 p-2 bg-[#080808]/80 hover:bg-[#080808] text-white rounded-full border border-white/20 transition-transform active:scale-90 cursor-pointer"
                >
                  <Heart
                    className={`w-4 h-4 ${
                      isSaved ? 'fill-[#FF3E00] stroke-[#FF3E00] text-[#FF3E00]' : 'stroke-[1.75]'
                    }`}
                  />
                </button>

                {/* Content */}
                <div className="p-5 flex flex-col flex-1 justify-between">
                  <div>
                    <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-white/40 block mb-1 font-black">
                      {product.category}
                    </span>
                    <h3
                      onClick={() => openProductDetail(product)}
                      className="font-display text-lg text-white font-bold hover:text-[#FF3E00] transition-colors cursor-pointer line-clamp-1 mb-1"
                    >
                      {product.name}
                    </h3>
                    <p className="text-xs text-white/60 mb-3 line-clamp-1 font-light">
                      {product.subtitle}
                    </p>
                  </div>

                  <div className="flex items-center justify-between pt-3 border-t border-white/10 mt-2">
                    <div>
                      <span className="font-mono-tech text-base font-bold text-white">
                        ${product.price.toFixed(2)}
                      </span>
                      {product.originalPrice && (
                        <span className="text-xs line-through text-white/40 ml-2 font-mono-tech">
                          ${product.originalPrice.toFixed(2)}
                        </span>
                      )}
                    </div>
                    <button
                      onClick={() => addToCart(product)}
                      className="text-xs font-sans uppercase tracking-widest font-black text-[#FF3E00] hover:text-white transition-colors cursor-pointer"
                    >
                      Add +
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
