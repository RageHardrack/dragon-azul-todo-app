import { Prisma } from "~/vendors";

export default defineEventHandler(async (event) => {
  const todos = await Prisma.todo.findMany();

  return { todos, OK: true };
});