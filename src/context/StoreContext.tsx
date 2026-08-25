import React, { createContext, useContext, useState, useEffect } from 'react';
import { Product, CartItem, WishlistItem, Order, User, ViewType, ShippingAddress } from '../types';
import { PRODUCTS, CATEGORY_IMAGES } from '../data/products';

interface StoreContextType {
  view: ViewType;
  setView: (view: ViewType) => void;
  selectedProduct: Product | null;
  setSelectedProduct: (product: Product | null) => void;
  openProductDetail: (product: Product) => void;

  // Cart
  cart: CartItem[];
  addToCart: (product: Product, selectedColor?: string, selectedSize?: string, quantity?: number) => void;
  removeFromCart: (cartItemId: string) => void;
  updateQuantity: (cartItemId: string, newQuantity: number) => void;
  clearCart: () => void;
  cartCount: number;
  subtotal: number;
  tax: number;
  total: number;

  // Wishlist
  wishlist: WishlistItem[];
  toggleWishlist: (product: Product) => void;
  isInWishlist: (productId: string) => boolean;
  moveToCartFromWishlist: (product: Product) => void;
  removeFromWishlist: (productId: string) => void;

  // Search & Filters
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
  selectedGender: string;
  setSelectedGender: (gender: string) => void;
  sortBy: string;
  setSortBy: (sort: string) => void;

  // User & Auth
  user: User | null;
  login: (email?: string, name?: string) => void;
  logout: () => void;
  updateProfile: (updated: Partial<User>) => void;
  orders: Order[];
  currentOrder: Order | null;
  placeOrder: (shippingAddress: ShippingAddress, deliveryOption: 'Standard' | 'Express') => Order;

  // Mobile Drawers & Toast
  isNavDrawerOpen: boolean;
  setIsNavDrawerOpen: (open: boolean) => void;
  toastMessage: string | null;
  showToast: (msg: string) => void;
}

const StoreContext = createContext<StoreContextType | undefined>(undefined);

export const StoreProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [view, setView] = useState<ViewType>('home');
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(PRODUCTS[0]);

  // Initial Cart seeded as shown in the screenshot
  const [cart, setCart] = useState<CartItem[]>(() => {
    const item1 = PRODUCTS.find((p) => p.id === 'noir-structure-tote') || PRODUCTS[0];
    const item2 = PRODUCTS.find((p) => p.id === 'champagne-silk-skirt') || PRODUCTS[1];
    const item3 = PRODUCTS.find((p) => p.id === 'minimalist-pearl-drop') || PRODUCTS[2];

    return [
      {
        id: 'cart-1',
        product: item1,
        quantity: 1,
        selectedColor: 'Deep Black',
        selectedSize: 'One Size'
      },
      {
        id: 'cart-2',
        product: item2,
        quantity: 1,
        selectedColor: 'Champagne',
        selectedSize: 'M'
      },
      {
        id: 'cart-3',
        product: item3,
        quantity: 1,
        selectedColor: '14k Gold',
        selectedSize: 'Adjustable'
      }
    ];
  });

  // Initial Wishlist seeded as shown in the screenshot
  const [wishlist, setWishlist] = useState<WishlistItem[]>(() => {
    const w1 = PRODUCTS.find((p) => p.id === 'structured-leather-tote') || PRODUCTS[0];
    const w2 = PRODUCTS.find((p) => p.id === 'lumina-pendant-necklace') || PRODUCTS[1];
    const w3 = PRODUCTS.find((p) => p.id === 'architectural-mules') || PRODUCTS[2];
    const w4 = PRODUCTS.find((p) => p.id === 'monogram-silk-scarf') || PRODUCTS[3];

    return [
      { product: w1, addedAt: '2024-01-10' },
      { product: w2, addedAt: '2024-01-12' },
      { product: w3, addedAt: '2024-01-14' },
      { product: w4, addedAt: '2024-01-15' }
    ];
  });

  // Initial User as Eleanor Vance
  const [user, setUser] = useState<User | null>({
    id: 'usr_1',
    name: 'Eleanor Vance',
    email: 'eleanor.vance@example.com',
    avatar: CATEGORY_IMAGES.userAvatar,
    phone: '+1 (555) 234-8901',
    addresses: [
      {
        firstName: 'Eleanor',
        lastName: 'Vance',
        email: 'eleanor.vance@example.com',
        street: '123 Luxury Lane',
        city: 'New York',
        zip: '10001',
        country: 'United States',
        isDefault: true
      }
    ]
  });

  // Seed Initial Orders
  const [orders, setOrders] = useState<Order[]>([
    {
      id: 'LX-8892',
      date: 'Oct 12, 2023',
      items: [
        {
          id: 'ord-item-1',
          product: PRODUCTS.find((p) => p.id === 'classic-leather-tote') || PRODUCTS[0],
          quantity: 1,
          selectedColor: 'Noir Black',
          selectedSize: 'One Size'
        }
      ],
      subtotal: 450.00,
      shippingFee: 0,
      tax: 0,
      total: 450.00,
      status: 'Delivered',
      trackingNumber: 'LX-US-99382109',
      shippingAddress: {
        firstName: 'Eleanor',
        lastName: 'Vance',
        email: 'eleanor.vance@example.com',
        street: '123 Luxury Lane',
        city: 'New York',
        zip: '10001'
      },
      deliveryOption: 'Standard',
      estimatedDelivery: 'Oct 15 - Oct 17, 2023'
    },
    {
      id: 'LX-8905',
      date: 'Nov 02, 2023',
      items: [
        {
          id: 'ord-item-2',
          product: PRODUCTS.find((p) => p.id === 'monogram-silk-scarf') || PRODUCTS[0],
          quantity: 2,
          selectedColor: 'Charcoal / Gold',
          selectedSize: '90x90cm'
        }
      ],
      subtotal: 180.00,
      shippingFee: 0,
      tax: 0,
      total: 180.00,
      status: 'Processing',
      trackingNumber: 'LX-US-99401248',
      shippingAddress: {
        firstName: 'Eleanor',
        lastName: 'Vance',
        email: 'eleanor.vance@example.com',
        street: '123 Luxury Lane',
        city: 'New York',
        zip: '10001'
      },
      deliveryOption: 'Standard',
      estimatedDelivery: 'Nov 05 - Nov 07, 2023'
    }
  ]);

  const [currentOrder, setCurrentOrder] = useState<Order | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedGender, setSelectedGender] = useState('All');
  const [sortBy, setSortBy] = useState('Featured');
  const [isNavDrawerOpen, setIsNavDrawerOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage((prev) => (prev === msg ? null : prev));
    }, 3000);
  };

  const openProductDetail = (product: Product) => {
    setSelectedProduct(product);
    setView('product-detail');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const addToCart = (
    product: Product,
    selectedColor = product.colors[0]?.name || 'Default',
    selectedSize = product.sizes[0] || 'Standard',
    quantity = 1
  ) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex(
        (item) =>
          item.product.id === product.id &&
          item.selectedColor === selectedColor &&
          item.selectedSize === selectedSize
      );

      if (existingIndex > -1) {
        const copy = [...prev];
        copy[existingIndex].quantity += quantity;
        return copy;
      }

      return [
        ...prev,
        {
          id: `cart-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
          product,
          quantity,
          selectedColor,
          selectedSize
        }
      ];
    });

    showToast(`Added ${product.name} to your bag`);
  };

  const removeFromCart = (cartItemId: string) => {
    setCart((prev) => prev.filter((item) => item.id !== cartItemId));
  };

  const updateQuantity = (cartItemId: string, newQuantity: number) => {
    if (newQuantity <= 0) {
      removeFromCart(cartItemId);
      return;
    }
    setCart((prev) =>
      prev.map((item) =>
        item.id === cartItemId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  const toggleWishlist = (product: Product) => {
    setWishlist((prev) => {
      const exists = prev.some((item) => item.product.id === product.id);
      if (exists) {
        showToast(`Removed ${product.name} from wishlist`);
        return prev.filter((item) => item.product.id !== product.id);
      } else {
        showToast(`Saved ${product.name} to wishlist`);
        return [{ product, addedAt: new Date().toISOString() }, ...prev];
      }
    });
  };

  const isInWishlist = (productId: string) => {
    return wishlist.some((item) => item.product.id === productId);
  };

  const moveToCartFromWishlist = (product: Product) => {
    addToCart(product);
    setWishlist((prev) => prev.filter((item) => item.product.id !== product.id));
  };

  const removeFromWishlist = (productId: string) => {
    setWishlist((prev) => prev.filter((item) => item.product.id !== productId));
    showToast(`Removed from wishlist`);
  };

  const login = (email = 'eleanor.vance@example.com', name = 'Eleanor Vance') => {
    setUser({
      id: 'usr_1',
      name,
      email,
      avatar: CATEGORY_IMAGES.userAvatar,
      phone: '+1 (555) 234-8901',
      addresses: [
        {
          firstName: name.split(' ')[0] || 'Eleanor',
          lastName: name.split(' ')[1] || 'Vance',
          email,
          street: '123 Luxury Lane',
          city: 'New York',
          zip: '10001',
          country: 'United States',
          isDefault: true
        }
      ]
    });
    showToast(`Welcome back, ${name}`);
    setView('profile');
  };

  const logout = () => {
    setUser(null);
    showToast('Signed out successfully');
    setView('home');
  };

  const updateProfile = (updated: Partial<User>) => {
    if (!user) return;
    setUser({ ...user, ...updated });
    showToast('Profile updated');
  };

  const cartCount = cart.reduce((total, item) => total + item.quantity, 0);
  const subtotal = cart.reduce((total, item) => total + item.product.price * item.quantity, 0);
  const tax = Number((subtotal * 0.09).toFixed(2));
  const total = Number((subtotal + tax).toFixed(2));

  const placeOrder = (
    shippingAddress: ShippingAddress,
    deliveryOption: 'Standard' | 'Express'
  ): Order => {
    const shippingFee = deliveryOption === 'Express' ? 9.99 : 0;
    const finalTotal = Number((subtotal + tax + shippingFee).toFixed(2));
    const randomOrderNum = Math.floor(1000 + Math.random() * 9000);
    const newOrder: Order = {
      id: `LX-2026-${randomOrderNum}`,
      date: new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' }),
      items: [...cart],
      subtotal,
      shippingFee,
      tax,
      total: finalTotal,
      status: 'Processing',
      trackingNumber: `LX-TRK-${Date.now().toString().slice(-8)}`,
      shippingAddress,
      deliveryOption,
      estimatedDelivery: 'Oct 24 - Oct 26'
    };

    setOrders((prev) => [newOrder, ...prev]);
    setCurrentOrder(newOrder);
    clearCart();
    setView('order-confirmation');
    window.scrollTo({ top: 0, behavior: 'smooth' });
    return newOrder;
  };

  return (
    <StoreContext.Provider
      value={{
        view,
        setView,
        selectedProduct,
        setSelectedProduct,
        openProductDetail,
        cart,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        cartCount,
        subtotal,
        tax,
        total,
        wishlist,
        toggleWishlist,
        isInWishlist,
        moveToCartFromWishlist,
        removeFromWishlist,
        searchQuery,
        setSearchQuery,
        selectedCategory,
        setSelectedCategory,
        selectedGender,
        setSelectedGender,
        sortBy,
        setSortBy,
        user,
        login,
        logout,
        updateProfile,
        orders,
        currentOrder,
        placeOrder,
        isNavDrawerOpen,
        setIsNavDrawerOpen,
        toastMessage,
        showToast
      }}
    >
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => {
  const context = useContext(StoreContext);
  if (!context) {
    throw new Error('useStore must be used within a StoreProvider');
  }
  return context;
};
