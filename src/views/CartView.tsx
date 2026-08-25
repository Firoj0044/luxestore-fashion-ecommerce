import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { Trash2, ArrowRight, ShieldCheck, ShoppingBag, Truck } from 'lucide-react';

export const CartView: React.FC = () => {
  const { cart, removeFromCart, updateQuantity, subtotal, tax, total, setView, openProductDetail, showToast } =
    useStore();

  const [promoCode, setPromoCode] = useState('');
  const [promoApplied, setPromoApplied] = useState(false);
  const [discountAmount, setDiscountAmount] = useState(0);

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    if (promoCode.trim().toUpperCase() === 'LUXE20' || promoCode.trim().toUpperCase() === 'VIP10') {
      const discount = promoCode.trim().toUpperCase() === 'LUXE20' ? subtotal * 0.2 : subtotal * 0.1;
      setDiscountAmount(Number(discount.toFixed(2)));
      setPromoApplied(true);
      showToast(`Promo code "${promoCode.toUpperCase()}" applied!`);
    } else {
      showToast('Invalid promotional code. Try "LUXE20"');
    }
  };

  const finalTotal = Math.max(0, Number((total - discountAmount).toFixed(2)));

  if (cart.length === 0) {
    return (
      <div className="w-full min-h-[70vh] pt-32 pb-24 px-5 md:px-16 max-w-[1440px] mx-auto flex flex-col items-center justify-center text-center bg-[#080808] text-white">
        <div className="w-20 h-20 bg-[#121212] border border-white/10 rounded-full flex items-center justify-center mb-6">
          <ShoppingBag className="w-10 h-10 text-[#FF3E00]" />
        </div>
        <span className="font-sans text-[11px] font-black uppercase tracking-[0.3em] text-[#FF3E00] mb-2">
          ARCHIVE SELECTION
        </span>
        <h2 className="font-display text-3xl md:text-5xl text-white font-black uppercase tracking-tight mb-3">
          Your Bag is Empty
        </h2>
        <p className="text-sm text-white/60 max-w-md mb-8 font-light">
          Explore our autumn editorial and discover avant-garde silhouettes crafted with uncompromising precision.
        </p>
        <button
          onClick={() => {
            setView('shop');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="bg-[#FF3E00] text-white px-8 py-4 font-sans text-xs uppercase tracking-widest font-black hover:bg-white hover:text-black transition-colors cursor-pointer"
        >
          Explore Collection
        </button>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen pt-28 pb-24 px-5 md:px-16 max-w-[1440px] mx-auto flex flex-col bg-[#080808] text-white">
      {/* Title */}
      <div className="border-b border-white/10 pb-6 mb-8">
        <span className="font-sans text-[11px] font-black uppercase tracking-[0.3em] text-[#FF3E00] block mb-1">
          CHECKOUT DISPATCH
        </span>
        <h1 className="font-display text-4xl md:text-5xl text-white font-black uppercase tracking-tight">
          Shopping Bag
        </h1>
        <p className="text-xs uppercase tracking-widest text-white/50 mt-1 font-mono-tech">
          {cart.reduce((acc, item) => acc + item.quantity, 0)} ITEMS IN YOUR SELECTION
        </p>
      </div>

      {/* Free Shipping Banner */}
      <div className="bg-[#121212] text-white px-5 py-3.5 mb-8 flex items-center gap-3 text-xs uppercase font-sans tracking-wider font-bold border border-white/10">
        <Truck className="w-4 h-4 text-[#FF3E00]" />
        <span className="text-white/90">
          Complimentary Worldwide Express Courier Delivery applied to your order
        </span>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        {/* Left Column: Cart Items List */}
        <div className="lg:col-span-8 flex flex-col divide-y divide-white/10">
          {cart.map((item) => (
            <div key={item.id} className="py-6 flex flex-col sm:flex-row gap-6 items-start">
              {/* Product Thumbnail */}
              <div
                onClick={() => openProductDetail(item.product)}
                className="w-28 h-36 bg-[#141414] shrink-0 cursor-pointer overflow-hidden border border-white/10"
              >
                <img
                  src={item.product.images[0]}
                  alt={item.product.name}
                  className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-300 brightness-95"
                />
              </div>

              {/* Product Info */}
              <div className="flex-1 flex flex-col justify-between self-stretch">
                <div>
                  <div className="flex justify-between items-start">
                    <h3
                      onClick={() => openProductDetail(item.product)}
                      className="font-display text-lg text-white font-bold hover:text-[#FF3E00] transition-colors cursor-pointer"
                    >
                      {item.product.name}
                    </h3>
                    <span className="font-mono-tech text-base font-bold text-white">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </span>
                  </div>

                  <p className="text-xs text-white/60 mt-1 font-mono-tech">
                    TONE: <span className="font-bold text-white">{item.selectedColor.toUpperCase()}</span>
                    {item.selectedSize && (
                      <>
                        <span className="mx-2 text-white/30">•</span>
                        SIZE: <span className="font-bold text-white">{item.selectedSize}</span>
                      </>
                    )}
                  </p>

                  <p className="text-xs text-white/40 mt-0.5 font-mono-tech">
                    ${item.product.price.toFixed(2)} EACH
                  </p>
                </div>

                {/* Bottom Row: Quantity + Remove */}
                <div className="flex justify-between items-center mt-6 pt-4 border-t border-white/10">
                  {/* Quantity Controls */}
                  <div className="flex items-center border border-white/20 bg-[#121212] h-9 px-3">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="text-sm px-2 text-white/60 hover:text-white font-bold cursor-pointer"
                      aria-label="Decrease quantity"
                    >
                      -
                    </button>
                    <span className="px-3 font-mono-tech text-xs font-bold text-white">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="text-sm px-2 text-white/60 hover:text-white font-bold cursor-pointer"
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>

                  {/* Remove Button */}
                  <button
                    onClick={() => removeFromCart(item.id)}
                    className="text-white/40 hover:text-[#FF3E00] transition-colors p-2 flex items-center gap-1.5 text-xs font-sans uppercase tracking-widest font-black cursor-pointer"
                  >
                    <Trash2 className="w-4 h-4" />
                    <span>Remove</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Column: Order Summary */}
        <div className="lg:col-span-4 bg-[#111111] border border-white/10 p-6 lg:p-8 sticky top-28 shadow-xl">
          <h2 className="font-display text-xl text-white font-black uppercase tracking-tight border-b border-white/10 pb-4 mb-6">
            Order Summary
          </h2>

          <div className="space-y-3.5 text-sm mb-6 font-mono-tech">
            <div className="flex justify-between text-white/60">
              <span>SUBTOTAL</span>
              <span className="text-white font-bold">${subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between text-white/60">
              <span>COURIER DISPATCH</span>
              <span className="text-emerald-400 font-bold uppercase text-xs tracking-wider">
                COMPLIMENTARY
              </span>
            </div>

            <div className="flex justify-between text-white/60">
              <span>ESTIMATED TAX (9%)</span>
              <span className="text-white font-bold">${tax.toFixed(2)}</span>
            </div>

            {promoApplied && (
              <div className="flex justify-between text-[#FF3E00] font-bold">
                <span>PROMO DISCOUNT</span>
                <span>-${discountAmount.toFixed(2)}</span>
              </div>
            )}

            <div className="border-t border-white/10 pt-4 flex justify-between text-base font-bold text-white">
              <span>TOTAL</span>
              <span className="font-mono-tech text-2xl text-white">${finalTotal.toFixed(2)}</span>
            </div>
          </div>

          {/* Promo Code Input */}
          <form onSubmit={handleApplyPromo} className="mb-6">
            <label className="block text-[10px] font-sans uppercase tracking-widest text-white/40 mb-2 font-black">
              Promotional or Access Code
            </label>
            <div className="flex border border-white/20 bg-[#141414]">
              <input
                type="text"
                placeholder="e.g. LUXE20"
                value={promoCode}
                onChange={(e) => setPromoCode(e.target.value)}
                className="bg-transparent px-3 py-2.5 text-xs text-white uppercase tracking-wider outline-none flex-1 font-mono-tech placeholder-white/30"
              />
              <button
                type="submit"
                className="bg-white text-black px-4 text-xs uppercase tracking-widest font-black hover:bg-[#FF3E00] hover:text-white transition-colors cursor-pointer"
              >
                Apply
              </button>
            </div>
          </form>

          {/* Checkout Button */}
          <button
            id="btn-proceed-checkout"
            onClick={() => {
              setView('checkout');
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
            className="w-full bg-[#FF3E00] text-white hover:bg-white hover:text-black py-4 font-sans text-xs uppercase tracking-[0.25em] font-black transition-all shadow-xl flex items-center justify-center gap-2 active:scale-98 cursor-pointer"
          >
            <span>Proceed to Checkout</span>
            <ArrowRight className="w-4 h-4" />
          </button>

          {/* Security & Guarantees */}
          <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-center gap-2 text-xs text-white/40 font-mono-tech">
            <ShieldCheck className="w-4 h-4 text-[#FF3E00]" />
            <span>256-BIT SSL ENCRYPTED DISPATCH</span>
          </div>
        </div>
      </div>
    </div>
  );
};
