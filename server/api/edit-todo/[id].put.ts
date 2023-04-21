import { Prisma } from "~/vendors";

export default defineEventHandler(async (event) => {
  const id = event.context.params!.id as string;
  const body = await readBody(event);

  const response = await Prisma.todo.update({ data: body, where: { id } });

  if (!response) return { message: "La tarea no se pudo editar", OK: false };

  return { message: "Tarea actualizada correctamente", OK: true };
});
