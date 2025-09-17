import { PrismaClient } from "@/lib/generated/prisma";  // 👈 вместо @prisma/client

declare global {
  // Чтобы не было лишних подключений в dev
  var prisma: PrismaClient | undefined;
}

const prismadb = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== "production") globalThis.prisma = prismadb;

export default prismadb;
