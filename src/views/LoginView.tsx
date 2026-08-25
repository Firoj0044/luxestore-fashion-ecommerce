import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { LOGO_URL, CATEGORY_IMAGES } from '../data/products';
import { Eye, EyeOff, Lock, Mail, ArrowRight } from 'lucide-react';

export const LoginView: React.FC = () => {
  const { login, setView, showToast } = useStore();
  const [email, setEmail] = useState('eleanor.vance@example.com');
  const [password, setPassword] = useState('••••••••••••');
  const [showPassword, setShowPassword] = useState(false);

  const handleLoginSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      showToast('Please enter your email');
      return;
    }
    login(email, email.split('@')[0] || 'Eleanor Vance');
  };

  return (
    <div className="w-full min-h-screen pt-20 flex bg-[#080808] text-white">
      {/* Left Column: High-Fashion Editorial Imagery */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-[#0a0a0a] overflow-hidden border-r border-white/10">
        <img
          src={CATEGORY_IMAGES.loginHero}
          alt="LuxeStore Editorial"
          className="w-full h-full object-cover object-center filter brightness-75 contrast-125"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
        <div className="absolute bottom-16 left-16 right-16 text-white">
          <span className="font-sans text-xs font-black tracking-[0.4em] uppercase text-[#FF3E00] block mb-3 font-mono-tech">
            // PRIVÉ ACCESS
          </span>
          <h2 className="font-display text-5xl leading-tight mb-4 font-black uppercase tracking-tight">
            The Pinnacle of <br />Quiet Luxury
          </h2>
          <p className="text-sm text-white/70 font-light max-w-md leading-relaxed">
            Sign in to access your bespoke capsule curation, runway archives, and dedicated styling concierge.
          </p>
        </div>
      </div>

      {/* Right Column: Clean Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-8 sm:p-16 bg-[#0c0c0c]">
        <div className="max-w-md w-full flex flex-col">
          {/* Logo */}
          <div className="flex items-center gap-2 mb-8">
            <img src={LOGO_URL} alt="LuxeStore" className="h-8 w-8 object-contain brightness-150" />
            <span className="font-display text-2xl font-black tracking-widest uppercase text-white">
              LUXESTORE
            </span>
          </div>

          <h1 className="font-display text-3xl sm:text-4xl text-white font-black uppercase tracking-tight mb-2">
            Welcome Back
          </h1>
          <p className="text-sm text-white/60 mb-8 font-light">
            Please enter your client credentials to authenticate.
          </p>

          {/* Form */}
          <form onSubmit={handleLoginSubmit} className="space-y-6">
            <div>
              <label className="block text-[10px] font-sans uppercase tracking-widest text-white/50 mb-1 font-black">
                Email Address
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

            <div>
              <div className="flex justify-between items-center mb-1">
                <label className="block text-[10px] font-sans uppercase tracking-widest text-white/50 font-black">
                  Password
                </label>
                <button
                  type="button"
                  onClick={() => setView('forgot-password')}
                  className="text-xs text-[#FF3E00] hover:underline font-mono-tech cursor-pointer"
                >
                  Forgot Password?
                </button>
              </div>
              <div className="relative">
                <input
                  type={showPassword ? 'text' : 'password'}
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full bg-[#141414] border border-white/20 px-3.5 py-3 pr-10 text-sm text-white placeholder-white/30 focus:border-[#FF3E00] outline-none font-mono-tech transition-colors"
                  placeholder="••••••••"
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

            <div className="flex items-center gap-2 pt-2">
              <input
                id="remember-me"
                type="checkbox"
                defaultChecked
                className="w-4 h-4 accent-[#FF3E00] cursor-pointer"
              />
              <label htmlFor="remember-me" className="text-xs text-white/70 cursor-pointer font-mono-tech">
                Keep me signed in on this device
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-[#FF3E00] text-white hover:bg-white hover:text-black py-4 font-sans text-xs uppercase tracking-[0.25em] font-black transition-all shadow-xl flex items-center justify-center gap-2 active:scale-98 cursor-pointer"
            >
              <span>Authenticate</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </form>

          {/* Quick Demo Login */}
          <div className="my-6 pt-6 border-t border-white/10 flex flex-col items-center">
            <span className="text-xs text-white/40 uppercase tracking-wider mb-3 font-mono-tech">
              INSTANT DEMO ACCESS
            </span>
            <button
              type="button"
              onClick={() => login('eleanor.vance@example.com', 'Eleanor Vance')}
              className="w-full bg-[#181818] text-[#FF3E00] border border-[#FF3E00]/40 hover:bg-[#FF3E00] hover:text-white py-3 text-xs font-sans uppercase tracking-widest font-black transition-colors cursor-pointer"
            >
              ★ Fast Demo VIP Login (Eleanor Vance)
            </button>
          </div>

          {/* Register Link */}
          <div className="text-center text-xs text-white/60 mt-2 font-mono-tech">
            Don't have a private account?{' '}
            <button
              onClick={() => setView('signup')}
              className="font-black text-[#FF3E00] hover:underline uppercase tracking-wider ml-1 cursor-pointer"
            >
              Create Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
