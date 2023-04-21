import { Prisma } from "~/vendors";

export default defineEventHandler(async (event) => {
  const id = event.context.params!.id as string;

  const response = await Prisma.todo.delete({ where: { id } });

  if (response) return { message: "La tarea no se pudo eliminar", OK: false };

  return { message: "Tarea eliminada correctamente", OK: true };
});
