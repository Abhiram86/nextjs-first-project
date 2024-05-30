"use client";

import Link from "next/link";
import { Links } from "./Links";
import { usePathname } from "next/navigation";

export const Navbar = () => {
  const pathname = usePathname();
  return (
    <header className="flex flex-row justify-between px-4 items-center mt-2 border-b-2 border-zinc-800 pb-2">
      <Link href={"/"}>
        <h1 className="text-3xl p-2 px-4 bg-zinc-100 text-zinc-900 rounded-xl w-fit h-fit">
          T
        </h1>
      </Link>
      <ul className="flex flex-row gap-x-3 md:gap-x-5">
        {Links.map((link) => (
          <li
            className={`text-base font-semibold ${
              pathname === link.path ? "text-zinc-100" : "text-zinc-500"
            }`}
            key={link.name}
          >
            <Link href={link.path}>{link.name}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
};
