import Link from "next/link";

export default function Header() {
  return (
    <header className="w-full border-b border-gray-200">
      <div className="max-w-5xl mx-auto px-4">
        <div className="h-16 flex items-center justify-between">
          {/* 로고 */}
          <Link
            href="/"
            className="text-2xl font-bold text-amber-900 hover:text-amber-800 transition-colors"
          >
            BRILYENT
          </Link>
          <nav>nav</nav>
        </div>
      </div>
    </header>
  );
}
