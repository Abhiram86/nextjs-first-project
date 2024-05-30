// import db from "../../prisma/db";
// import Link from "next/link";

import GetTodos from "@/loadings/gettodos";
import { Suspense } from "react";

export default async function Home() {
  // const todos = await db.todo.findMany({});
  return (
    <main>
      <h1 className="text-center text-zinc-100 px-6 text-3xl md:text-5xl font-bold tracking-wider pt-6">
        create your plans for the future
      </h1>
      <Suspense
        fallback={
          <p className="text-zinc-100 text-center mt-4 text-xl font-semibold md:text-2xl tracking-wide">
            Loading...
          </p>
        }
      >
        <GetTodos />
      </Suspense>
    </main>
  );
}
