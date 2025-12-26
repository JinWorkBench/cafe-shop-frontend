import ProductCard from "./ProductCard";

export default function ProductGrid() {
  return (
    <section>
      {/* 상품 수 표시 */}
      <div className="mb-6">
        <p className="text-slate-400">
          총 <span className="text-slate-600 font-semibold">4</span>개의 상품
        </p>
      </div>

      {/* 그리드 컨테이너 */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-4 lg:gap-8">
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
}
