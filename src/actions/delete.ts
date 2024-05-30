"use server";

import db from "../../prisma/db";
import { redirect } from "next/navigation";

export default async function deleteTodo(id: number) {
  const response = await db.todo.delete({ where: { id } });
  redirect("/");
}
