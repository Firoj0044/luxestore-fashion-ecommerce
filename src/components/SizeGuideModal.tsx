import React from 'react';
import { X } from 'lucide-react';

interface SizeGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SizeGuideModal: React.FC<SizeGuideModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs">
      <div className="bg-[#121212] border border-white/10 text-white w-full max-w-2xl p-6 md:p-8 relative shadow-2xl max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors cursor-pointer"
        >
          <X className="w-6 h-6" />
        </button>

        <span className="font-sans text-[11px] font-black uppercase tracking-[0.25em] text-[#FF3E00] block mb-1">
          PRECISION SPECIFICATIONS
        </span>
        <h3 className="font-display text-2xl md:text-3xl font-black uppercase text-white mb-2">Size Guide & Fit</h3>
        <p className="text-sm text-white/60 mb-6 font-light">
          Measurements indicated in inches. Fits true to international luxury tailoring standards.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm border-collapse font-mono-tech">
            <thead>
              <tr className="border-b-2 border-white/20 font-sans text-xs uppercase tracking-widest text-[#FF3E00] font-black">
                <th className="py-3 px-2">Size</th>
                <th className="py-3 px-2">US</th>
                <th className="py-3 px-2">UK / AU</th>
                <th className="py-3 px-2">EU</th>
                <th className="py-3 px-2">Bust</th>
                <th className="py-3 px-2">Waist</th>
                <th className="py-3 px-2">Hips</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/10 text-white/80">
              <tr>
                <td className="py-3 px-2 font-bold text-white">XS</td>
                <td className="py-3 px-2">0 - 2</td>
                <td className="py-3 px-2">6</td>
                <td className="py-3 px-2">34</td>
                <td className="py-3 px-2">32 - 33"</td>
                <td className="py-3 px-2">24 - 25"</td>
                <td className="py-3 px-2">34 - 35"</td>
              </tr>
              <tr className="bg-white/5">
                <td className="py-3 px-2 font-bold text-white">S</td>
                <td className="py-3 px-2">4 - 6</td>
                <td className="py-3 px-2">8 - 10</td>
                <td className="py-3 px-2">36 - 38</td>
                <td className="py-3 px-2">34 - 35"</td>
                <td className="py-3 px-2">26 - 27"</td>
                <td className="py-3 px-2">36 - 37"</td>
              </tr>
              <tr>
                <td className="py-3 px-2 font-bold text-white">M</td>
                <td className="py-3 px-2">8 - 10</td>
                <td className="py-3 px-2">12</td>
                <td className="py-3 px-2">40</td>
                <td className="py-3 px-2">36 - 37"</td>
                <td className="py-3 px-2">28 - 29"</td>
                <td className="py-3 px-2">38 - 39"</td>
              </tr>
              <tr className="bg-white/5">
                <td className="py-3 px-2 font-bold text-white">L</td>
                <td className="py-3 px-2">12 - 14</td>
                <td className="py-3 px-2">14</td>
                <td className="py-3 px-2">42</td>
                <td className="py-3 px-2">38 - 40"</td>
                <td className="py-3 px-2">30 - 32"</td>
                <td className="py-3 px-2">40 - 42"</td>
              </tr>
              <tr>
                <td className="py-3 px-2 font-bold text-white">XL</td>
                <td className="py-3 px-2">16</td>
                <td className="py-3 px-2">16</td>
                <td className="py-3 px-2">44</td>
                <td className="py-3 px-2">41 - 43"</td>
                <td className="py-3 px-2">33 - 35"</td>
                <td className="py-3 px-2">43 - 45"</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-8 pt-4 border-t border-white/10 flex justify-end">
          <button
            onClick={onClose}
            className="bg-[#FF3E00] text-white px-6 py-2.5 font-sans text-xs uppercase tracking-widest font-black hover:bg-white hover:text-black transition-colors cursor-pointer"
          >
            Close Guide
          </button>
        </div>
      </div>
    </div>
  );
};
