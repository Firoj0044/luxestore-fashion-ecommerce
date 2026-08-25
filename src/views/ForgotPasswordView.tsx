import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { LOGO_URL } from '../data/products';
import { Mail, ArrowLeft, CheckCircle2 } from 'lucide-react';

export const ForgotPasswordView: React.FC = () => {
  const { setView, showToast } = useStore();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      showToast('Please enter your email address');
      return;
    }
    setIsSubmitted(true);
    showToast(`Password reset link sent to ${email}`);
  };

  return (
    <div className="w-full min-h-[85vh] pt-32 pb-24 px-5 md:px-16 max-w-md mx-auto flex flex-col justify-center bg-[#080808] text-white">
      <div className="bg-[#111111] border border-white/10 p-8 md:p-10 shadow-2xl">
        <div className="flex items-center gap-2 mb-8 justify-center">
          <img src={LOGO_URL} alt="LuxeStore" className="h-8 w-8 object-contain brightness-150" />
          <span className="font-display text-2xl font-black tracking-widest uppercase text-white">
            LUXESTORE
          </span>
        </div>

        {isSubmitted ? (
          <div className="text-center py-4">
            <div className="w-14 h-14 bg-[#FF3E00]/20 text-[#FF3E00] rounded-full flex items-center justify-center mx-auto mb-4">
              <CheckCircle2 className="w-8 h-8" />
            </div>
            <h2 className="font-display text-2xl text-white font-black uppercase mb-2">Check Your Email</h2>
            <p className="text-sm text-white/60 mb-6 font-light">
              We've dispatched secure instructions to reset your client password to{' '}
              <span className="font-bold text-white font-mono-tech">{email}</span>.
            </p>
            <button
              onClick={() => setView('login')}
              className="w-full bg-[#FF3E00] text-white py-4 text-xs font-sans uppercase tracking-widest font-black hover:bg-white hover:text-black transition-colors cursor-pointer"
            >
              Return to Sign In
            </button>
          </div>
        ) : (
          <div>
            <h1 className="font-display text-2xl md:text-3xl text-white font-black uppercase mb-2 text-center">
              Password Recovery
            </h1>
            <p className="text-xs text-white/60 text-center mb-8 font-mono-tech">
              Enter your registered client email address to receive a secure recovery link.
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label className="block text-[10px] font-sans uppercase tracking-widest text-white/50 mb-1 font-black">
                  Client Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full bg-[#141414] border border-white/20 px-3.5 py-3 pr-10 text-sm text-white placeholder-white/30 focus:border-[#FF3E00] outline-none font-mono-tech transition-colors"
                    placeholder="name@example.com"
                  />
                  <Mail className="w-4 h-4 text-white/40 absolute right-3 top-3.5 pointer-events-none" />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-[#FF3E00] text-white hover:bg-white hover:text-black py-4 font-sans text-xs uppercase tracking-[0.25em] font-black transition-all shadow-xl active:scale-98 cursor-pointer"
              >
                Send Recovery Instructions
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-white/10 text-center font-mono-tech">
              <button
                onClick={() => setView('login')}
                className="text-xs text-white/60 hover:text-white font-bold uppercase tracking-wider inline-flex items-center gap-1.5 cursor-pointer"
              >
                <ArrowLeft className="w-3.5 h-3.5" /> Back to Sign In
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
