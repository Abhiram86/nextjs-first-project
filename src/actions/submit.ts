"use server";

import { NextRequest } from "next/server";
import db from "../../prisma/db";
import { revalidatePath } from "next/cache";

export async function Submit(e: FormData) {
  const title = e.get("title") as string;
  const body = e.get("body") as string;
  if (title && title.length > 0 && body && body.length > 0) {
    const todo = await db.todo.create({
      data: {
        title: title,
        body: body,
      },
    });
    revalidatePath("/");
  }
}
