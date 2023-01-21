"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PlansDb = exports.ActorsDb = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
exports.ActorsDb = prisma.actors;
exports.PlansDb = prisma.plans;
