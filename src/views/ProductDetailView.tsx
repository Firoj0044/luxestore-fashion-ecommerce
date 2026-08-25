import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { PRODUCTS } from '../data/products';
import { Heart, Star, ChevronDown, ChevronUp, Ruler, Truck, ShieldCheck, ArrowRight } from 'lucide-react';
import { SizeGuideModal } from '../components/SizeGuideModal';

export const ProductDetailView: React.FC = () => {
  const {
    selectedProduct,
    openProductDetail,
    addToCart,
    toggleWishlist,
    isInWishlist,
    setView,
    setSelectedCategory
  } = useStore();

  const product = selectedProduct || PRODUCTS[0];
  const [selectedImageIndex, setSelectedImageIndex] = useState<number>(0);
  const [selectedColor, setSelectedColor] = useState<string>(product.colors[0]?.name || 'Default');
  const [selectedSize, setSelectedSize] = useState<string>(product.sizes[1] || product.sizes[0] || 'M');
  const [quantity, setQuantity] = useState<number>(1);
  const [isSizeGuideOpen, setIsSizeGuideOpen] = useState<boolean>(false);

  // Accordion states
  const [openAccordion, setOpenAccordion] = useState<{
    description: boolean;
    details: boolean;
    shipping: boolean;
  }>({
    description: true,
    details: false,
    shipping: false
  });

  const isSaved = isInWishlist(product.id);
  const relatedProducts = PRODUCTS.filter((p) => p.id !== product.id).slice(0, 4);

  const toggleAccordion = (key: 'description' | 'details' | 'shipping') => {
    setOpenAccordion((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="w-full min-h-screen pt-28 pb-24 px-5 md:px-16 max-w-[1440px] mx-auto flex flex-col bg-[#080808] text-white">
      {/* Breadcrumbs */}
      <nav className="flex items-center gap-2 text-[11px] uppercase tracking-widest text-white/40 mb-8 font-mono-tech">
        <button onClick={() => setView('home')} className="hover:text-[#FF3E00] transition-colors cursor-pointer">
          HOME
        </button>
        <span>/</span>
        <button
          onClick={() => {
            setSelectedCategory(product.category);
            setView('shop');
          }}
          className="hover:text-[#FF3E00] transition-colors cursor-pointer"
        >
          {product.category.toUpperCase()}
        </button>
        <span>/</span>
        <span className="text-white font-bold truncate max-w-[200px] sm:max-w-none">
          {product.name.toUpperCase()}
        </span>
      </nav>

      {/* Main PDP Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 mb-24">
        {/* Left Column: Gallery */}
        <div className="lg:col-span-7 flex flex-col gap-4">
          {/* Main Large Display Image */}
          <div className="relative aspect-3/4 w-full bg-[#141414] overflow-hidden border border-white/10">
            <img
              src={product.images[selectedImageIndex] || product.images[0]}
              alt={`${product.name} view ${selectedImageIndex + 1}`}
              className="w-full h-full object-cover object-top transition-opacity duration-300 brightness-95"
            />
            {product.tag && (
              <span className="absolute top-4 left-4 bg-[#FF3E00] text-white text-xs uppercase font-sans tracking-widest font-black px-3.5 py-1.5 shadow-xl">
                {product.tag}
              </span>
            )}
          </div>

          {/* Thumbnails Row */}
          {product.images.length > 1 && (
            <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
              {product.images.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setSelectedImageIndex(idx)}
                  className={`relative w-20 h-24 shrink-0 bg-[#141414] overflow-hidden border-2 transition-all cursor-pointer ${
                    selectedImageIndex === idx
                      ? 'border-[#FF3E00] opacity-100'
                      : 'border-white/10 opacity-50 hover:opacity-100'
                  }`}
                >
                  <img
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    className="w-full h-full object-cover object-top"
                  />
                </button>
              ))}
            </div>
          )}
        </div>

        {/* Right Column: Product Info & Purchase Controls */}
        <div className="lg:col-span-5 flex flex-col">
          {/* Tag & Rating */}
          <div className="flex items-center justify-between mb-2">
            <span className="font-sans text-[11px] font-black tracking-[0.3em] uppercase text-[#FF3E00]">
              {product.tag || 'AVANT-GARDE ARCHIVE'}
            </span>
            <div className="flex items-center gap-1.5 text-xs text-white">
              <div className="flex text-[#FF3E00]">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`w-3.5 h-3.5 ${
                      i < Math.floor(product.rating)
                        ? 'fill-[#FF3E00] stroke-[#FF3E00]'
                        : 'stroke-[#FF3E00]'
                    }`}
                  />
                ))}
              </div>
              <span className="font-mono-tech font-bold">{product.rating}</span>
              <span className="text-white/40 font-mono-tech">({product.reviewsCount})</span>
            </div>
          </div>

          {/* Title & Subtitle */}
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl text-white font-black uppercase leading-tight mb-2 tracking-tight">
            {product.name}
          </h1>
          <p className="text-sm text-white/60 mb-6 font-light">{product.subtitle}</p>

          {/* Price */}
          <div className="flex items-baseline gap-3 pb-6 border-b border-white/10 mb-6">
            <span className="font-mono-tech text-3xl font-bold text-white">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="font-mono-tech text-lg line-through text-white/40">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
            {product.originalPrice && (
              <span className="bg-[#FF3E00]/20 text-[#FF3E00] border border-[#FF3E00]/40 text-xs font-sans uppercase tracking-wider font-black px-2.5 py-0.5 ml-2">
                Save ${(product.originalPrice - product.price).toFixed(2)}
              </span>
            )}
          </div>

          {/* Color Selection */}
          <div className="mb-6">
            <div className="flex justify-between items-center mb-3">
              <span className="font-sans text-xs font-black uppercase tracking-widest text-white">
                Tone: <span className="font-normal text-white/60">{selectedColor}</span>
              </span>
            </div>
            <div className="flex items-center gap-3">
              {product.colors.map((c) => (
                <button
                  key={c.name}
                  onClick={() => setSelectedColor(c.name)}
                  aria-label={`Select color ${c.name}`}
                  className={`w-8 h-8 rounded-full border-2 p-0.5 transition-all cursor-pointer ${
                    selectedColor === c.name ? 'border-[#FF3E00] scale-110' : 'border-transparent hover:scale-105'
                  }`}
                >
                  <span
                    className="block w-full h-full rounded-full border border-white/20"
                    style={{ backgroundColor: c.hex }}
                  />
                </button>
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div className="mb-8">
            <div className="flex justify-between items-center mb-3">
              <span className="font-sans text-xs font-black uppercase tracking-widest text-white">
                Select Size: <span className="font-normal text-white/60">{selectedSize}</span>
              </span>
              <button
                onClick={() => setIsSizeGuideOpen(true)}
                className="flex items-center gap-1 text-xs uppercase tracking-wider text-[#FF3E00] hover:text-white font-black cursor-pointer transition-colors"
              >
                <Ruler className="w-3.5 h-3.5" />
                Size Guide
              </button>
            </div>
            <div className="grid grid-cols-5 gap-2">
              {product.sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setSelectedSize(s)}
                  className={`py-3 font-sans text-xs uppercase tracking-widest transition-all border cursor-pointer ${
                    selectedSize === s
                      ? 'bg-[#FF3E00] text-white border-[#FF3E00] font-black'
                      : 'bg-[#121212] text-white/80 border-white/15 hover:border-white/50'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity & CTA Actions */}
          <div className="flex flex-col gap-4 mb-8">
            <div className="flex items-center gap-4">
              {/* Quantity Selector */}
              <div className="flex items-center border border-white/20 bg-[#121212] h-13 px-4">
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="text-lg px-2 text-white/60 hover:text-white font-bold cursor-pointer"
                >
                  -
                </button>
                <span className="px-4 font-mono-tech text-sm font-bold text-white">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="text-lg px-2 text-white/60 hover:text-white font-bold cursor-pointer"
                >
                  +
                </button>
              </div>

              {/* Add to Bag Button */}
              <button
                onClick={() => addToCart(product, selectedColor, selectedSize, quantity)}
                className="flex-1 bg-[#FF3E00] text-white hover:bg-white hover:text-black h-13 font-sans text-xs uppercase tracking-[0.2em] font-black transition-all shadow-xl active:scale-98 cursor-pointer"
              >
                Add to Bag • ${(product.price * quantity).toFixed(2)}
              </button>

              {/* Wishlist Button */}
              <button
                onClick={() => toggleWishlist(product)}
                aria-label="Add to Wishlist"
                className="w-13 h-13 border border-white/20 bg-[#121212] flex items-center justify-center hover:border-white transition-colors cursor-pointer"
              >
                <Heart
                  className={`w-5 h-5 ${
                    isSaved ? 'fill-[#FF3E00] stroke-[#FF3E00] text-[#FF3E00]' : 'stroke-[1.5] text-white'
                  }`}
                />
              </button>
            </div>

            {/* In Stock Indicator */}
            <div className="flex items-center gap-2 text-xs text-emerald-400 font-mono-tech font-bold pt-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 inline-block animate-pulse" />
              IN STOCK — {product.stockCount} UNITS AVAILABLE FOR IMMEDIATE DISPATCH
            </div>
          </div>

          {/* Accordion Sections */}
          <div className="border-t border-white/10 divide-y divide-white/10">
            {/* Description */}
            <div className="py-4">
              <button
                onClick={() => toggleAccordion('description')}
                className="w-full flex justify-between items-center text-left font-sans text-xs uppercase tracking-widest font-black text-white cursor-pointer"
              >
                <span>Description & Cut</span>
                {openAccordion.description ? (
                  <ChevronUp className="w-4 h-4 text-[#FF3E00]" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-white/50" />
                )}
              </button>
              {openAccordion.description && (
                <p className="mt-3 text-sm text-white/70 leading-relaxed font-light">
                  {product.description}
                </p>
              )}
            </div>

            {/* Details & Care */}
            <div className="py-4">
              <button
                onClick={() => toggleAccordion('details')}
                className="w-full flex justify-between items-center text-left font-sans text-xs uppercase tracking-widest font-black text-white cursor-pointer"
              >
                <span>Material & Atelier Specs</span>
                {openAccordion.details ? (
                  <ChevronUp className="w-4 h-4 text-[#FF3E00]" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-white/50" />
                )}
              </button>
              {openAccordion.details && (
                <ul className="mt-3 space-y-2 text-sm text-white/70 list-disc list-inside font-light">
                  {product.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              )}
            </div>

            {/* Shipping & Returns */}
            <div className="py-4">
              <button
                onClick={() => toggleAccordion('shipping')}
                className="w-full flex justify-between items-center text-left font-sans text-xs uppercase tracking-widest font-black text-white cursor-pointer"
              >
                <span>Dispatch & Concierge Returns</span>
                {openAccordion.shipping ? (
                  <ChevronUp className="w-4 h-4 text-[#FF3E00]" />
                ) : (
                  <ChevronDown className="w-4 h-4 text-white/50" />
                )}
              </button>
              {openAccordion.shipping && (
                <div className="mt-3 text-sm text-white/70 leading-relaxed font-light space-y-2">
                  <p>{product.shippingInfo}</p>
                  <p>
                    Complimentary returns accepted within 30 days of receipt in original, unworn condition with seals intact.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* You May Also Like Section */}
      <section className="border-t border-white/10 pt-16">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-10">
          <div>
            <span className="font-sans text-[11px] font-black tracking-[0.3em] uppercase text-[#FF3E00] mb-1 block">
              Complementary Silhouettes
            </span>
            <h2 className="font-display text-2xl md:text-4xl text-white font-black uppercase tracking-tight">
              You May Also Like
            </h2>
          </div>
          <button
            onClick={() => {
              setSelectedCategory('All');
              setView('shop');
            }}
            className="group flex items-center gap-2 text-xs font-sans uppercase tracking-[0.2em] font-black text-white hover:text-[#FF3E00] transition-colors mt-4 md:mt-0 cursor-pointer"
          >
            Explore Complete Archive
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {relatedProducts.map((p) => {
            const isItemSaved = isInWishlist(p.id);
            return (
              <div
                key={p.id}
                className="group flex flex-col bg-[#111111] border border-white/10 hover:border-white/30 transition-all duration-300 relative shadow-lg"
              >
                <div
                  onClick={() => openProductDetail(p)}
                  className="relative aspect-3/4 overflow-hidden bg-[#181818] cursor-pointer"
                >
                  <img
                    src={p.images[0]}
                    alt={p.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700 ease-out brightness-95"
                  />
                </div>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleWishlist(p);
                  }}
                  aria-label="Save to Wishlist"
                  className="absolute top-3 right-3 p-2 bg-[#080808]/80 hover:bg-[#080808] text-white rounded-full border border-white/20 transition-transform active:scale-90 cursor-pointer"
                >
                  <Heart
                    className={`w-4 h-4 ${
                      isItemSaved ? 'fill-[#FF3E00] stroke-[#FF3E00] text-[#FF3E00]' : 'stroke-[1.75]'
                    }`}
                  />
                </button>
                <div className="p-4 flex flex-col justify-between flex-1">
                  <div>
                    <span className="text-[10px] font-sans uppercase tracking-[0.25em] text-white/40 block mb-1 font-black">
                      {p.category}
                    </span>
                    <h4
                      onClick={() => openProductDetail(p)}
                      className="font-display text-base text-white font-bold hover:text-[#FF3E00] transition-colors cursor-pointer line-clamp-1 mb-1"
                    >
                      {p.name}
                    </h4>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-white/10 mt-2">
                    <span className="font-mono-tech text-sm font-bold text-white">
                      ${p.price.toFixed(2)}
                    </span>
                    <button
                      onClick={() => addToCart(p)}
                      className="text-xs font-sans uppercase tracking-widest font-black text-[#FF3E00] hover:text-white cursor-pointer"
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

      {/* Size Guide Modal */}
      <SizeGuideModal isOpen={isSizeGuideOpen} onClose={() => setIsSizeGuideOpen(false)} />
    </div>
  );
};
