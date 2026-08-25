import React, { useEffect } from 'react';
import { useStore } from '../context/StoreContext';
import confetti from 'canvas-confetti';
import { Check, Package, Truck, ArrowRight, Home } from 'lucide-react';

export const OrderConfirmationView: React.FC = () => {
  const { currentOrder, orders, setView } = useStore();
  const order = currentOrder || orders[0];

  useEffect(() => {
    // Launch celebratory luxury gold & black confetti
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#D4BC7B', '#000000', '#FFFFFF', '#C5A059']
      });
    } catch {
      // Fallback gracefully
    }
  }, []);

  if (!order) {
    return (
      <div className="pt-32 pb-24 text-center bg-[#080808] text-white min-h-screen">
        <h2 className="font-display text-3xl font-black uppercase mb-4">No order found</h2>
        <button
          onClick={() => setView('home')}
          className="bg-[#FF3E00] text-white px-6 py-3 text-xs uppercase font-sans font-black tracking-widest hover:bg-white hover:text-black transition-colors cursor-pointer"
        >
          Return Home
        </button>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen pt-28 pb-24 px-5 md:px-16 max-w-4xl mx-auto flex flex-col items-center bg-[#080808] text-white">
      {/* Success Badge */}
      <div className="w-16 h-16 rounded-full bg-[#FF3E00] text-white flex items-center justify-center mb-6 shadow-xl">
        <Check className="w-8 h-8 stroke-[3]" />
      </div>

      <span className="font-sans text-xs font-black tracking-[0.3em] uppercase text-[#FF3E00] mb-2">
        DISPATCH AUTHORIZED
      </span>

      <h1 className="font-display text-3xl sm:text-5xl text-white font-black uppercase text-center mb-3 tracking-tight">
        Thank You for Your Order
      </h1>

      <p className="text-sm text-white/60 text-center max-w-lg mb-8 leading-relaxed font-light">
        A confirmation email and tracking link have been dispatched to{' '}
        <span className="font-bold text-white font-mono-tech">{order.shippingAddress.email}</span>.
      </p>

      {/* Order Info Card */}
      <div className="w-full bg-[#111111] border border-white/10 p-6 sm:p-10 shadow-2xl mb-8">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-white/10 pb-6 mb-6 gap-4 font-mono-tech">
          <div>
            <span className="text-xs uppercase tracking-widest text-white/40 block">ORDER REFERENCE</span>
            <span className="font-display text-2xl font-bold text-white tracking-wider">{order.id}</span>
          </div>
          <div className="text-left sm:text-right">
            <span className="text-xs uppercase tracking-widest text-white/40 block">ESTIMATED DELIVERY</span>
            <span className="font-mono-tech text-base font-bold text-[#FF3E00]">{order.estimatedDelivery}</span>
          </div>
        </div>

        {/* Tracking Timeline */}
        <div className="mb-8">
          <span className="text-xs font-sans uppercase tracking-widest text-white/40 block mb-4 font-black">
            Order Status
          </span>
          <div className="grid grid-cols-3 gap-2 relative font-mono-tech">
            <div className="flex flex-col items-center text-center">
              <div className="w-8 h-8 rounded-full bg-[#FF3E00] text-white flex items-center justify-center text-xs mb-2 shadow-md">
                <Check className="w-4 h-4" />
              </div>
              <span className="text-xs font-black text-white uppercase tracking-wider">Confirmed</span>
              <span className="text-[10px] text-white/40">Today</span>
            </div>

            <div className="flex flex-col items-center text-center">
              <div className="w-8 h-8 rounded-full bg-white text-black flex items-center justify-center text-xs mb-2 shadow-md font-bold">
                <Package className="w-4 h-4" />
              </div>
              <span className="text-xs font-black text-white uppercase tracking-wider">Preparing</span>
              <span className="text-[10px] text-white/40">At Atelier</span>
            </div>

            <div className="flex flex-col items-center text-center opacity-40">
              <div className="w-8 h-8 rounded-full bg-[#1e1e1e] text-white/50 flex items-center justify-center text-xs mb-2 border border-white/20">
                <Truck className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-white uppercase tracking-wider">Dispatched</span>
              <span className="text-[10px] text-white/40">{order.estimatedDelivery}</span>
            </div>
          </div>
        </div>

        {/* Items purchased */}
        <div className="border-t border-white/10 pt-6 mb-6">
          <span className="text-xs font-sans uppercase tracking-widest text-white/40 block mb-4 font-black">
            Purchased Pieces ({order.items.length})
          </span>
          <div className="space-y-4">
            {order.items.map((item, idx) => (
              <div key={idx} className="flex justify-between items-center">
                <div className="flex items-center gap-4">
                  <img
                    src={item.product.images[0]}
                    alt={item.product.name}
                    className="w-12 h-16 object-cover bg-[#181818] border border-white/10 brightness-95"
                  />
                  <div>
                    <h4 className="font-display text-sm font-bold text-white">{item.product.name}</h4>
                    <p className="text-xs text-white/40 font-mono-tech">
                      Qty: {item.quantity} • {item.selectedColor} • {item.selectedSize}
                    </p>
                  </div>
                </div>
                <span className="font-mono-tech text-sm font-bold text-white">
                  ${(item.product.price * item.quantity).toFixed(2)}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Financial Breakdown */}
        <div className="border-t border-white/10 pt-4 space-y-2 text-sm font-mono-tech">
          <div className="flex justify-between text-white/60">
            <span>SUBTOTAL</span>
            <span>${order.subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between text-white/60">
            <span>DELIVERY</span>
            <span className="text-emerald-400">
              {order.shippingFee === 0 ? 'COMPLIMENTARY' : `$${order.shippingFee.toFixed(2)}`}
            </span>
          </div>
          <div className="flex justify-between text-white/60">
            <span>SALES TAX</span>
            <span>${order.tax.toFixed(2)}</span>
          </div>
          <div className="border-t border-white/10 pt-3 flex justify-between font-bold text-white text-base">
            <span>TOTAL PAID</span>
            <span className="font-mono-tech text-2xl text-white">${order.total.toFixed(2)}</span>
          </div>
        </div>

        {/* Shipping address details */}
        <div className="border-t border-white/10 pt-6 mt-6 text-xs text-white/60 font-mono-tech">
          <span className="font-sans uppercase tracking-widest text-[#FF3E00] block mb-1 font-black">
            DELIVERY DESTINATION
          </span>
          <p className="font-bold text-white">
            {order.shippingAddress.firstName} {order.shippingAddress.lastName}
          </p>
          <p>{order.shippingAddress.street}</p>
          <p>
            {order.shippingAddress.city}, {order.shippingAddress.zip}
          </p>
        </div>
      </div>

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
        <button
          onClick={() => {
            setView('profile');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="bg-[#FF3E00] text-white hover:bg-white hover:text-black px-8 py-4 font-sans text-xs uppercase tracking-widest font-black transition-colors flex items-center justify-center gap-2 cursor-pointer shadow-xl"
        >
          <span>View in Order History</span>
          <ArrowRight className="w-4 h-4" />
        </button>

        <button
          onClick={() => {
            setView('home');
            window.scrollTo({ top: 0, behavior: 'smooth' });
          }}
          className="bg-[#121212] border border-white/20 text-white hover:border-white px-8 py-4 font-sans text-xs uppercase tracking-widest font-black transition-colors flex items-center justify-center gap-2 cursor-pointer"
        >
          <Home className="w-4 h-4" />
          <span>Continue Shopping</span>
        </button>
      </div>
    </div>
  );
};
