import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export const ActorsDb = prisma.actors
export const PlansDb = prisma.plans