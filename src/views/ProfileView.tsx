import React, { useState } from 'react';
import { useStore } from '../context/StoreContext';
import { User, Package, MapPin, Settings, LogOut, Check, Clock, ChevronRight, Plus } from 'lucide-react';
import { CATEGORY_IMAGES } from '../data/products';

export const ProfileView: React.FC = () => {
  const { user, orders, logout, updateProfile, setView, showToast } = useStore();

  const [activeTab, setActiveTab] = useState<'orders' | 'addresses' | 'settings'>('orders');
  const [isEditingProfile, setIsEditingProfile] = useState(false);
  const [editName, setEditName] = useState(user?.name || 'Eleanor Vance');
  const [editPhone, setEditPhone] = useState(user?.phone || '+1 (555) 234-8901');

  if (!user) {
    return (
      <div className="w-full min-h-[70vh] pt-32 pb-24 px-5 md:px-16 max-w-md mx-auto flex flex-col items-center justify-center text-center bg-[#080808] text-white">
        <div className="w-20 h-20 bg-[#141414] border border-white/10 flex items-center justify-center mb-6">
          <User className="w-10 h-10 text-white/40" />
        </div>
        <h2 className="font-display text-3xl text-white font-black uppercase mb-3">
          Client Identification Required
        </h2>
        <p className="text-sm text-white/60 mb-8 font-light">
          Access your order tracking, archive wishlists, and personalized luxury privileges.
        </p>
        <div className="flex gap-4 w-full">
          <button
            onClick={() => setView('login')}
            className="flex-1 bg-[#FF3E00] text-white py-4 font-sans text-xs uppercase tracking-widest font-black hover:bg-white hover:text-black transition-colors cursor-pointer"
          >
            Sign In
          </button>
          <button
            onClick={() => setView('signup')}
            className="flex-1 border border-white/20 text-white py-4 font-sans text-xs uppercase tracking-widest font-black hover:border-white transition-colors cursor-pointer"
          >
            Register
          </button>
        </div>
      </div>
    );
  }

  const handleSaveProfile = (e: React.FormEvent) => {
    e.preventDefault();
    updateProfile({ name: editName, phone: editPhone });
    setIsEditingProfile(false);
  };

  return (
    <div className="w-full min-h-screen pt-28 pb-24 px-5 md:px-16 max-w-[1440px] mx-auto flex flex-col bg-[#080808] text-white">
      {/* Profile Header */}
      <div className="bg-[#111111] border border-white/10 p-6 md:p-10 mb-10 shadow-xl">
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 text-center sm:text-left">
            <div className="relative">
              <img
                src={user.avatar || CATEGORY_IMAGES.userAvatar}
                alt={user.name}
                className="w-24 h-24 object-cover border-2 border-[#FF3E00] shadow-md"
              />
              <span className="absolute bottom-0 right-0 w-6 h-6 bg-[#FF3E00] text-white flex items-center justify-center text-xs font-black">
                ★
              </span>
            </div>

            <div>
              <div className="flex items-center justify-center sm:justify-start gap-3 mb-1">
                <h1 className="font-display text-2xl md:text-3xl text-white font-black uppercase">
                  {user.name}
                </h1>
                <span className="bg-[#FF3E00] text-white text-[10px] font-sans uppercase tracking-widest font-black px-2.5 py-1">
                  PRIVÉ VIP
                </span>
              </div>
              <p className="text-sm text-white/60 mb-2 font-mono-tech">{user.email}</p>
              <p className="text-xs text-white/40 font-mono-tech">ID: #LX-VIP-09281 • MEMBER ARCHIVE 2023</p>
            </div>
          </div>

          <div className="flex gap-3">
            <button
              onClick={() => setIsEditingProfile(!isEditingProfile)}
              className="border border-white/20 hover:border-white px-4 py-2 text-xs font-sans uppercase tracking-widest text-white transition-colors cursor-pointer font-black"
            >
              {isEditingProfile ? 'Cancel' : 'Edit Profile'}
            </button>
            <button
              onClick={logout}
              className="border border-red-500/40 hover:border-red-500 px-4 py-2 text-xs font-sans uppercase tracking-widest text-red-400 hover:text-red-300 transition-colors flex items-center gap-1.5 cursor-pointer font-black"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Sign Out</span>
            </button>
          </div>
        </div>

        {/* Edit profile drawer/form */}
        {isEditingProfile && (
          <form
            onSubmit={handleSaveProfile}
            className="mt-8 pt-8 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4 max-w-xl"
          >
            <div>
              <label className="block text-[10px] font-sans uppercase tracking-widest text-white/50 mb-1 font-black">
                Full Name
              </label>
              <input
                type="text"
                value={editName}
                onChange={(e) => setEditName(e.target.value)}
                className="w-full bg-[#181818] border border-white/20 px-3 py-2 text-sm text-white focus:border-[#FF3E00] outline-none font-bold"
              />
            </div>
            <div>
              <label className="block text-[10px] font-sans uppercase tracking-widest text-white/50 mb-1 font-black">
                Phone Number
              </label>
              <input
                type="text"
                value={editPhone}
                onChange={(e) => setEditPhone(e.target.value)}
                className="w-full bg-[#181818] border border-white/20 px-3 py-2 text-sm text-white focus:border-[#FF3E00] outline-none font-mono-tech"
              />
            </div>
            <div className="sm:col-span-2 pt-2">
              <button
                type="submit"
                className="bg-[#FF3E00] text-white hover:bg-white hover:text-black px-6 py-2.5 text-xs font-sans uppercase tracking-widest font-black transition-colors cursor-pointer"
              >
                Save Changes
              </button>
            </div>
          </form>
        )}
      </div>

      {/* Tabs Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Navigation Sidebar */}
        <div className="lg:col-span-3 bg-[#111111] border border-white/10 p-4 flex flex-col gap-1.5 font-mono-tech">
          <button
            onClick={() => setActiveTab('orders')}
            className={`flex items-center gap-3 px-4 py-3.5 text-xs uppercase tracking-widest transition-all text-left cursor-pointer ${
              activeTab === 'orders'
                ? 'bg-[#FF3E00] text-white font-black'
                : 'text-white/60 hover:bg-[#181818] hover:text-white font-bold'
            }`}
          >
            <Package className="w-4 h-4" />
            <span>Orders ({orders.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('addresses')}
            className={`flex items-center gap-3 px-4 py-3.5 text-xs uppercase tracking-widest transition-all text-left cursor-pointer ${
              activeTab === 'addresses'
                ? 'bg-[#FF3E00] text-white font-black'
                : 'text-white/60 hover:bg-[#181818] hover:text-white font-bold'
            }`}
          >
            <MapPin className="w-4 h-4" />
            <span>Addresses</span>
          </button>

          <button
            onClick={() => setActiveTab('settings')}
            className={`flex items-center gap-3 px-4 py-3.5 text-xs uppercase tracking-widest transition-all text-left cursor-pointer ${
              activeTab === 'settings'
                ? 'bg-[#FF3E00] text-white font-black'
                : 'text-white/60 hover:bg-[#181818] hover:text-white font-bold'
            }`}
          >
            <Settings className="w-4 h-4" />
            <span>Preferences</span>
          </button>
        </div>

        {/* Tab Content */}
        <div className="lg:col-span-9 bg-[#111111] border border-white/10 p-6 md:p-8 shadow-xl">
          {/* 1. Orders Tab */}
          {activeTab === 'orders' && (
            <div>
              <h2 className="font-display text-2xl text-white font-black uppercase tracking-tight border-b border-white/10 pb-4 mb-6">
                Past Orders & Archive Invoices
              </h2>

              <div className="space-y-6">
                {orders.map((order) => (
                  <div
                    key={order.id}
                    className="border border-white/10 p-6 bg-[#161616] hover:border-white/30 transition-all"
                  >
                    <div className="flex flex-col sm:flex-row justify-between sm:items-center border-b border-white/10 pb-4 mb-4 gap-2 font-mono-tech">
                      <div>
                        <span className="text-[10px] uppercase tracking-widest text-white/40 block">
                          ORDER IDENTIFIER
                        </span>
                        <span className="font-display text-lg font-bold text-white">{order.id}</span>
                        <span className="text-xs text-white/50 block sm:inline sm:ml-3">
                          Date: {order.date}
                        </span>
                      </div>

                      <div className="flex items-center gap-3">
                        <span
                          className={`text-[10px] font-sans uppercase tracking-widest font-black px-3 py-1 flex items-center gap-1.5 ${
                            order.status === 'Delivered'
                              ? 'bg-emerald-500/20 text-emerald-400'
                              : 'bg-[#FF3E00]/20 text-[#FF3E00]'
                          }`}
                        >
                          {order.status === 'Delivered' ? (
                            <Check className="w-3.5 h-3.5" />
                          ) : (
                            <Clock className="w-3.5 h-3.5" />
                          )}
                          {order.status}
                        </span>
                        <span className="font-mono-tech text-lg font-bold text-white">
                          ${order.total.toFixed(2)}
                        </span>
                      </div>
                    </div>

                    {/* Order Items */}
                    <div className="space-y-3 mb-4">
                      {order.items.map((item, idx) => (
                        <div key={idx} className="flex justify-between items-center text-sm">
                          <div className="flex items-center gap-4">
                            <img
                              src={item.product.images[0]}
                              alt={item.product.name}
                              className="w-12 h-16 object-cover bg-[#181818] border border-white/10 brightness-95"
                            />
                            <div>
                              <h4 className="font-display font-bold text-white uppercase">{item.product.name}</h4>
                              <p className="text-xs text-white/50 font-mono-tech">
                                Qty: {item.quantity} • {item.selectedColor} • {item.selectedSize}
                              </p>
                            </div>
                          </div>
                          <span className="font-mono-tech font-bold text-white">
                            ${(item.product.price * item.quantity).toFixed(2)}
                          </span>
                        </div>
                      ))}
                    </div>

                    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center pt-4 border-t border-white/10 text-xs text-white/50 font-mono-tech gap-2">
                      <span>TRACKING: {order.trackingNumber}</span>
                      <button
                        onClick={() => showToast(`Opening tracking carrier for ${order.trackingNumber}...`)}
                        className="text-[#FF3E00] font-black hover:underline flex items-center gap-1 uppercase tracking-wider cursor-pointer"
                      >
                        Track Package <ChevronRight className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 2. Addresses Tab */}
          {activeTab === 'addresses' && (
            <div>
              <div className="flex justify-between items-center border-b border-white/10 pb-4 mb-6">
                <h2 className="font-display text-2xl text-white font-black uppercase tracking-tight">
                  Saved Delivery Addresses
                </h2>
                <button
                  onClick={() => showToast('Address manager ready')}
                  className="bg-[#FF3E00] text-white px-4 py-2 text-xs font-sans uppercase tracking-widest font-black flex items-center gap-1.5 hover:bg-white hover:text-black transition-colors cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" /> Add Address
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {user.addresses.map((addr, idx) => (
                  <div
                    key={idx}
                    className="border border-white/20 p-5 bg-[#161616] flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex justify-between items-center mb-2">
                        <span className="font-display text-base font-bold text-white uppercase">
                          {addr.firstName} {addr.lastName}
                        </span>
                        {addr.isDefault && (
                          <span className="bg-[#FF3E00] text-white text-[9px] uppercase font-sans tracking-widest px-2 py-0.5 font-black">
                            DEFAULT
                          </span>
                        )}
                      </div>
                      <p className="text-xs text-white/70 font-mono-tech">{addr.street}</p>
                      <p className="text-xs text-white/70 font-mono-tech">
                        {addr.city}, {addr.zip}
                      </p>
                      <p className="text-xs text-white/50 font-mono-tech">{addr.country || 'United States'}</p>
                    </div>

                    <div className="mt-4 pt-3 border-t border-white/10 flex gap-3 text-xs text-white/50 font-mono-tech">
                      <button
                        onClick={() => showToast('Editing address...')}
                        className="hover:text-[#FF3E00] font-black uppercase tracking-wider cursor-pointer"
                      >
                        Edit
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* 3. Settings Tab */}
          {activeTab === 'settings' && (
            <div>
              <h2 className="font-display text-2xl text-white font-black uppercase tracking-tight border-b border-white/10 pb-4 mb-6">
                VIP Account Preferences
              </h2>

              <div className="space-y-6 max-w-lg font-mono-tech">
                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <div>
                    <h4 className="font-display text-base font-bold text-white uppercase">Private Runway Invitations</h4>
                    <p className="text-xs text-white/50">Receive early digital invitations to Paris & Milan capsules</p>
                  </div>
                  <input
                    type="checkbox"
                    defaultChecked
                    className="w-4 h-4 accent-[#FF3E00] cursor-pointer"
                  />
                </div>

                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <div>
                    <h4 className="font-display text-base font-bold text-white uppercase">Personal Stylist SMS Alerts</h4>
                    <p className="text-xs text-white/50">Direct SMS coordination from your assigned concierge</p>
                  </div>
                  <input
                    type="checkbox"
                    defaultChecked
                    className="w-4 h-4 accent-[#FF3E00] cursor-pointer"
                  />
                </div>

                <div className="flex justify-between items-center py-3 border-b border-white/10">
                  <div>
                    <h4 className="font-display text-base font-bold text-white uppercase">Eco Packaging Preference</h4>
                    <p className="text-xs text-white/50">100% biodegradable silk ribbon and recyclable cedar crates</p>
                  </div>
                  <input
                    type="checkbox"
                    defaultChecked
                    className="w-4 h-4 accent-[#FF3E00] cursor-pointer"
                  />
                </div>

                <div className="pt-4">
                  <button
                    onClick={() => showToast('Preferences updated successfully')}
                    className="bg-[#FF3E00] text-white hover:bg-white hover:text-black px-8 py-3 text-xs font-sans uppercase tracking-widest font-black transition-colors cursor-pointer"
                  >
                    Save Preferences
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
