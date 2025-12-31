import type { Product } from "@/types/product";
import { CATEGORY_MAP, TAG_MAP } from "@/constants";
import Image from "next/image";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  // 할인율(%) 계산
  const discountPercent = product.isDiscounted
    ? Math.round(
        ((product.originalPrice - product.discountPrice) /
          product.originalPrice) *
          100,
      )
    : 0;

  return (
    <div className="bg-white rounded-lg border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow">
      {/* 이미지 영역 */}
      <div className="relative bg-gray-200 aspect-square overflow-hidden">
        {/* 이미지 */}
        <Image
          fill
          src={product.image}
          alt={product.name}
          className="object-cover"
        />

        {/* 할인 배지 */}
        {product.isDiscounted && (
          <div className="absolute top-3 right-3 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded">
            {discountPercent}%
          </div>
        )}

        {/* 품절 오버레이 */}
        {!product.inStock && (
          <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
            <p className="text-white font-bold text-lg">품절</p>
          </div>
        )}
      </div>

      {/* 상품 정보 영역 */}
      <div className="p-3">
        {/* 브랜드 + 카테고리 */}
        <div className="flex items-center justify-between mb-1">
          <p className="text-gray-500 text-xs">{product.brand}</p>
          <p className="text-gray-500 text-xs">
            {CATEGORY_MAP[product.category]}
          </p>
        </div>

        {/* 상품명 */}
        <p className="text-gray-900 font-semibold text-sm mb-2 line-clamp-2">
          {product.name}
        </p>

        {/* 가격 */}
        <div className="mb-2">
          {product.isDiscounted ? (
            <>
              <p className="text-gray-400 text-xs line-through">
                ₩{product.originalPrice.toLocaleString()}
              </p>
              <p className="text-red-600 font-bold text-sm">
                ₩{product.discountPrice.toLocaleString()}
              </p>
            </>
          ) : (
            <p className="text-gray-900 font-bold text-sm">
              ₩{product.originalPrice.toLocaleString()}
            </p>
          )}
        </div>

        {/* 배지 */}
        <div className="flex flex-wrap gap-1 mb-2">
          {product.tags?.map((tag) => (
            <span
              key={tag}
              className="bg-pink-100 text-pink-700 text-xs font-semibold px-2 py-0.5 rounded"
            >
              {TAG_MAP[tag]}
            </span>
          ))}
        </div>

        {/* 평점과 리뷰 */}
        <div className="flex items-center gap-2">
          <p className="text-yellow-500 text-xs font-semibold">
            ★ {product.rating}
          </p>
          <p className="text-gray-500 text-xs">({product.reviewCount})</p>
        </div>
      </div>
    </div>
  );
}
