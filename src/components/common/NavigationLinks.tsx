import Link from "next/link";

export default function NavigationLinks() {
  const links = [
    { href: "/about", label: "About" },
    { href: "/shop", label: "Shop" },
    { href: "/board", label: "Board" },
  ];

  return (
    <ul className="flex flex-col md:flex-row px-4 md:space-x-8 space-y-3 md:space-y-0">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className="text-gray-700 hover:text-amber-900 transition-colors font-bold"
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
}
