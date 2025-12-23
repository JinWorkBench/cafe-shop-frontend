"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import NavigationLinks from "./NavigationLinks";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // 메뉴 영역 참조 (useRef!!)
  const menuRef = useRef<HTMLDivElement>(null);

  // 메뉴 닫기 함수
  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  // 외부 클릭 감지 로직
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      // 메뉴 영역 밖을 클릭했는지 확인
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        closeMenu();
      }
    };

    // 메뉴가 열려있을 때만 리스너 추가
    if (isMobileMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    }

    // 클린업: 컴포넌트 언마운트 또는 메뉴 닫힐 때 리스너 제거
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMobileMenuOpen]);

  return (
    <header className="sticky top-0 w-full border-b border-gray-200 bg-white z-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          {/* 로고 */}
          <Link
            href="/"
            className="text-2xl font-bold text-amber-900 hover:text-amber-800 transition-colors"
          >
            BRILYENT
          </Link>

          {/* 네비게이션 (PC) */}
          <nav className="hidden md:block">
            <NavigationLinks />
          </nav>

          {/* 메뉴 버튼 (Mobile) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-md text-gray-700 hover:bg-gray-100 transition-colors"
            aria-label="메뉴 열기"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {/* 네비게이션 (Mobile) */}
          {isMobileMenuOpen && (
            <nav
              ref={menuRef}
              className="md:hidden absolute left-0 top-16 w-full bg-white border-t border-b border-gray-200 py-4 z-40"
            >
              <NavigationLinks />
            </nav>
          )}

          {/* 본문 오버레이 */}
          {isMobileMenuOpen && (
            <div
              onClick={closeMenu}
              className="fixed inset-0 bg-black bg-opacity-50 md:hidden"
              style={{ top: "64px" }}
            />
          )}
        </div>
      </div>
    </header>
  );
}
