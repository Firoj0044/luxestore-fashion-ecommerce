import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { LOGO_URL, CATEGORY_IMAGES } from '../data/products';
import { Eye, EyeOff, ArrowRight } from 'lucide-react';

export const SignupView: React.FC = () => {
  const { login, setView, showToast } = useStore();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleSignupSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email || !firstName) {
      showToast('Please complete all required registration fields');
      return;
    }
    login(email, `${firstName} ${lastName}`.trim() || firstName);
  };

  return (
    <div className="w-full min-h-screen pt-20 flex bg-[#080808] text-white">
      {/* Left Column: High-Fashion Editorial Imagery */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-[#0a0a0a] overflow-hidden border-r border-white/10">
        <img
          src={CATEGORY_IMAGES.signupHero}
          alt="LuxeStore Membership"
          className="w-full h-full object-cover object-center filter brightness-75 contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="absolute bottom-16 left-16 right-16 text-white">
          <span className="font-sans text-xs font-black tracking-[0.4em] uppercase text-[#FF3E00] block mb-3 font-mono-tech">
            // PRIVÉ MEMBERSHIP
          </span>
          <h2 className="font-display text-5xl leading-tight mb-4 font-black uppercase tracking-tight">
            An Invitation to <br />Perfection
          </h2>
          <p className="text-sm text-white/70 font-light max-w-md leading-relaxed">
            Create an account to receive complimentary express delivery on all orders, private archive appointments, and exclusive access to seasonal capsules.
          </p>
        </div>
      </div>

      {/* Right Column: Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-16 bg-[#0c0c0c]">
        <div className="max-w-md w-full flex flex-col">
          <div className="flex items-center gap-2 mb-8">
            <img src={LOGO_URL} alt="LuxeStore" className="h-8 w-8 object-contain brightness-150" />
            <span className="font-display text-2xl font-black tracking-widest uppercase text-white">
              LUXESTORE
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl text-white font-black uppercase tracking-tight mb-2">
            Create Account
          </h1>
          <p className="text-sm text-white/60 mb-8 font-light">
            Join LuxeStore Privé for curated fashion privileges.
          </p>

          <form onSubmit={handleSignupSubmit} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-[10px] font-sans uppercase tracking-widest text-white/50 mb-1 font-black">
                  First Name *
                </label>
                <input
                  type="text"
                  required
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                  className="w-full bg-[#141414] border border-white/20 px-3.5 py-3 text-sm text-white placeholder-white/30 focus:border-[#FF3E00] outline-none font-bold transition-colors"
                  placeholder="Eleanor"
                />
              </div>

              <div>
                <label className="block text-[10px] font-sans uppercase tracking-widest text-white/50 mb-1 font-black">
                  Last Name
                </label>
                <input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                  className="w-full bg-[#141414] border border-white/20 px-3.5 py-3 text-sm text-white placeholder-white/30 focus:border-[#FF3E00] outline-none font-bold transition-colors"
                  placeholder="Vance"
                />
              </div>
            </div>

            <div>
              <label className="block text-[10px] font-sans uppercase tracking-widest text-white/50 mb-1 font-black">
                Email Address *
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#141414] border border-white/20 px-3.5 py-3 text-sm text-white placeholder-white/30 focus:border-[#FF3E00] outline-none font-mono-tech transition-colors"
                placeholder="name@example.com"
              />
            </div>

            <div>
              <label className="block text-[10px] font-sans uppercase tracking-widest text-white/50 mb-1 font-black">
                Password *
              </label>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-[#141414] border border-white/20 px-3.5 py-3 pr-10 text-sm text-white placeholder-white/30 focus:border-[#FF3E00] outline-none font-mono-tech transition-colors"
                  placeholder="Min. 8 characters"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3.5 text-white/40 hover:text-white cursor-pointer"
                >
                  {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                </button>
              </div>
            </div>

            <div className="flex items-start gap-2 pt-2">
              <input
                id="terms"
                type="checkbox"
                required
                defaultChecked
                className="w-4 h-4 accent-[#FF3E00] cursor-pointer mt-0.5"
              />
              <label htmlFor="terms" className="text-xs text-white/60 leading-relaxed font-mono-tech">
                I agree to the <span className="underline text-white">Terms of Service</span> and acknowledge the Privacy Policy.
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-[#FF3E00] text-white hover:bg-white hover:text-black py-4 font-sans text-xs uppercase tracking-[0.25em] font-black transition-all shadow-xl flex items-center justify-center gap-2 active:scale-98 cursor-pointer mt-4"
            >
              <span>Join LuxeStore Privé</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          <div className="text-center text-xs text-white/60 mt-8 pt-6 border-t border-white/10 font-mono-tech">
            Already have an account?{' '}
            <button
              onClick={() => setView('login')}
              className="font-black text-[#FF3E00] hover:underline uppercase tracking-wider ml-1 cursor-pointer"
            >
              Sign In
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
