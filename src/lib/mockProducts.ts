export type CategoryType = keyof typeof CATEGORY_MAP;
export type TagType = keyof typeof TAG_MAP;

// 카테고리 매핑
export const CATEGORY_MAP = {
  beans: "원두",
  goods: "굿즈",
} as const;

// 배지 매핑
export const TAG_MAP = {
  freeShipping: "무료배송",
  coupon: "쿠폰",
  newProduct: "신상품",
  limitedTime: "한정판",
  hotSale: "인기상품",
} as const;

// 상품 리스트 정보
export interface Product {
  id: string;
  modelName: string;
  name: string;
  brand: string;
  category: CategoryType;

  // 가격 정보
  originalPrice: number;
  discountPrice: number;
  isDiscounted: boolean;

  // 상품 상태
  inStock: boolean;
  image: string;

  // 평가 정보
  rating: number;
  reviewCount: number;

  // 배지 정보
  tags?: TagType[];
}

export const MOCK_PRODUCTS: Product[] = [
  {
    id: "1",
    modelName: "eth-yega-250",
    name: "에티오피아 예가체프",
    brand: "BRILYENT",
    category: "beans",
    originalPrice: 12000,
    discountPrice: 10800,
    isDiscounted: true,
    inStock: true,
    image: "/products/ethiopia.jpg",
    rating: 4.8,
    reviewCount: 24,
    tags: ["freeShipping", "coupon"], // 👈 추가
  },
  {
    id: "2",
    modelName: "col-huila-250",
    name: "콜롬비아 후일라",
    brand: "BRILYENT",
    category: "beans",
    originalPrice: 13000,
    discountPrice: 13000,
    isDiscounted: false,
    inStock: true,
    image: "/products/colombia.jpg",
    rating: 4.6,
    reviewCount: 18,
    tags: ["freeShipping"], // 👈 추가
  },
  {
    id: "3",
    modelName: "ken-aa-250",
    name: "케냐 AA",
    brand: "BRILYENT",
    category: "beans",
    originalPrice: 14000,
    discountPrice: 12600,
    isDiscounted: true,
    inStock: true,
    image: "/products/kenya.jpg",
    rating: 4.7,
    reviewCount: 31,
    tags: ["coupon", "hotSale"], // 👈 추가
  },
  {
    id: "4",
    modelName: "ind-mandeling-250",
    name: "인도네시아 만델링",
    brand: "BRILYENT",
    category: "beans",
    originalPrice: 11000,
    discountPrice: 11000,
    isDiscounted: false,
    inStock: true,
    image: "/products/indonesia.jpg",
    rating: 4.5,
    reviewCount: 15,
    tags: ["freeShipping"],
  },
  {
    id: "5",
    modelName: "house-blend-250",
    name: "하우스 블렌드",
    brand: "BRILYENT",
    category: "beans",
    originalPrice: 10000,
    discountPrice: 8500,
    isDiscounted: true,
    inStock: true,
    image: "/products/house-blend.jpg",
    rating: 4.9,
    reviewCount: 56,
    tags: ["freeShipping", "coupon", "hotSale"],
  },
  {
    id: "6",
    modelName: "peru-cusco-250",
    name: "페루 쿠스코",
    brand: "BRILYENT",
    category: "beans",
    originalPrice: 12500,
    discountPrice: 12500,
    isDiscounted: false,
    inStock: true,
    image: "/products/peru.jpg",
    rating: 4.4,
    reviewCount: 12,
    tags: ["newProduct"],
  },
  {
    id: "7",
    modelName: "bra-santos-250",
    name: "브라질 산토스",
    brand: "BRILYENT",
    category: "beans",
    originalPrice: 11500,
    discountPrice: 10350,
    isDiscounted: true,
    inStock: false,
    image: "/products/brazil.jpg",
    rating: 4.7,
    reviewCount: 22,
    tags: ["coupon"],
  },
  {
    id: "8",
    modelName: "gua-antigua-250",
    name: "과테말라 안티구아",
    brand: "BRILYENT",
    category: "beans",
    originalPrice: 13500,
    discountPrice: 13500,
    isDiscounted: false,
    inStock: true,
    image: "/products/guatemala.jpg",
    rating: 4.8,
    reviewCount: 28,
  },
  {
    id: "9",
    modelName: "espresso-blend-250",
    name: "에스프레소 블렌드",
    brand: "BRILYENT",
    category: "beans",
    originalPrice: 10500,
    discountPrice: 9450,
    isDiscounted: true,
    inStock: true,
    image: "/products/espresso-blend.jpg",
    rating: 4.6,
    reviewCount: 19,
  },
  {
    id: "10",
    modelName: "tan-peaberry-250",
    name: "탄자니아 피파",
    brand: "BRILYENT",
    category: "beans",
    originalPrice: 12000,
    discountPrice: 12000,
    isDiscounted: false,
    inStock: true,
    image: "/products/tanzania.jpg",
    rating: 4.9,
    reviewCount: 41,
    tags: ["freeShipping", "coupon"],
  },
  {
    id: "11",
    modelName: "uga-bugisu-250",
    name: "우간다 부기수",
    brand: "BRILYENT",
    category: "beans",
    originalPrice: 11800,
    discountPrice: 10620,
    isDiscounted: true,
    inStock: true,
    image: "/products/uganda.jpg",
    rating: 4.5,
    reviewCount: 17,
    tags: ["coupon", "newProduct"],
  },
  {
    id: "12",
    modelName: "crc-tarazu-250",
    name: "코스타리카 타라주",
    brand: "BRILYENT",
    category: "beans",
    originalPrice: 13000,
    discountPrice: 13000,
    isDiscounted: false,
    inStock: true,
    image: "/products/costa-rica.jpg",
    rating: 4.8,
    reviewCount: 26,
    tags: ["freeShipping", "hotSale"],
  },
];
