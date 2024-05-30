import Link from "next/link";
import db from "../../prisma/db";

export default async function GetTodos() {
  const todos = await db.todo.findMany({});
  return (
    <section className="flex flex-col items-center mt-8 text-center">
      <ul className="text-zinc-300 tracking-wide leading-8 font-semibold text-xl">
        {todos.length > 0 ? (
          todos.map((todo) => (
            <Link href={`/todo/${todo.id}`} key={todo.id}>
              <li>{todo.title}</li>
            </Link>
          ))
        ) : (
          <li className="text-zinc-500 text-center text-2xl">
            No Todos Are Made ...
          </li>
        )}
      </ul>
    </section>
  );
}
