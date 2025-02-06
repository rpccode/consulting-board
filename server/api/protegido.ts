import { getServerSession } from "#auth";

export default defineEventHandler(async (event) => {
  const session = await getServerSession(event);
  
  if (!session) {
    throw createError({ statusCode: 401, statusMessage: "No autorizado" });
  }

  return { message: "Acceso concedido" };
});
