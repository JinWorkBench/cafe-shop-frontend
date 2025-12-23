import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          {/* 로고 */}
          <Link
            href="/"
            className="text-3xl font-bold text-amber-900 hover:text-amber-800 transition-colors"
          >
            BRILYENT
          </Link>

          {/* 네비게이션 바 */}
          <nav>
            <ul className="flex items-center space-x-8">
              <li>
                <Link
                  href="/about"
                  className="text-gray-700 hover:text-amber-900 transition-colors font-bold"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/shop"
                  className="text-gray-700 hover:text-amber-900 transition-colors font-bold"
                >
                  Shop
                </Link>
              </li>
              <li>
                <Link
                  href="/board"
                  className="text-gray-700 hover:text-amber-900 transition-colors font-bold"
                >
                  Board
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
