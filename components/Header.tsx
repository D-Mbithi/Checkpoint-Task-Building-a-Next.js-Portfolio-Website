"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Projects", path: "/projects" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contacts" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 py-4 px-4 md:px-8 bg-slate-900 border-b border-slate-500/40">
      <nav className="max-w-6xl mx-auto flex items-center justify-between">
        <Link href="/" className="group flex items-center gap-2">
          <span className="h-8 w-8 rounded-lg bg-linear-to-tr from-indigo-500 to-violet-600 flex items-center justify-center font-mono font-bold text-white text-xl shadow-md group-hover:scale-105 transition-transform duration-200">
            D
          </span>
          <span className="text-2xl uppercase font-bold tracking-tight bg-linear-to-r from-sky-50 to-sky-400 bg-clip-text text-transparent group-hover:from-white group-hover:to-zinc-200 transition-all duration-300">
            Dennis Mbithi
          </span>
        </Link>

        <ul className="flex items-center gap-1 bg-slate-700/60 p-1 rounded-full border border-slate-700/50">
          {navItems.map((item) => {
            const isActive = pathname === item.path;
            return (
              <li key={item.path}>
                <Link
                  href={item.path}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 block ${isActive
                      ? "bg-slate-500 text-white shadow-sm"
                      : "text-slate-200 hover:text-slate-100"
                    }`}
                >
                  {item.name}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </header>
  );
}
