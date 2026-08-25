import React from 'react';
import { useStore } from '../context/StoreContext';
import { Sparkles } from 'lucide-react';

export const NotificationToast: React.FC = () => {
  const { toastMessage } = useStore();

  if (!toastMessage) return null;

  return (
    <div className="fixed top-24 right-4 md:right-8 z-50 animate-bounce-in max-w-sm">
      <div className="bg-[#121212] text-white px-5 py-3.5 shadow-2xl border border-white/20 flex items-center gap-3 backdrop-blur-md">
        <Sparkles className="w-4 h-4 text-[#FF3E00] shrink-0" />
        <span className="font-sans text-xs tracking-widest uppercase text-white font-bold">
          {toastMessage}
        </span>
      </div>
    </div>
  );
};
