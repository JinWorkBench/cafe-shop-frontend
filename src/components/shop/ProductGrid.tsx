"use client";

import { useState, useEffect } from "react";
import ProductCard from "./ProductCard";
import { MOCK_PRODUCTS, CATEGORY_MAP } from "@/lib/mockProducts";

const FILTER_OPTIONS = [
  { key: "all", label: "전체" },
  { key: "beans", label: CATEGORY_MAP.beans },
  { key: "goods", label: CATEGORY_MAP.goods },
] as const;

export default function ProductGrid() {
  const [selectedCategory, setSelectedCategory] = useState<
    "all" | "beans" | "goods"
  >("all");
  const [searchInput, setSearchInput] = useState("");
  const [filteredProducts, setFilteredProducts] = useState(MOCK_PRODUCTS);

  // debounce 적용 필터링 로직
  useEffect(() => {
    const timer = setTimeout(() => {
      // 검색어와 카테고리로 동시에 필터링
      const results = MOCK_PRODUCTS.filter((product) => {
        // 검색어 필터링 (상품명, 대소문자 구분 안 함)
        const matchesSearch = product.name
          .toLowerCase()
          .includes(searchInput.toLowerCase());

        // 카테고리 필터링
        const matchesCategory =
          selectedCategory === "all" || product.category === selectedCategory;

        // 둘 다 만족해야 포함
        return matchesSearch && matchesCategory;
      });

      setFilteredProducts(results);
    }, 300); // 300ms debounce

    // 클린업: 새로운 입력이 들어오면 이전 timer 취소
    return () => clearTimeout(timer);
  }, [searchInput, selectedCategory]);

  return (
    <section>
      {/* 검색 입력 필드 */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="상품명으로 검색..."
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)} // 입력값 업데이트
          className="w-full px-4 py-2 border border-slate-300 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-slate-800"
        />
      </div>

      {/* 카테고리 필터 버튼 */}
      <div className="mb-6 flex gap-3">
        {FILTER_OPTIONS.map((option) => (
          <button
            key={option.key}
            onClick={() => setSelectedCategory(option.key)}
            className={`px-4 py-2 rounded-lg font-medium text-sm transition-colors ${
              selectedCategory === option.key
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
            {filteredProducts.length}
          </span>
          개의 상품
        </p>
      </div>

      {/* 그리드 컨테이너 */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 lg:grid-cols-4 lg:gap-8">
        {/* 카드 */}
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
