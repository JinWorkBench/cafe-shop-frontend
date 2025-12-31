import { CATEGORY_MAP, TAG_MAP } from "@/constants";

export type CategoryType = keyof typeof CATEGORY_MAP;
export type TagType = keyof typeof TAG_MAP;

// 상품 리스트 응답
export interface Product {
  id: string;
  modelName: string;
  name: string;
  brand: string;
  category: CategoryType;
  originalPrice: number;
  discountPrice: number;
  isDiscounted: boolean;
  inStock: boolean;
  image: string;
  rating: number;
  reviewCount: number;
  tags?: TagType[];
}
