import { Product } from '../types';

export const LOGO_URL = 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgCnT0Z87Quz-umU_ccQKy5w7n9JGiHvF2bMHvrYwa62wtuoCEWpvidk1VhlcFcSm2UkEywQXN1DHlFsIn4W6P1hroYdX6Nfg7SFx-qxnIrS6GaVimIXvzoxj0g1kmPxm7GI4xqlDoWo7GK1z10oiQW2lFPfnhjeENy3aeQ6hkJ4KkcoCsZeVBDBatbfT5MvICeXOGChbYmojAJcRULwV2A2n3bX2KuCBak3E5BVwG5mjz1KE50zOa';

export const HERO_BG = 'https://lh3.googleusercontent.com/aida-public/AB6AXuCIC3XbnOqU36IphgYvEI5HxmXEUuq8aKHVhoONhQ2ojCuPn2KmOb2SM-wHKpLnKWfohRVKR7lettvJ0TSWXV1eF_pwsyL0-aYrw4nb0sxghWiSpEfpZ6DYe11y6USxBRbrTx7i6Qtqjz-dPHpB653OIiunJyCofMn7x1EZLdpj3QspSeqi3kspn3sEOkGkrOmm9PdTa1HpnnQ3TJUa6JMV271j3pKVe5ExjStvJSSs9g5IdoWJnbKL';

export const CATEGORY_IMAGES = {
  women: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkrjCSRNyBjHlG3rqxlm-Ed5ugxvUaYW5qux6xX8nrjNI432CaShlvOOSY5veUvJlOrSghsaMW0xEZpS4wVHamvnA5u-2APyNonCo1o1bcvqUPHFZPjQu_ij_l55p3ie3WeKVP9WtpwMt-MfZq39NhlIYQMazL_obNWscUQ8HPmarCgzqbAlEUmwE08Sm0FIxNa0jEUjTevQexmbhLBm1UB7yBPVnNgCOCWZB9k850dGqDXwRc56VO',
  men: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBR4cCbMmo6XRsalJqmCMEIF-0YDsnZ8ZqFm8hfRQx2DMriD7hzRKTN4iNURMGprO2lu1ZV9KsViZWZfIcLJyQxDo5-Tvx2qfvrYsqK5qm-VB2TtuyadHKJmFDCGeHkMFDscGtDSiTCycLcpco8BZ5j6ymKOQxK5mIjJNnfO3Fv_rwP_qhf6q-Q91bPPnSzo1h15zPsKMq835S-cFjiJD6_sXlV4eKP9IxgaV2xKR3EaTL9DCVgLtDx',
  accessories: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAoT_w8XbVP1dKwH_pKewYBx1HGZis72yNLN35V5pLap8-6EQ_LhQbRZdG2oReZTKYIrzJHk2K3r2YMYhDI2sB95mMgtPoxdgq8YLNdTE4UnTvaeVnsxGEBiPy7jLHOJevfiR40v1vv-BQ8CfkNwJfRU6J-QXKBMD05sIMKuWnY0kqACKzT7TppLdM6cj8j-Nz1WsWyWm4EMZKY18Oxk13fIcwN24hDG8_Jk7sndpUcDhatjS84zJYM',
  loginHero: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB2Q67UTKVulVTVrCYdQzx47Otl03Lmtq3uw0RK32Hqe-DBknily-ZmUbxQy_mAZZ2-ucNjjaLo9fQFGtd1lnbqniiaPVLTfSFw8xOiQea1eIdicwN5_vSt3stAIDrvX8U6nz4ttrNCXNTn2QI-kBHcHF-PUeh3FGtDFTkNpo4XHR-RnDX-ss7tb-G1hbQuxKaogjHul0sMRO8hVPeTf3NLAdUnMgH17k0HIjI40lRo_OWqX6Cle7df',
  signupHero: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBQJ2lQLvbSb3Z1MJWVnTIqSIoaaR2C1G3yxGfcR1XciN-kyIC-_RENi8NPc5XhYHQDlD4lEpkU4SZHXKnAA6D14RYY1Oz0BH7lvhZ2Lq9Pb226ILszxrk6etoY2Y6-JveF0rt5quTYmWArQr8OhiMsamvDCPxVj5akYOLCPx_GuUVuWamtYuPbk0Ls6xNdRiAJfV9SRY2hS0PRrbEhagJXf0xkTXFpmiTTMk90E3uOMiqpmt4eDslg',
  userAvatar: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWxmA7qPXqu7EW_cEK8rIS0XuMHkDcUrCI8jwBOsU4DA7s9IWquKQGVJrXau73slAhhdCSh1WnVKp2fW8KrHXinLPGRgngqHcGeRnQl5BQc8kSwhOZkij6mpwBMBfKC9JId60IfwA-AhLpNMGqguDZh9tnJmcvs0W4oWeh1Ej1mdslPtJXZthL1kWbrD-SD1X1MaqPfE1dso9gF3LI98l84595BqJJohha7VeSUt6QOZAbBf2kdg7h'
};

export const PRODUCTS: Product[] = [
  {
    id: 'silk-midi-dress',
    name: 'Silk Midi Dress',
    subtitle: '100% Pure Mulberry Silk',
    price: 189.99,
    originalPrice: 240.00,
    rating: 4.8,
    reviewsCount: 38,
    category: 'Women',
    gender: 'Women',
    tag: 'LUXE COLLECTION',
    description: 'Elegance redefined. The Silk Midi Dress is crafted from 100% pure mulberry silk, offering a fluid drape that beautifully contours the body. Featuring a delicate cowl neckline, adjustable spaghetti straps, and a daring yet sophisticated side slit. This piece transitions effortlessly from daytime sophistication to evening glamour.',
    details: [
      '100% Grade 6A Mulberry Silk (19mm)',
      'Delicate cowl neckline with bias-cut silhouette',
      'Adjustable spaghetti straps with gold-tone hardware',
      'Side seam slit for ease of movement',
      'Dry clean only or cold gentle hand wash with silk detergent'
    ],
    shippingInfo: 'Complimentary express delivery on all orders over $99. Estimated delivery in 2-4 business days. Signature required upon arrival.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC1P63Nd-rJ5zcS-KdGThogaOEUXmR8sKiJSJ0iCkdKjC01hNmDDvHv0gXHWIIxyn4LPcJYSBGwZ5WZUJ6EIO87M2FdiHUOWUj-DOjpK0m4E7u1CdbwEYpkEIpMisOnUfvS96RHb4YvNP1MqW8f1bXe177su4ALSpxpVwaRPhEDnhNki2bnX3E8RCta8petmEBe9Z9juuVFb7P5fCwylmQ-JtUCpxoOZnCOEFQhYQTa4TFb8MWrCJ65',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuD5kHFTse7Tc8HAxaoDdMYLpKYvYbKt0E9z34XtbC--lhRfQEwtFv4S9PNM1HHGJvzqXmBdSyfChLzjaBuxQAdlptpOchs3IUP4NA4goOzSPPDSPa97LJ0TFQW-QVecP5IoqBSf0DGcNon6q775xOdAVCcJjAzXGTBtY2YAGeUlLT5LoixeMSt6JEbrGEvJKbRpTSL6J1h_1dummDDmfCNu6H-uMMh9zGY0LpaJCcEn2733_OFlqhZW',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDYnGpi1lliUycY23vfBm4Oh-n-oLP8ySXR_1fOfIbrgqfFLjkNo2qic7w7fN-tKrvLLjyiuuukQXyyGcscU2ikoK_bqpza-y60X4yzl9fYsdqVBHw2DUi3Xe9pMorRcJMKtt_nY32ZNV80fKQ-bGdjMMBbEtwy7tgkpGNxDnBQTVk2DyhyqPzDuXHPMuBtfZ5uIpZz6lmgKAWy3Zpp5SkjsvRsykSdjJP6m3WQ1uwL9wPuNIpuHLX0',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC22HMxGHGodz75t1shrVemoj80W2WN0rmSt5A8ZfN7JGwfpR65OhwIpfgG-QllE6VFo5RDUdLoghGjSBUDkgU7kgkI8q9wtfvmwwg0zqqV7gqE8O1pOb5OPpwpdJZIO-Vqu3c-8DdoY7NamSzrUY15WJ7yvZEDpjvqLVttvHqUrUlaYeaNpqSvxUVZJCLyplb3_Lt2qJNdClQdQqxgQU8AvZk-YoTM6WauIYGbmKdPZMe_Bzjt2oZo',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBKLsgmQmNCXH6ycC8fjezi03_-jGZhuK8Fv-M2lrdF0XTbjCC8zuWoqA4FrgrowPT_LRzEn_rJ-btlOdTJeeETTEas2nuUvacvZbv_WszmrOgCNYgtepk1b6-OkJDdjuUMdQm0Bkl4FD186D8GMIX-9pt3dl5p_jO1V83oRVVDqDyBGPIi76V4yca9mBW70zjvRSK5qfC-X_z0D3YZdZJg23Ehn8-vs0ykoi2Xw_Y-t6TJn986j7Ck'
    ],
    colors: [
      { name: 'Black', hex: '#000000' },
      { name: 'Gold', hex: '#D4AF37' },
      { name: 'White', hex: '#FFFFFF' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    inStock: true,
    stockCount: 12,
    isNew: true
  },
  {
    id: 'silk-evening-gown',
    name: 'Silk Evening Gown',
    subtitle: 'Midnight Haute Couture',
    price: 1250,
    rating: 4.9,
    reviewsCount: 24,
    category: 'Women',
    gender: 'Women',
    tag: 'EDITORIAL',
    description: 'An architectural evening gown draped in heavyweight midnight silk. Features an asymmetrical neckline, elongated split skirt, and hand-finished internal corsetry for unmatched poise.',
    details: [
      'Pure silk heavyweight charmeuse',
      'Internal structured boned bodice',
      'Concealed back zipper with hook-and-eye closure',
      'Floor-length train with side split'
    ],
    shippingInfo: 'Complimentary white-glove courier shipping with signature validation.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDo-h4hvhtKwwgJVp-vI4C0JY8hGJSKND8bWJmoIi4tJt0cWj8yY9vgt1Ln8DKSx4JsNU_leRyaolDzqfoIMBtd4xE58FNQ8beBi4DRaSMAPh_JKZ29bbTOZxWJXI_M162yJETTnYvcyXDFqJ7XQGM7Iv2HzG054T2aN7Fb347ea8aA7HXOCyQRGPSoO6kh9dZd6HljAkagSfzKFJaFGRfMhzdPiQ71mQpDpjwLGeTZrTIv67TvaUMU'
    ],
    colors: [
      { name: 'Midnight Black', hex: '#0a0a0a' },
      { name: 'Deep Emerald', hex: '#0f382c' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    inStock: true,
    stockCount: 5,
    isNew: true
  },
  {
    id: 'structured-leather-tote',
    name: 'Structured Leather Tote',
    subtitle: 'Calfskin Leather, Midnight Black',
    price: 890,
    rating: 5.0,
    reviewsCount: 42,
    category: 'Bags',
    gender: 'Unisex',
    tag: 'ICONIC',
    description: 'Masterfully structured from full-grain Tuscan calfskin with hand-painted beveled edges and signature gold-plated hardware. Comes with an adjustable shoulder strap and protective dustbag.',
    details: [
      'Full-grain Italian calfskin',
      '24k gold-plated brass hardware lock',
      'Dual interior compartments with suede lining',
      'Protective metal feet at base'
    ],
    shippingInfo: 'Complimentary express shipping with insured delivery.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC7vVB-0pNQ3tqEPZSz_NAFthmTTmu3Yg2DU4m2egWHv9b2y6f7hdHxNqHXw4KHxogDcVACkrvzFJApUH6y6bCbYW_wkGfDj8CwOAML0rgB2Sk198dTKwx9WHGo0Fg9VUGeMT3kxs5iiqa5qF_LNLJGKP-cpvawWkLUpxqiIwVzXskd6NOeCaud8FxsA5Cag85j2hCCq1iEKAiT6PKUtJRPvA641aNv8D0uxTS_KcswIWtAhhRptKs2',
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBIG6y749NyF3tPV-abrX3ZANno9qj_A37fGdxGBQHRIpzPx7wyqaLH1hTLPDf2BWvbPTfFVGJ4daxyYqW4TLgw7eCem-dJ6ftXIVn7qC3v8vFGLsXqFl7kyMTaM19fj4txvru_PlWSKo6Zj_DUZuHTMJc9MpQW4O0DoJVIhiPw0FeUDO1U9pSMoRP5G_q4t9Aox-Z9h9lCt_63Uy55eCPbo_852ABWdDl5v0AWl8bF19vLb-FoYRSG'
    ],
    colors: [
      { name: 'Camel Tan', hex: '#8C5E3C' },
      { name: 'Midnight Black', hex: '#000000' }
    ],
    sizes: ['One Size'],
    inStock: true,
    stockCount: 8
  },
  {
    id: 'tailored-wool-suit',
    name: 'Tailored Wool Suit',
    subtitle: 'Super 150s Virgin Wool',
    price: 1800,
    rating: 4.9,
    reviewsCount: 19,
    category: 'Men',
    gender: 'Men',
    tag: 'BESPOKE CUT',
    description: 'Precision cut from bespoke Super 150s Italian virgin wool. Features hand-stitched pick lapels, horn buttons, a floating canvas chest piece, and tapered trousers with side adjusters.',
    details: [
      '100% Super 150s Virgin Wool from Biella, Italy',
      'Full canvas jacket construction with cupro lining',
      'Horn button closure and surgeon cuffs',
      'Unhemmed trousers for tailored customization'
    ],
    shippingInfo: 'Shipped in cedar travel suit carrier with luxury wooden hanger.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuALw4htAu4nZvZ2xTZNBcznkHIXKspTe0hDYyq-hEQHHum-YlpbUSLq1LEuyppqlQR4H2ys-faf1KMBHadGCrzMYn_KPGrdXcv2-YxBvHuRDpk8EW5o50hITCp8AycYO-kRD4LHelr6HpLgEDb_fK7kYTpmD2EYlBHf0SjYtYcTouUdFVX2Q_Ap-MnqtXL2QOfH9hESOONBwuwxsgVYwYA-1NSLxhaq2zgbzQla4O8HjolYEvMGQQyL'
    ],
    colors: [
      { name: 'Charcoal Grey', hex: '#333338' },
      { name: 'Midnight Navy', hex: '#141824' }
    ],
    sizes: ['38R', '40R', '42R', '44R'],
    inStock: true,
    stockCount: 7
  },
  {
    id: 'oversized-aviators',
    name: 'Oversized Aviators',
    subtitle: 'Titanium & Gradient Mineral Glass',
    price: 450,
    rating: 4.7,
    reviewsCount: 15,
    category: 'Accessories',
    gender: 'Unisex',
    tag: 'NEW',
    description: 'Japanese titanium frame with handcrafted acetate brow line and Category 3 UV400 gradient mineral glass lenses with anti-reflective interior coating.',
    details: [
      'Ultralight Japanese beta-titanium',
      '100% UV400 protective polarized lenses',
      'Hypoallergenic titanium nose pads',
      'Includes hard leather protective case and microfiber cloth'
    ],
    shippingInfo: 'Complimentary domestic courier shipping.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC0SCUX7HWzZLJkUtD4fUOMEb3uphZhY0op5qeJtVAJpTgG59vYc8HT79834RhKvzeZhA77IzTqw_4UfRvNP3KyMufkQ_lCdapHLQqRK4PX3hp6yoYNK3RzGi2VRvrGwyHTN70Dp7I-Xlh55SRRTeysMEFr8Q5jWXrFpSsoXZ0N3x3AyNWY1jnf2vCvQc0xS6KY3IkC24lX0jEBZieICHq-VkbLfZeOQWOEHRCaaJ7Rswg7sr-1IYCk'
    ],
    colors: [
      { name: 'Gold / Tortoise', hex: '#634832' },
      { name: 'Silver / Grey', hex: '#8a8a8a' }
    ],
    sizes: ['Standard (58mm)'],
    inStock: true,
    stockCount: 14
  },
  {
    id: 'cashmere-scarf',
    name: 'Cashmere Scarf',
    subtitle: 'Grade-A Mongolian Cashmere',
    price: 320,
    rating: 4.9,
    reviewsCount: 28,
    category: 'Accessories',
    gender: 'Unisex',
    description: 'Woven from raw Mongolian highland cashmere fibers, softly brushed for cloud-like softness and finished with delicate eyelash fringe.',
    details: [
      '100% Grade-A Pure Mongolian Cashmere',
      '200cm x 70cm dimensions',
      'Hand-twisted fringe hem',
      'Made in Scotland'
    ],
    shippingInfo: 'Free shipping on orders over $99.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDl6J6OcTOvHpHFHORNQ7Bc4oCIdrX9jldcWTClUxoRM3n_xnrCwBkHw_r5fN39jrbzXLpOOIyBD7XTZPMDXIRgLo2as113jTfXbU76leQ5hXQKKqSxxvK_tHt3UG_GCWLtDykia_Uog6N2LX7A-uMVlpySGPEo0UU4xS4onvZe4IJCT_JgMlVVmqoTmL8KGdLaup0tPXuOcM_3dH75tssT81mil9GzylZailyNsGJkzmeRCf_Y2Mxe'
    ],
    colors: [
      { name: 'Oatmeal', hex: '#d9d0c5' },
      { name: 'Charcoal', hex: '#2b2b2b' }
    ],
    sizes: ['One Size'],
    inStock: true,
    stockCount: 18
  },
  {
    id: 'leather-loafers',
    name: 'Leather Loafers',
    subtitle: 'Blake-Stitched Box Calf',
    price: 650,
    rating: 4.8,
    reviewsCount: 31,
    category: 'Footwear',
    gender: 'Men',
    description: 'Timeless penny loafers handcrafted in Florence. Built with durable Blake stitch construction and supple French box calf leather that patinas gracefully.',
    details: [
      'French box calf full-grain leather',
      'Hand-stained leather sole with rubber heel insert',
      'Full leather interior lining and padded insole',
      'Handmade in Italy'
    ],
    shippingInfo: 'Includes travel dust bags and shoe horn.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAJy6ruoNVuqGaUxbyS_52qAkN3QSA8Jvs5z7o56A2D1GtZ3SWmHfL_HMBN6lLXwM0VAQ3KTACLZ6M1CqU1acTOISUaW213h0von3E8I0ax2qDpcWaPfasz-r76ef1WJr7s6hJKSsmnSmrKzUBUs_wka5DP3bBhQOEzQR4BpBMyLvyhx55-qhzirQQ3xCszBokrAvKVKxvABMX97a8yV39A_htqP6UdVmJCKrn8zHm-yxwXWqdfZ8oW'
    ],
    colors: [
      { name: 'Espresso Brown', hex: '#3B2F2F' },
      { name: 'Black Onyx', hex: '#111111' }
    ],
    sizes: ['40', '41', '42', '43', '44', '45'],
    inStock: true,
    stockCount: 9
  },
  {
    id: 'gold-chain-bracelet',
    name: 'Gold Chain Bracelet',
    subtitle: '18k Solid Yellow Gold',
    price: 1100,
    rating: 5.0,
    reviewsCount: 16,
    category: 'Jewelry',
    gender: 'Unisex',
    description: 'A bold, hand-assembled curb chain bracelet cast in weighty 18k solid yellow gold with a custom discreet safety clasp and laser-engraved Luxe hallmark.',
    details: [
      'Solid 18 Karat Yellow Gold (approx. 22g)',
      '19cm standard length',
      'Integrated security spring clasp',
      'Certified authentic with luxury display box'
    ],
    shippingInfo: 'Fully insured courier delivery requiring adult signature.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDwN8k0gzFHTerKryZYJNUPtN3ex9zY9KBSyxo0BcZBMJicVzIhMHg_sET_8BNRQlprxGHlW4mb6uwjmVEUIL133a8Fe0G4_y-0CpoAwYqHo5FRA5YYSGSIITmc0fWcyrQvsYEuositBvRL4QIcnuPxhdYwU5nZDM7PpCpFFnRcngYwZSySbs9STvE6yU600lPuozDBWwT7iRLH39BwYbGD1wFgFTjIh4WGS9qj4Rf-fA7Jl7zvRgL3'
    ],
    colors: [
      { name: '18k Yellow Gold', hex: '#E5C158' }
    ],
    sizes: ['17cm', '19cm', '21cm'],
    inStock: true,
    stockCount: 4
  },
  {
    id: 'classic-trench-coat',
    name: 'Classic Trench Coat',
    subtitle: 'Water-Repellent Cotton Gabardine',
    price: 1450,
    rating: 4.9,
    reviewsCount: 37,
    category: 'Women',
    gender: 'Women',
    tag: 'ESSENTIAL',
    description: 'The epitome of heritage tailoring. Double-breasted trench in tightly woven English gabardine with epaulettes, storm flap, horn buckles, and monogram silk lining.',
    details: [
      '100% weatherproof woven cotton gabardine',
      'Belted waist with leather-covered buckles',
      'Deep welt pockets and inverted back pleat',
      'Dry clean only'
    ],
    shippingInfo: 'Complimentary shipping in garment bag.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuDxPYwLE7GBaND0V9GmYuAUtQCSFGHP-YyCHgWgiL2ZaTHjmASm6D9FoB457QXeNHqF2pJD3KRO1zmxOt42zC2qSM0MboU3b574o4Jhs2_95N9Hp04e_q5-Ejh8JZYHc6f2qeJYfspIRXiVI2I6ESoPtqv4JieHMFin7YWn-ZGmb3QlBz-JKS9i7-ZGSadKMF_8pRjR2tnM_CFQXbCuikE-WmDs5R45cKdgUPcgeDdWefR6iBfmincP'
    ],
    colors: [
      { name: 'Honey Sand', hex: '#C2A37E' },
      { name: 'Midnight', hex: '#111111' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    inStock: true,
    stockCount: 11
  },
  {
    id: 'noir-structure-tote',
    name: 'Noir Structure Tote',
    subtitle: 'Color: Deep Black',
    price: 185.00,
    rating: 4.8,
    reviewsCount: 52,
    category: 'Bags',
    gender: 'Women',
    description: 'A compact architectural everyday tote in structured textured saffiano leather with polished gold accents and detachable cross-body strap.',
    details: [
      'Saffiano cross-grain leather',
      'Dual structured top handles',
      'Magnetic bridge closure with zip interior pocket',
      'Lined in luxury micro-suede'
    ],
    shippingInfo: 'Shipped within 24 hours with signature delivery.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCUyhb-efZ-LR6ZmSe2HU7SBHM_C81hP1SpmD05sY5hZL5UPDcR6X7d_XBX4XY65u0ScuY4ypGET1RweZ-qzruEunSoRKTlQPaQMvwASHSdDXD3744LtbN3oZelkm3pTcphXvKBLmnjel_jAz8mnPp35b7N6sRL-idMuMWniSdQerfgiFOWTwASpDEhz9WYCqRrw76nR2mP2uo96j78KKAXWYhsBDoOoLo_Z7_wPRrm8Arz9ChkJn7H'
    ],
    colors: [
      { name: 'Deep Black', hex: '#000000' }
    ],
    sizes: ['One Size'],
    inStock: true,
    stockCount: 15
  },
  {
    id: 'champagne-silk-skirt',
    name: 'Champagne Silk Skirt',
    subtitle: 'Heavyweight Satin Bias Skirt',
    price: 120.00,
    rating: 4.7,
    reviewsCount: 29,
    category: 'Women',
    gender: 'Women',
    description: 'An essential high-waisted bias-cut skirt rendered in luminous champagne silk satin with an invisible elasticized waistband.',
    details: [
      '100% Mulberry Silk Satin',
      'Bias cut for natural fluid movement',
      'Midi length hitting mid-calf',
      'Gentle cold hand wash or dry clean'
    ],
    shippingInfo: 'Complimentary shipping over $99.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBnwiMHA1I5S1I2VUuCgKYvqfGV9pJ7z46pioawGuWHUAmOd4NUIEj9Ag5XvL38eIHP8TJAnksrMBgYeF2vQCvcKBXebHUebq03BINDZwxnBPNVexFnXzFBmwhW0Y5zUzPpeHliG1lV0rWuVVs4yBPcw2Qtruh0WdJdCOg32KwguQ_2OOjmyCBiycKkW8jZe56KraogZB7X70SOD3iyvvOwp2EZEqN3bQTBX0FvtL5EFmVkoiQP8gJQ'
    ],
    colors: [
      { name: 'Champagne', hex: '#EADBC8' },
      { name: 'Black', hex: '#111111' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    inStock: true,
    stockCount: 16
  },
  {
    id: 'minimalist-pearl-drop',
    name: 'Minimalist Pearl Drop',
    subtitle: '14k Solid Gold & Akoya Pearl',
    price: 54.97,
    rating: 4.9,
    reviewsCount: 63,
    category: 'Jewelry',
    gender: 'Women',
    description: 'A whisper-light 14k solid yellow gold cable chain holding a luminous cultured Akoya pearl for effortless understated grace.',
    details: [
      '14k Solid Yellow Gold',
      '6mm AAA Cultured Japanese Akoya Pearl',
      '40cm chain with 5cm extender',
      'Spring ring clasp'
    ],
    shippingInfo: 'Packed in velvet gift box.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAbafZ-wv6jGUT5h8s39a40q6O0vqDyCsK6rOsaPK65QuiqBbW4ZclmpDaINYyYU4K7Yv9caovOlU_61deQt49t5VejRJz2IihJ37pHRZ_r7Jwk9CHSzBIH0t-i2nyED2deqRS8YYtX5tYwGPRrrAuNTyYZinZqfr_C6uRQVJ3qhhGd9gx-MkHDrF2NecFjPDg-q9GvnrGAO60VAGsj_qYKgzDmRMSVmFcp8se306Vd1sSQE3LK6f75'
    ],
    colors: [
      { name: '14k Yellow Gold', hex: '#E6CA65' }
    ],
    sizes: ['Adjustable (40-45cm)'],
    inStock: true,
    stockCount: 25
  },
  {
    id: 'monogram-silk-scarf',
    name: 'Monogram Silk Scarf',
    subtitle: 'Color: Charcoal / Gold',
    price: 245.00,
    rating: 5.0,
    reviewsCount: 40,
    category: 'Accessories',
    gender: 'Unisex',
    description: 'Hand-rolled 90cm square silk twill scarf bearing the geometric heritage LuxeStore monogram motif in deep charcoal and muted bullion gold.',
    details: [
      '100% Silk Twill (18 momme)',
      'Hand-rolled and hand-sewn edges',
      'Dimensions: 90cm x 90cm',
      'Made in Lyon, France'
    ],
    shippingInfo: 'Includes signature orange presentation box.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuB21vsZuqEWd3agI6VjqqQfEX9vl1bkDQUlcG9sioc9pDwrFS3Wm1IbdHwYYCteMAwZ5_p5lIubpzbrcNGeEMXX4foe0-4Mob01eQ3WdmDVB4788TBpU5zVK60vSCCUj7krcYgefDJbILNY1d0Ss1TgpEh2vietRxT30vM7V5uysq9jpoa8W3nkaxPnr8ea75cUuMvOErBqXayrsav_-h0qeeUvIVbsPh2NbhUq8-Eg5d19_zX0DQ88'
    ],
    colors: [
      { name: 'Charcoal / Gold', hex: '#2C2B29' }
    ],
    sizes: ['90x90cm'],
    inStock: true,
    stockCount: 14
  },
  {
    id: 'leather-cardholder',
    name: 'Leather Cardholder',
    subtitle: 'Color: Deep Black',
    price: 180.00,
    rating: 4.8,
    reviewsCount: 22,
    category: 'Accessories',
    gender: 'Unisex',
    description: 'Slimline pocket cardholder in ultra-soft calfskin leather with foil stamped gold logo, featuring 4 card slots and central cash compartment.',
    details: [
      'Full grain matte calfskin',
      'RFID blocking internal shield',
      '4 exterior card slots and 1 central pocket',
      '10cm x 7.5cm'
    ],
    shippingInfo: 'Complimentary shipping.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuA2mmgIt1D_MpVDyOhWD9b87p-RUI6rtpMSbRY8ycV-eZ3l4S6qv6k62giiBFQKSELHX9tLssPu9COnrVb3YwTqajuIZc7WHGqXapt7GwAF2XNLMlYbp_feNn0vl2wX_Fh7oSSgvwrPohdF9t2Id9OU135HHaPnN1m9Q5o1Ca224eJNwgVfuUFz_y7nePlqd3zBxE9zL1b8HXliRHPTGRAdYDhsP46-boo6Kkbq8BvzpTVqzOjdpcq-'
    ],
    colors: [
      { name: 'Deep Black', hex: '#000000' }
    ],
    sizes: ['One Size'],
    inStock: true,
    stockCount: 20
  },
  {
    id: 'emerald-silk-scarf',
    name: 'Emerald Silk Scarf',
    subtitle: '100% Mulberry Silk',
    price: 145.00,
    rating: 4.9,
    reviewsCount: 18,
    category: 'Accessories',
    gender: 'Women',
    description: 'Rich jewel-tone emerald green pure silk scarf that adds a touch of regal elegance to any ensemble.',
    details: [
      '100% Mulberry Silk Twill',
      '70cm x 70cm square',
      'Hand-rolled hem',
      'Dry clean only'
    ],
    shippingInfo: 'Free standard shipping.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCPq79qv0kfFW5W9eThpOxroPCLhYl9hQk1C5rJI058VFazAeHvKSMHzUmj-YjuoKF_ceSf2Vll3OvvTUjWSJiAunExbL5otjo3z7g3AkKmNvKd91bTqo6LOeNfGnkI1bdxSGRv3TeIMjnzGSxXqI9b1Vf_7HkVIeA6tYGGXiySIiqlCCWeXZpIGCIB3wPlRml20SgbybH6YR4btes-PWCxt-KF7pOGNxvV76xoITBpx9FvSKR71COq'
    ],
    colors: [
      { name: 'Emerald Green', hex: '#0D5C3A' }
    ],
    sizes: ['70x70cm'],
    inStock: true,
    stockCount: 15
  },
  {
    id: 'midnight-slip-dress',
    name: 'Midnight Slip Dress',
    subtitle: 'Bias Cut Heavy Silk',
    price: 320.00,
    rating: 4.9,
    reviewsCount: 27,
    category: 'Women',
    gender: 'Women',
    description: 'Sensual full-length black silk slip dress cut on the bias to skim the contours of the body with effortless fluid grace.',
    details: [
      '100% Heavy Silk Charmeuse',
      'Scoop back with delicate tie detail',
      'Floor length',
      'Dry clean only'
    ],
    shippingInfo: 'Free express shipping.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBTl1IOhENaFjaioS52N9iD6WDyBNkHLQW6P8g_HJrc0xBvatHN7m7HyWwjM2OPDB69ty5FP2a73KcfJmVUgJGZM1Loi_FH2Va3xFZB10grCDVUilrdeTByc5PmjjhPrkei2Zg2O044VwnH67kRch-vrWSH6S5S5_jSlkEIWvs2qcjLYzFsXJ7Z9b4uJhTir0iz7k7qalDY4WxMPx1rOB95GISNrokBX6V4icbTK0GsOoTCVg44SdOo'
    ],
    colors: [
      { name: 'Midnight Black', hex: '#000000' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    inStock: true,
    stockCount: 8
  },
  {
    id: 'ivory-pearl-blouse',
    name: 'Ivory Pearl Blouse',
    subtitle: 'Relaxed Fit Silk Crêpe de Chine',
    price: 285.00,
    rating: 4.8,
    reviewsCount: 19,
    category: 'Women',
    gender: 'Women',
    description: 'An ethereal silk blouse tailored with refined point collar, mother-of-pearl buttons, and fluid relaxed sleeves.',
    details: [
      '100% Silk Crêpe de Chine',
      'Genuine natural mother-of-pearl button placket',
      'French cuffs with double buttons',
      'Dry clean'
    ],
    shippingInfo: 'Free standard shipping.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCifmKOVhsz0zLRt1eNcIur_VkVXtOVUqHnGLagvK6sdKiWy2PBi6di0_dU-vQ5f56lKICHGPfQCEZSDD2oF6WdKn6EJk-ad20dnqa11P7OCltNZfFBh2jji3i0ueohw6zVd2OnI_UxU2OaEENNYXjHyhDxdJchAb_qR1joT0dbxuQQY07nJiypa791tLo5AQAgv62onqvL_pp7dpSGZ8ne6xCTAoy50QQKCjuGwQgVboa2PbE0fygn'
    ],
    colors: [
      { name: 'Ivory Cream', hex: '#FDFBF7' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    inStock: true,
    stockCount: 11
  },
  {
    id: 'champagne-trousers',
    name: 'Champagne Trousers',
    subtitle: 'Wide Leg Silk Tailoring',
    price: 410.00,
    rating: 4.9,
    reviewsCount: 22,
    category: 'Women',
    gender: 'Women',
    description: 'High-waisted trousers with razor-sharp double front pleats cut in heavy champagne silk with subtle satin sheen.',
    details: [
      '100% Heavy Silk Satin Blend',
      'Double front pleats and concealed closure',
      'Wide fluid leg profile',
      'Side slash pockets'
    ],
    shippingInfo: 'Free express shipping.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCcUdpf6_PeYrdRS9o1qk4IKkqXgJlAvhzez6UmOK5raO23f9EHiD8GeJBfoifEGJsJoH0PKUhew0OCyN57gXo1ukIp-S2lnj8qzc2OdA-Hx20HOwJRT1uH_3J1oeiOnlrHrDOYg876G6ZhgdYm6KrSt0WnOdfuBC3tpVYqcVmLCXeFfOLy7imRkN_pDBmEW-RwIGSoaZwKcsAGiyqImWMS09O7bsagKem-AwmMcgkPspim-bRoN4xN'
    ],
    colors: [
      { name: 'Champagne Silk', hex: '#E8DCB8' }
    ],
    sizes: ['34', '36', '38', '40', '42'],
    inStock: true,
    stockCount: 7
  },
  {
    id: 'lumina-pendant-necklace',
    name: 'Lumina Pendant Necklace',
    subtitle: '18k Solid Gold, White Diamond',
    price: 890.00,
    rating: 5.0,
    reviewsCount: 14,
    category: 'Jewelry',
    gender: 'Women',
    description: 'An architectural hexagonal pendant framing a brilliant-cut 0.50ct VS1 white diamond on a delicate 18k solid gold chain.',
    details: [
      '18k Solid Yellow Gold',
      '0.50ct VS1 Clarity, F Color Natural Diamond',
      'Adjustable 42-45cm chain',
      'IGI Certificate of Authenticity included'
    ],
    shippingInfo: 'Secured armored courier delivery with signature.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBFoiEfuZlua7P3jS0u5ydxncxHegyfaRfSQg5lhDaSFTTsTsFsTGmh1xI5vK_5WQFf01xGVPTlT2449jN9vvktvaLSKTDnlm05WD182XdZ85bHChPRvRgTzNHJDeKM9WjR6NZGDdAf-3StHNNd3W4wA59o6ZPXGx-cpAAf1njrZnpub3esBGWiYnKpNv-KrKAbE3ysHmtKKhxL8DjOb5UC_02PdIBBA714wc1b7PXN36ApJqD1XEiw'
    ],
    colors: [
      { name: '18k Solid Gold', hex: '#E5C158' }
    ],
    sizes: ['One Size'],
    inStock: true,
    stockCount: 6
  },
  {
    id: 'architectural-mules',
    name: 'Architectural Mules',
    subtitle: 'Nappa Leather, Taupe, Size 38',
    price: 620.00,
    rating: 4.8,
    reviewsCount: 25,
    category: 'Footwear',
    gender: 'Women',
    description: 'Sculptural block heel mules crafted in buttery soft Italian nappa leather with an origami-folded vamp and cushioned leather footbed.',
    details: [
      '100% Italian Nappa Leather',
      '65mm sculptural block heel',
      'Square open toe',
      'Handcrafted in Tuscany'
    ],
    shippingInfo: 'Free shipping with luxury travel shoe bags.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuBaXfVQEHD0gkXlP1yCE2IUgQylHHZtvjpa--WqjMp8Hmn-oe2cTLO3dBjjjy139OoN94LUTE_18F0TsxdeEQwngZlbTpeoT-_ZfE3SEVF8gqHan5DsGzSRw_Sajl4ccUcxZW0Ln8Nd1bw2T1D9RmlF9WBaHerwiI2p9XXf7uCp7YPg7OR4YuGuTVaHfreiNyOQCN7iWvzbCiC5zNfbBXLzNlltjOOGdSrelE4oCWksh7P9dQ-_V0q2'
    ],
    colors: [
      { name: 'Taupe Nappa', hex: '#A89F91' },
      { name: 'Black', hex: '#111111' }
    ],
    sizes: ['36', '37', '38', '39', '40', '41'],
    inStock: true,
    stockCount: 9
  },
  {
    id: 'linen-suit-blazer',
    name: 'Linen Suit Blazer',
    subtitle: 'Tailored Pure White Linen',
    price: 245.00,
    rating: 4.8,
    reviewsCount: 30,
    category: 'Women',
    gender: 'Women',
    description: 'A crisp, single-breasted white tailored linen blazer designed with clean minimalist lines, notch lapels, and horn buttons.',
    details: [
      '100% Belgian Master of Linen certified fabric',
      'Breathable lightweight cupro half-lining',
      'Flap pockets and back vent',
      'Dry clean only'
    ],
    shippingInfo: 'Free express shipping.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCtq21SYEeoAF8qFv0wZaWsWvx_YAc_hJxeHa5ZIQO7WhKBHO0xYnrwMMzNE0oX_hxuTwn9dgWHBjO8JKNeh0D4isLQuSlgweRLI3Zl8Qt1GMuagQ4aQjXaXhTxeQ9fFQuSzYhjKneHyvXyYiehjjr043nVIR-O1RZamTsCAH8RK3sSTPWUbkUU8f7MzbEB6VVL0NRJCxFF69Eiw6ecdLcIRudzz7HYMfpyvOO7D20a8FdFs2qV95v8'
    ],
    colors: [
      { name: 'Pure White', hex: '#FFFFFF' }
    ],
    sizes: ['XS', 'S', 'M', 'L'],
    inStock: true,
    stockCount: 10
  },
  {
    id: 'chain-link-necklace',
    name: 'Chain Link Necklace',
    subtitle: 'Textured Heavy Gold Plate',
    price: 120.00,
    rating: 4.7,
    reviewsCount: 44,
    category: 'Jewelry',
    gender: 'Women',
    description: 'Chunky statement collar necklace featuring textured hand-hammered oval links in luminous 18k gold vermeil.',
    details: [
      '18k Gold Vermeil over recycled sterling silver',
      '42cm collar length',
      'Custom toggle closure',
      'Tarnish-resistant protective seal'
    ],
    shippingInfo: 'Includes travel velvet pouch.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuCLyS0qJyonEZIqMVmRRrVm-zw0B_6yM7geeErdjn2rpGf1KyEDq91ZDI-AUJOKOC3KSMvjNxbCqU_ydjVQDPdvh1DPOY5RiLpiRpHPEhORK6DWTy6_YHK44h_F8csxsj9dtNal2s932qdZKWFcCJHvw4uoDW4STZ7sBAqpH2Z-SgisaZARrK-NoJevuw_B2RtHwpm-nafct8UU3Ak2H_QPMzCb2vreg8Gn6grYmgr6wGAscnQzU67c'
    ],
    colors: [
      { name: '18k Gold Vermeil', hex: '#D4AF37' }
    ],
    sizes: ['One Size (42cm)'],
    inStock: true,
    stockCount: 17
  },
  {
    id: 'classic-leather-tote',
    name: 'Classic Leather Tote',
    subtitle: 'Calfskin Top Handle Bag',
    price: 350.00,
    rating: 4.9,
    reviewsCount: 39,
    category: 'Bags',
    gender: 'Women',
    description: 'Architectural top-handle bag in smooth black calfskin with turnlock closure and gold hardware accents.',
    details: [
      '100% Smooth Italian Calfskin',
      'Gold finish turnlock and key bell charm',
      'Structured reinforced base',
      'Detachable shoulder strap'
    ],
    shippingInfo: 'Free insured delivery.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuAuKp6Zzca3CCHPXQeK81SsIZ2e7NT4Q241abk7sjnlDAwSqKuakVZ7uc1iMEkT9JNEsEvUmMKfFxpsvc3lgIWImqZTXAnbeI056vplpxPt6EbGwl6L0qxWaat4-lRmvQz_CCN4ASbex1drh455PWPZrzjEN9LocjFeLK_WRfxGEyWcMJbOR0fKLRseIxCUegiDHWtI633C0PCn6os9CkcdVkyTuLUUUqidTxu0FKVAB2I47WRw4M6q'
    ],
    colors: [
      { name: 'Noir Black', hex: '#0a0a0a' }
    ],
    sizes: ['One Size'],
    inStock: true,
    stockCount: 12
  },
  {
    id: 'strappy-evening-heels',
    name: 'Strappy Evening Heels',
    subtitle: 'Pointed Toe Stiletto Sandal',
    price: 195.00,
    rating: 4.8,
    reviewsCount: 26,
    category: 'Footwear',
    gender: 'Women',
    description: 'Sensational black leather strappy evening heels with delicate cross-ankle lacing, pointed toe silhouette, and 85mm stiletto heel.',
    details: [
      'Premium kidskin leather upper and lining',
      '85mm lacquered stiletto heel',
      'Adjustable wrap ankle straps',
      'Padded leather footbed'
    ],
    shippingInfo: 'Free express shipping.',
    images: [
      'https://lh3.googleusercontent.com/aida-public/AB6AXuC0HGa0TxaUQnM_3KZVIUkmuE3McMlOsiqcDq4I9sdoR7PWrMowCgq_4iB_i98mEEssX7ENdgg0kxNmuNo7jCCY6D84hMYdh7bGHIjiPXHcRpqMWfCPDvVYRo8FxzLWyk3c-9bRMugr6NzVukrb1q6-Wc0fGHmJ_2ue-Q6-wTBVeGTiy3mzypaNoYqs6XSKfG9KwkZd2ZrFfYxwlIniOuC9yGcVT14mhy0XfG_C6xND6Tv71h_tXt8r'
    ],
    colors: [
      { name: 'Black Patent', hex: '#000000' }
    ],
    sizes: ['36', '37', '38', '39', '40'],
    inStock: true,
    stockCount: 13
  }
];
