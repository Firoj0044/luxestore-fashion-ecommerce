import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { ShippingAddress } from '../types';
import { ShieldCheck, Lock, CheckCircle2, CreditCard } from 'lucide-react';

export const CheckoutView: React.FC = () => {
  const { cart, subtotal, tax, user, placeOrder, setView, showToast } = useStore();

  const [formData, setFormData] = useState<ShippingAddress>({
    firstName: user?.addresses[0]?.firstName || 'Eleanor',
    lastName: user?.addresses[0]?.lastName || 'Vance',
    email: user?.email || 'eleanor.vance@example.com',
    street: user?.addresses[0]?.street || '123 Luxury Lane',
    city: user?.addresses[0]?.city || 'New York',
    zip: user?.addresses[0]?.zip || '10001',
    country: 'United States'
  });

  const [deliveryOption, setDeliveryOption] = useState<'Standard' | 'Express'>('Standard');
  const [paymentMethod, setPaymentMethod] = useState<'card' | 'apple_pay'>('card');
  const [cardNumber, setCardNumber] = useState('•••• •••• •••• 4242');
  const [cardExpiry, setCardExpiry] = useState('12/28');
  const [cardCvc, setCardCvc] = useState('888');
  const [isProcessing, setIsProcessing] = useState(false);

  const shippingFee = deliveryOption === 'Express' ? 9.99 : 0;
  const finalTotal = Number((subtotal + tax + shippingFee).toFixed(2));

  const handleSubmitOrder = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.firstName || !formData.street || !formData.city || !formData.zip) {
      showToast('Please fill out all required shipping fields');
      return;
    }

    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
      placeOrder(formData, deliveryOption);
    }, 800);
  };

  return (
    <div className="w-full min-h-screen pt-28 pb-24 px-5 md:px-16 max-w-[1440px] mx-auto flex flex-col bg-[#080808] text-white">
      {/* Checkout Stepper */}
      <div className="flex items-center justify-center gap-3 md:gap-8 mb-12 border-b border-white/10 pb-8 font-mono-tech">
        <button
          onClick={() => setView('cart')}
          className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-white/50 hover:text-white cursor-pointer"
        >
          <span className="w-6 h-6 bg-[#181818] border border-white/20 text-white flex items-center justify-center text-xs">
            1
          </span>
          Bag
        </button>
        <span className="text-white/20">—</span>
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-black text-[#FF3E00]">
          <span className="w-6 h-6 bg-[#FF3E00] text-white flex items-center justify-center text-xs font-black">
            2
          </span>
          Shipping & Payment
        </div>
        <span className="text-white/20">—</span>
        <div className="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-white/30">
          <span className="w-6 h-6 bg-[#141414] border border-white/10 text-white/30 flex items-center justify-center text-xs">
            3
          </span>
          Confirmation
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        {/* Left Column: Forms */}
        <form onSubmit={handleSubmitOrder} className="lg:col-span-7 flex flex-col gap-10">
          {/* 1. Contact & Shipping Address */}
          <div>
            <span className="font-sans text-[11px] font-black uppercase tracking-[0.3em] text-[#FF3E00] block mb-1">
              SECTION 01
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-white font-black uppercase tracking-tight mb-6 flex items-center gap-3">
              <span>Shipping Destination</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-sans uppercase tracking-widest text-white/50 mb-1 font-black">
                  First Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.firstName}
                  onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                  className="w-full bg-[#121212] border border-white/20 px-3.5 py-3 text-sm text-white placeholder-white/30 focus:border-[#FF3E00] outline-none transition-colors"
                  placeholder="Eleanor"
                />
              </div>

              <div>
                <label className="block text-[10px] font-sans uppercase tracking-widest text-white/50 mb-1 font-black">
                  Last Name *
                </label>
                <input
                  type="text"
                  required
                  value={formData.lastName}
                  onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                  className="w-full bg-[#121212] border border-white/20 px-3.5 py-3 text-sm text-white placeholder-white/30 focus:border-[#FF3E00] outline-none transition-colors"
                  placeholder="Vance"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-[10px] font-sans uppercase tracking-widest text-white/50 mb-1 font-black">
                  Email Address (For Order Tracking) *
                </label>
                <input
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full bg-[#121212] border border-white/20 px-3.5 py-3 text-sm text-white placeholder-white/30 focus:border-[#FF3E00] outline-none transition-colors font-mono-tech"
                  placeholder="eleanor.vance@example.com"
                />
              </div>

              <div className="sm:col-span-2">
                <label className="block text-[10px] font-sans uppercase tracking-widest text-white/50 mb-1 font-black">
                  Street Address *
                </label>
                <input
                  type="text"
                  required
                  value={formData.street}
                  onChange={(e) => setFormData({ ...formData, street: e.target.value })}
                  className="w-full bg-[#121212] border border-white/20 px-3.5 py-3 text-sm text-white placeholder-white/30 focus:border-[#FF3E00] outline-none transition-colors"
                  placeholder="123 Luxury Lane, Apt 4B"
                />
              </div>

              <div>
                <label className="block text-[10px] font-sans uppercase tracking-widest text-white/50 mb-1 font-black">
                  City *
                </label>
                <input
                  type="text"
                  required
                  value={formData.city}
                  onChange={(e) => setFormData({ ...formData, city: e.target.value })}
                  className="w-full bg-[#121212] border border-white/20 px-3.5 py-3 text-sm text-white placeholder-white/30 focus:border-[#FF3E00] outline-none transition-colors"
                  placeholder="New York"
                />
              </div>

              <div>
                <label className="block text-[10px] font-sans uppercase tracking-widest text-white/50 mb-1 font-black">
                  Postal / Zip Code *
                </label>
                <input
                  type="text"
                  required
                  value={formData.zip}
                  onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
                  className="w-full bg-[#121212] border border-white/20 px-3.5 py-3 text-sm text-white placeholder-white/30 focus:border-[#FF3E00] outline-none transition-colors font-mono-tech"
                  placeholder="10001"
                />
              </div>
            </div>
          </div>

          {/* 2. Delivery Options */}
          <div className="pt-6 border-t border-white/10">
            <span className="font-sans text-[11px] font-black uppercase tracking-[0.3em] text-[#FF3E00] block mb-1">
              SECTION 02
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-white font-black uppercase tracking-tight mb-6">
              Delivery Method
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div
                onClick={() => setDeliveryOption('Standard')}
                className={`p-5 border cursor-pointer transition-all flex flex-col justify-between ${
                  deliveryOption === 'Standard'
                    ? 'border-[#FF3E00] bg-[#141414] shadow-lg'
                    : 'border-white/10 bg-[#111111] hover:border-white/30'
                }`}
              >
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-display text-base font-bold text-white uppercase">
                      Standard Express
                    </span>
                    <span className="text-xs uppercase tracking-wider font-bold text-emerald-400 font-mono-tech">
                      Complimentary
                    </span>
                  </div>
                  <p className="text-xs text-white/60 font-light">
                    Estimated delivery in 3-5 business days. Signature required.
                  </p>
                </div>
              </div>

              <div
                onClick={() => setDeliveryOption('Express')}
                className={`p-5 border cursor-pointer transition-all flex flex-col justify-between ${
                  deliveryOption === 'Express'
                    ? 'border-[#FF3E00] bg-[#141414] shadow-lg'
                    : 'border-white/10 bg-[#111111] hover:border-white/30'
                }`}
              >
                <div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-display text-base font-bold text-white uppercase">
                      White-Glove Courier
                    </span>
                    <span className="text-xs uppercase tracking-wider font-bold text-white font-mono-tech">
                      $9.99
                    </span>
                  </div>
                  <p className="text-xs text-white/60 font-light">
                    Next-day priority delivery with custom scheduled fitting appointment.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 3. Payment Method */}
          <div className="pt-6 border-t border-white/10">
            <span className="font-sans text-[11px] font-black uppercase tracking-[0.3em] text-[#FF3E00] block mb-1">
              SECTION 03
            </span>
            <h2 className="font-display text-2xl md:text-3xl text-white font-black uppercase tracking-tight mb-6 flex items-center justify-between">
              <span>Payment Details</span>
              <span className="flex items-center gap-1 text-xs text-emerald-400 font-mono-tech">
                <Lock className="w-3.5 h-3.5" /> 256-BIT ENCRYPTED
              </span>
            </h2>

            {/* Payment Tabs */}
            <div className="flex gap-4 mb-6">
              <button
                type="button"
                onClick={() => setPaymentMethod('card')}
                className={`flex-1 py-3.5 px-4 border text-xs font-sans uppercase tracking-widest font-black flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  paymentMethod === 'card'
                    ? 'border-[#FF3E00] bg-[#FF3E00] text-white shadow-md'
                    : 'border-white/15 bg-[#121212] text-white/70 hover:border-white/30'
                }`}
              >
                <CreditCard className="w-4 h-4" />
                Credit Card
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod('apple_pay')}
                className={`flex-1 py-3.5 px-4 border text-xs font-sans uppercase tracking-widest font-black flex items-center justify-center gap-2 transition-all cursor-pointer ${
                  paymentMethod === 'apple_pay'
                    ? 'border-[#FF3E00] bg-[#FF3E00] text-white shadow-md'
                    : 'border-white/15 bg-[#121212] text-white/70 hover:border-white/30'
                }`}
              >
                 Apple Pay / GPay
              </button>
            </div>

            {paymentMethod === 'card' ? (
              <div className="bg-[#121212] border border-white/10 p-5 space-y-4">
                <div>
                  <label className="block text-[10px] font-sans uppercase tracking-widest text-white/50 mb-1 font-black">
                    Card Number
                  </label>
                  <input
                    type="text"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    className="w-full bg-[#181818] px-3.5 py-3 border border-white/20 text-white font-mono-tech outline-none focus:border-[#FF3E00]"
                    placeholder="4242 •••• •••• 4242"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-[10px] font-sans uppercase tracking-widest text-white/50 mb-1 font-black">
                      Expiry Date
                    </label>
                    <input
                      type="text"
                      value={cardExpiry}
                      onChange={(e) => setCardExpiry(e.target.value)}
                      className="w-full bg-[#181818] px-3.5 py-3 border border-white/20 text-white font-mono-tech outline-none focus:border-[#FF3E00]"
                      placeholder="MM/YY"
                    />
                  </div>

                  <div>
                    <label className="block text-[10px] font-sans uppercase tracking-widest text-white/50 mb-1 font-black">
                      Security Code (CVC)
                    </label>
                    <input
                      type="password"
                      value={cardCvc}
                      onChange={(e) => setCardCvc(e.target.value)}
                      className="w-full bg-[#181818] px-3.5 py-3 border border-white/20 text-white font-mono-tech outline-none focus:border-[#FF3E00]"
                      placeholder="•••"
                    />
                  </div>
                </div>
              </div>
            ) : (
              <div className="p-6 bg-[#121212] border border-white/10 text-center text-sm text-white/70 font-light">
                Clicking "Place Order" will prompt your device's biometric Apple Pay / Google Wallet confirmation.
              </div>
            )}
          </div>

          {/* Place Order CTA Button */}
          <button
            type="submit"
            disabled={isProcessing}
            className="w-full bg-[#FF3E00] text-white hover:bg-white hover:text-black py-4 font-sans text-xs uppercase tracking-[0.25em] font-black transition-all shadow-xl flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50 active:scale-98"
          >
            {isProcessing ? (
              <span>Authorizing Transaction...</span>
            ) : (
              <>
                <Lock className="w-4 h-4" />
                <span>Place Order • ${finalTotal.toFixed(2)}</span>
              </>
            )}
          </button>
        </form>

        {/* Right Column: Order Summary & Review */}
        <div className="lg:col-span-5 bg-[#111111] border border-white/10 p-6 lg:p-8 sticky top-28 shadow-xl">
          <h3 className="font-display text-xl text-white font-black uppercase tracking-tight border-b border-white/10 pb-4 mb-6">
            Review Selection ({cart.length} Items)
          </h3>

          {/* Cart items preview */}
          <div className="space-y-4 max-h-72 overflow-y-auto mb-6 pr-2 no-scrollbar">
            {cart.map((item) => (
              <div key={item.id} className="flex gap-4 items-center">
                <img
                  src={item.product.images[0]}
                  alt={item.product.name}
                  className="w-14 h-18 object-cover bg-[#181818] shrink-0 border border-white/10 brightness-95"
                />
                <div className="flex-1 min-w-0">
                  <h4 className="font-display text-sm font-bold text-white truncate">
                    {item.product.name}
                  </h4>
                  <p className="text-xs text-white/50 font-mono-tech">
                    Qty: {item.quantity} • {item.selectedColor}
                  </p>
                </div>
                <span className="font-mono-tech text-sm font-bold text-white">
                  ${(item.product.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
          </div>

          <div className="border-t border-white/10 pt-4 space-y-2.5 text-sm font-mono-tech">
            <div className="flex justify-between text-white/60">
              <span>SUBTOTAL</span>
              <span className="text-white font-bold">${subtotal.toFixed(2)}</span>
            </div>

            <div className="flex justify-between text-white/60">
              <span>SHIPPING</span>
              <span className="text-emerald-400 font-bold uppercase text-xs">
                {shippingFee === 0 ? 'Complimentary' : `$${shippingFee.toFixed(2)}`}
              </span>
            </div>

            <div className="flex justify-between text-white/60">
              <span>SALES TAX (9%)</span>
              <span className="text-white font-bold">${tax.toFixed(2)}</span>
            </div>

            <div className="border-t border-white/10 pt-4 flex justify-between text-base font-bold text-white">
              <span>TOTAL DUE</span>
              <span className="font-mono-tech text-2xl text-white">${finalTotal.toFixed(2)}</span>
            </div>
          </div>

          <div className="mt-8 pt-4 border-t border-white/10 flex flex-col gap-2 text-xs text-white/50 font-mono-tech">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4 text-emerald-400" />
              <span>Complimentary 30-day returns & concierge exchange</span>
            </div>
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#FF3E00]" />
              <span>100% Certified authentic luxury materials</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
