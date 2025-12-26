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
        {/* 더미 카드 1 */}
        <div className="bg-gray-100 rounded-lg aspect-square flex items-center justify-center">
          <p className="text-slate-400">상품 1</p>
        </div>

        {/* 더미 카드 2 */}
        <div className="bg-gray-100 rounded-lg aspect-square flex items-center justify-center">
          <p className="text-slate-400">상품 2</p>
        </div>

        {/* 더미 카드 3 */}
        <div className="bg-gray-100 rounded-lg aspect-square flex items-center justify-center">
          <p className="text-slate-400">상품 3</p>
        </div>

        {/* 더미 카드 4 */}
        <div className="bg-gray-100 rounded-lg aspect-square flex items-center justify-center">
          <p className="text-slate-400">상품 4</p>
        </div>
      </div>
    </section>
  );
}
