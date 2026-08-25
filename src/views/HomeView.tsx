import React from 'react';
import { useStore } from '../context/StoreContext';
import { PRODUCTS, HERO_BG, CATEGORY_IMAGES } from '../data/products';
import { Heart, ArrowRight, Sparkles, ShieldCheck, Truck, RefreshCw } from 'lucide-react';

export const HomeView: React.FC = () => {
  const { setView, setSelectedCategory, openProductDetail, addToCart, toggleWishlist, isInWishlist } = useStore();

  const featuredProducts = PRODUCTS.slice(0, 4);

  const handleExploreCategory = (category: string) => {
    setSelectedCategory(category);
    setView('shop');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="w-full flex flex-col pt-20 bg-[#080808] text-white">
      {/* 1. Hero Section */}
      <section
        id="hero-banner"
        className="relative w-full min-h-[620px] md:min-h-[85vh] max-h-[920px] bg-cover bg-center flex items-center justify-center text-center overflow-hidden"
        style={{ backgroundImage: `url("${HERO_BG}")` }}
      >
        {/* Dark overlay with luxury brutalist gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-black/75 to-black/60 backdrop-blur-[0.5px]" />

        {/* Wireframe geometric backdrop decorative circle */}
        <div className="absolute w-[600px] h-[600px] rounded-full border border-white/10 pointer-events-none opacity-40 animate-pulse" />

        <div className="relative z-10 max-w-5xl mx-auto px-6 flex flex-col items-center">
          <span className="font-sans text-[11px] md:text-xs font-black tracking-[0.35em] uppercase text-[#FF3E00] mb-4 flex items-center gap-2">
            <Sparkles className="w-3.5 h-3.5 text-[#FF3E00]" />
            AW26 CAPSULE DROP // ISSUE 04
          </span>

          <h1 className="font-display text-5xl sm:text-7xl md:text-8xl lg:text-9xl text-white font-black tracking-tighter uppercase leading-[0.9] mb-6">
            AUTUMN <br className="hidden sm:inline" />
            <span className="stroke-text font-black">EDITORIAL</span>
          </h1>

          <p className="font-sans text-sm sm:text-base md:text-lg text-white/70 max-w-xl font-light tracking-wide mb-10 leading-relaxed">
            Discover the radical silhouette of avant-garde luxury. Architectural tailoring, pure silks, and precision hardware for the modern visionary.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
            <button
              id="btn-hero-explore"
              onClick={() => handleExploreCategory('All')}
              className="w-full sm:w-auto bg-[#FF3E00] text-white hover:bg-white hover:text-black border border-[#FF3E00] px-10 py-4.5 font-sans text-xs uppercase tracking-[0.25em] font-black transition-all duration-300 shadow-xl cursor-pointer"
            >
              Explore Collection
            </button>
            <button
              id="btn-hero-lookbook"
              onClick={() => handleExploreCategory('Women')}
              className="w-full sm:w-auto bg-white/5 hover:bg-white text-white hover:text-black backdrop-blur-md border border-white/30 px-10 py-4.5 font-sans text-xs uppercase tracking-[0.25em] font-black transition-all duration-300 cursor-pointer"
            >
              View Lookbook
            </button>
          </div>
        </div>
      </section>

      {/* 2. Scrolling Marquee Ticker */}
      <div className="w-full bg-[#0d0d0d] text-white py-3.5 overflow-hidden border-y border-white/10">
        <div className="animate-marquee whitespace-nowrap flex items-center gap-12 font-sans text-[11px] font-black tracking-[0.25em] uppercase">
          <span className="text-[#FF3E00]">• COMPLIMENTARY WORLDWIDE COURIER DELIVERY ON ORDERS OVER $500</span>
          <span>• PRIVATE ATELIER FITTING SESSIONS</span>
          <span className="text-[#FF3E00]">• CAPSULE RELEASE: THE MIDNIGHT CHARMEUSE</span>
          <span>• BESPOKE CRAFTSMANSHIP & LIFETIME WARRANTY</span>
          <span className="text-[#FF3E00]">• COMPLIMENTARY WORLDWIDE COURIER DELIVERY ON ORDERS OVER $500</span>
          <span>• PRIVATE ATELIER FITTING SESSIONS</span>
          <span className="text-[#FF3E00]">• CAPSULE RELEASE: THE MIDNIGHT CHARMEUSE</span>
          <span>• BESPOKE CRAFTSMANSHIP & LIFETIME WARRANTY</span>
        </div>
      </div>

      {/* 3. Curated Collections Bento Grid */}
      <section className="max-w-[1440px] mx-auto px-5 md:px-16 py-20 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="font-sans text-[11px] font-black tracking-[0.3em] uppercase text-[#FF3E00] mb-2 block">
              Curated Universes
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-white font-black uppercase tracking-tight">
              Distinctive Capsules
            </h2>
          </div>
          <button
            onClick={() => handleExploreCategory('All')}
            className="group flex items-center gap-2 text-xs font-sans uppercase tracking-[0.2em] font-black text-white hover:text-[#FF3E00] transition-colors mt-4 md:mt-0 cursor-pointer"
          >
            View All Categories
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Women's Line */}
          <div
            onClick={() => handleExploreCategory('Women')}
            className="group relative h-[500px] overflow-hidden bg-[#121212] border border-white/10 hover:border-white/30 cursor-pointer transition-all duration-300"
          >
            <img
              src={CATEGORY_IMAGES.women}
              alt="Women's Collection"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-black/40 to-transparent transition-opacity duration-300" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <span className="font-sans text-[10px] font-black tracking-[0.3em] uppercase text-[#FF3E00] block mb-2">
                Haute Ready-To-Wear
              </span>
              <h3 className="font-display text-2xl md:text-3xl font-black uppercase tracking-tight mb-3">
                Women's Capsule
              </h3>
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-black text-white group-hover:text-[#FF3E00] border-b border-white/40 pb-0.5 transition-colors">
                Discover Line <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

          {/* Card 2: Men's Tailoring */}
          <div
            onClick={() => handleExploreCategory('Men')}
            className="group relative h-[500px] overflow-hidden bg-[#121212] border border-white/10 hover:border-white/30 cursor-pointer transition-all duration-300"
          >
            <img
              src={CATEGORY_IMAGES.men}
              alt="Men's Tailoring"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-black/40 to-transparent transition-opacity duration-300" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <span className="font-sans text-[10px] font-black tracking-[0.3em] uppercase text-[#FF3E00] block mb-2">
                Bespoke & Outerwear
              </span>
              <h3 className="font-display text-2xl md:text-3xl font-black uppercase tracking-tight mb-3">
                Men's Tailoring
              </h3>
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-black text-white group-hover:text-[#FF3E00] border-b border-white/40 pb-0.5 transition-colors">
                Explore Tailoring <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

          {/* Card 3: Fine Accessories */}
          <div
            onClick={() => handleExploreCategory('Accessories')}
            className="group relative h-[500px] overflow-hidden bg-[#121212] border border-white/10 hover:border-white/30 cursor-pointer transition-all duration-300"
          >
            <img
              src={CATEGORY_IMAGES.accessories}
              alt="Fine Accessories"
              className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out brightness-90"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-black/40 to-transparent transition-opacity duration-300" />
            <div className="absolute bottom-8 left-8 right-8 text-white">
              <span className="font-sans text-[10px] font-black tracking-[0.3em] uppercase text-[#FF3E00] block mb-2">
                Bags & Hardware
              </span>
              <h3 className="font-display text-2xl md:text-3xl font-black uppercase tracking-tight mb-3">
                Fine Accessories
              </h3>
              <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest font-black text-white group-hover:text-[#FF3E00] border-b border-white/40 pb-0.5 transition-colors">
                Shop Pieces <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Editorial Spotlight: Silk Midi Dress */}
      <section className="bg-[#0e0e0e] text-white py-20 px-5 md:px-16 w-full border-y border-white/10">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src={PRODUCTS[0].images[0]}
                alt={PRODUCTS[0].name}
                className="w-full h-[420px] object-cover bg-neutral-900 border border-white/10"
              />
              <img
                src={PRODUCTS[0].images[1]}
                alt={PRODUCTS[0].name}
                className="w-full h-[420px] object-cover bg-neutral-900 border border-white/10"
              />
            </div>
            <div className="absolute -bottom-4 -right-4 bg-[#FF3E00] text-white px-4 py-2 font-sans text-xs uppercase tracking-widest font-black shadow-xl">
              Pure Mulberry Silk
            </div>
          </div>

          <div className="lg:col-span-5 flex flex-col items-start">
            <span className="font-sans text-[11px] font-black tracking-[0.3em] uppercase text-[#FF3E00] mb-3">
              Atelier Masterpiece
            </span>
            <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-tight leading-none mb-4">
              {PRODUCTS[0].name}
            </h2>
            <p className="text-2xl font-bold text-white mb-6 font-mono-tech">
              ${PRODUCTS[0].price.toFixed(2)}
              {PRODUCTS[0].originalPrice && (
                <span className="text-base line-through text-white/40 ml-3">
                  ${PRODUCTS[0].originalPrice.toFixed(2)}
                </span>
              )}
            </p>
            <p className="text-white/70 text-sm md:text-base leading-relaxed mb-8 font-light">
              {PRODUCTS[0].description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 w-full">
              <button
                onClick={() => openProductDetail(PRODUCTS[0])}
                className="flex-1 bg-white text-black hover:bg-[#FF3E00] hover:text-white px-8 py-4 font-sans text-xs uppercase tracking-widest font-black transition-colors cursor-pointer text-center"
              >
                View Full Details
              </button>
              <button
                onClick={() => addToCart(PRODUCTS[0])}
                className="bg-transparent border border-white/30 hover:border-[#FF3E00] hover:text-[#FF3E00] text-white px-8 py-4 font-sans text-xs uppercase tracking-widest font-black transition-colors cursor-pointer text-center"
              >
                Add to Bag
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Featured Items Grid */}
      <section className="max-w-[1440px] mx-auto px-5 md:px-16 py-20 w-full">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <span className="font-sans text-[11px] font-black tracking-[0.3em] uppercase text-[#FF3E00] mb-2 block">
              Editorial Selection
            </span>
            <h2 className="font-display text-3xl md:text-5xl text-white font-black uppercase tracking-tight">
              Featured Pieces
            </h2>
          </div>
          <button
            onClick={() => handleExploreCategory('All')}
            className="group flex items-center gap-2 text-xs font-sans uppercase tracking-[0.2em] font-black text-white hover:text-[#FF3E00] transition-colors mt-4 md:mt-0 cursor-pointer"
          >
            Browse All ({PRODUCTS.length} Styles)
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {featuredProducts.map((product) => {
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

                {/* Wishlist Button */}
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
                    <span className="font-mono-tech text-base font-bold text-white">
                      ${product.price.toFixed(2)}
                    </span>
                    <button
                      onClick={() => addToCart(product)}
                      className="text-xs font-sans uppercase tracking-widest font-black text-[#FF3E00] hover:text-white transition-colors flex items-center gap-1 cursor-pointer"
                    >
                      Add +
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* 6. Value Props Banner */}
      <section className="bg-[#0a0a0a] border-t border-white/10 py-14 px-5 md:px-16">
        <div className="max-w-[1440px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
            <Truck className="w-8 h-8 text-[#FF3E00] shrink-0" />
            <div>
              <h4 className="font-display text-base font-black uppercase text-white mb-1 tracking-wide">
                Complimentary Courier Delivery
              </h4>
              <p className="text-xs text-white/60 leading-relaxed font-light">
                Enjoy insured global express dispatch on all orders over $500 with secure signature release.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
            <ShieldCheck className="w-8 h-8 text-[#FF3E00] shrink-0" />
            <div>
              <h4 className="font-display text-base font-black uppercase text-white mb-1 tracking-wide">
                Guaranteed Provenance
              </h4>
              <p className="text-xs text-white/60 leading-relaxed font-light">
                Every creation is certified by master artisans with numbered physical certificates.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-4">
            <RefreshCw className="w-8 h-8 text-[#FF3E00] shrink-0" />
            <div>
              <h4 className="font-display text-base font-black uppercase text-white mb-1 tracking-wide">
                Atelier Exchange Service
              </h4>
              <p className="text-xs text-white/60 leading-relaxed font-light">
                Complimentary 30-day doorstep collection and sizing adjustments for flawless fit.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
