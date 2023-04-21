import { Prisma } from "~/vendors";

export default defineEventHandler(async (event) => {
  const id = event.context.params!.id as string;

  const todo = await Prisma.todo.findFirst({ where: { id } });

  if (!todo) return { todo: null, message: "La tarea no se pudo encontrar", OK: false };

  return { todo, message: "La tarea fue encontrada", OK: true };
});
