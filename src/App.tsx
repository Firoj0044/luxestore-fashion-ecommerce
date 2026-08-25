import React from 'react';
import { StoreProvider, useStore } from './context/StoreContext';
import { Navbar } from './components/Navbar';
import { NavigationDrawer } from './components/NavigationDrawer';
import { BottomNav } from './components/BottomNav';
import { Footer } from './components/Footer';
import { NotificationToast } from './components/NotificationToast';

import { HomeView } from './views/HomeView';
import { ShopView } from './views/ShopView';
import { ProductDetailView } from './views/ProductDetailView';
import { CartView } from './views/CartView';
import { CheckoutView } from './views/CheckoutView';
import { OrderConfirmationView } from './views/OrderConfirmationView';
import { WishlistView } from './views/WishlistView';
import { ProfileView } from './views/ProfileView';
import { LoginView } from './views/LoginView';
import { SignupView } from './views/SignupView';
import { ForgotPasswordView } from './views/ForgotPasswordView';
import { SearchView } from './views/SearchView';

const MainContent: React.FC = () => {
  const { view } = useStore();

  const renderCurrentView = () => {
    switch (view) {
      case 'home':
        return <HomeView />;
      case 'shop':
        return <ShopView />;
      case 'product-detail':
        return <ProductDetailView />;
      case 'cart':
        return <CartView />;
      case 'checkout':
        return <CheckoutView />;
      case 'order-confirmation':
        return <OrderConfirmationView />;
      case 'wishlist':
        return <WishlistView />;
      case 'profile':
        return <ProfileView />;
      case 'login':
        return <LoginView />;
      case 'signup':
        return <SignupView />;
      case 'forgot-password':
        return <ForgotPasswordView />;
      case 'search':
        return <SearchView />;
      default:
        return <HomeView />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#080808] text-[#FFFFFF] selection:bg-[#FF3E00] selection:text-white font-sans antialiased">
      {/* Top App Bar */}
      <Navbar />

      {/* Mobile Slide-Out Drawer */}
      <NavigationDrawer />

      {/* Main Content View with Smooth Transition */}
      <main className="flex-1 w-full flex flex-col">{renderCurrentView()}</main>

      {/* Editorial Footer (hidden on pure auth screens for focused conversion) */}
      {view !== 'login' && view !== 'signup' && view !== 'forgot-password' && <Footer />}

      {/* Mobile Bottom Navigation Bar */}
      <BottomNav />

      {/* Global Luxury Toast Notifications */}
      <NotificationToast />
    </div>
  );
};

export default function App() {
  return (
    <StoreProvider>
      <MainContent />
    </StoreProvider>
  );
}
