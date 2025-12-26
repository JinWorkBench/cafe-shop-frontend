import ProductCard from "./ProductCard";
import { MOCK_PRODUCTS, CATEGORY_MAP } from "@/lib/mockProducts";

const FILTER_OPTIONS = [
  { key: "all", label: "전체" },
  { key: "beans", label: CATEGORY_MAP.beans },
  { key: "goods", label: CATEGORY_MAP.goods },
] as const;

export default function ProductGrid() {
  return (
    <section>
      {/* 카테고리 필터 버튼 */}
      <div className="mb-6 flex gap-3">
        {FILTER_OPTIONS.map((option) => (
          <button
            key={option.key}
            className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
              option.key === "all"
                ? "bg-slate-800 text-white"
                : "bg-slate-100 text-slate-700 hover:bg-slate-200"
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>

      {/* 상품 수 표시 */}
      <div className="mb-6">
        <p className="text-slate-400">
          총{" "}
          <span className="text-slate-600 font-semibold">
            {MOCK_PRODUCTS.length}
          </span>
          개의 상품
        </p>
      </div>

      {/* 그리드 컨테이너 */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-4 lg:gap-8">
        {/* 카드 */}
        {MOCK_PRODUCTS.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
