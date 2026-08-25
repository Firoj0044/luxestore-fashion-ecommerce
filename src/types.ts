export interface Product {
  id: string;
  name: string;
  subtitle?: string;
  price: number;
  originalPrice?: number;
  rating: number;
  reviewsCount: number;
  category: 'Women' | 'Men' | 'Accessories' | 'Footwear' | 'Jewelry' | 'Bags' | 'Sale';
  gender?: 'Women' | 'Men' | 'Unisex';
  description: string;
  details: string[];
  shippingInfo: string;
  images: string[];
  colors: { name: string; hex: string }[];
  sizes: string[];
  inStock: boolean;
  stockCount: number;
  isNew?: boolean;
  isSale?: boolean;
  tag?: string;
}

export interface CartItem {
  id: string;
  product: Product;
  quantity: number;
  selectedColor: string;
  selectedSize: string;
}

export interface WishlistItem {
  product: Product;
  addedAt: string;
}

export interface ShippingAddress {
  firstName: string;
  lastName: string;
  email: string;
  street: string;
  city: string;
  zip: string;
  country?: string;
  isDefault?: boolean;
}

export interface Order {
  id: string;
  date: string;
  items: CartItem[];
  subtotal: number;
  shippingFee: number;
  tax: number;
  total: number;
  status: 'Processing' | 'Shipped' | 'Delivered';
  trackingNumber: string;
  shippingAddress: ShippingAddress;
  deliveryOption: 'Standard' | 'Express';
  estimatedDelivery: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  avatar: string;
  phone?: string;
  addresses: ShippingAddress[];
}

export type ViewType =
  | 'home'
  | 'shop'
  | 'product-detail'
  | 'cart'
  | 'checkout'
  | 'order-confirmation'
  | 'wishlist'
  | 'profile'
  | 'login'
  | 'signup'
  | 'forgot-password'
  | 'search';
