import { Prisma } from "~/vendors";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const newTodo = await Prisma.todo.create({ data: body });

  if (!newTodo) {
    return { message: "Hay un problema al crear tu tarea", OK: false };
  }

  return { message: "Tarea creada exitosamente", OK: true };
});
