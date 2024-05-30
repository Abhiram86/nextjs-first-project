"use client";

import deleteTodo from "@/actions/delete";
import { usePathname } from "next/navigation";

export const Delete = () => {
  const pathname = usePathname();
  const id = parseInt(pathname?.split("/")[2]);

  return (
    <form action={() => deleteTodo(id)} className="w-fit h-fit mx-auto">
      <button className="text-zinc-200 bg-red-700 text-center py-[0.1rem] px-4 pb-[0.3rem] text-xl rounded-lg block mx-auto mt-8 hover:bg-red-800 transition-all active:scale-105">
        Delete
      </button>
    </form>
  );
};
