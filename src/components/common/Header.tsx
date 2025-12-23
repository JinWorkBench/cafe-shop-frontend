"use client";

import Link from "next/link";
import { useState } from "react";
import NavigationLinks from "./NavigationLinks";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 w-full border-b border-gray-200 bg-white z-50">
      <div className="max-w-5xl mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          {/* 로고 */}
          <Link
            href="/"
            className="text-3xl font-bold text-amber-900 hover:text-amber-800 transition-colors"
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

          {isMobileMenuOpen && (
            <nav className="md:hidden absolute left-0 top-16 w-full bg-white border-t border-b border-gray-200 py-4">
              <NavigationLinks />
            </nav>
          )}
        </div>
      </div>
    </header>
  );
}
