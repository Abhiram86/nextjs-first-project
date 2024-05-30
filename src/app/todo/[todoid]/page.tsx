import { Delete } from "@/components/delete";
import db from "../../../../prisma/db";

export default async function Todo({ params }: { params: { todoid: string } }) {
  const { todoid } = params;
  const todo = await db.todo.findUnique({ where: { id: parseInt(todoid) } });
  return (
    <main>
      <h1 className="text-3xl text-center text-zinc-100 font-bold tracking-wider pt-6 px-4">
        {todo?.title}
      </h1>
      <div className="text-zinc-200 text-xl font-semibold tracking-wide text-center mt-8">
        <p>{todo?.body}</p>
      </div>
      <Delete />
    </main>
  );
}
