"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.OperationsDb = void 0;
const BaseRepositories_1 = require("./BaseRepositories");
class OperationsDb {
    createNewPlan(Plan) {
        return __awaiter(this, void 0, void 0, function* () {
            yield BaseRepositories_1.PlansDb.create({
                data: {
                    name: Plan.name,
                    description: Plan.description,
                    actorsId: Plan.id_actor
                }
            });
        });
    }
    CreateNewActor(Actor) {
        return __awaiter(this, void 0, void 0, function* () {
            yield BaseRepositories_1.ActorsDb.create({
                data: {
                    name: Actor.name,
                    email: Actor.email,
                    phone: Actor.phone,
                    levels: Actor.level,
                    auth: false
                }
            });
        });
    }
    FindActorById(id_actor) {
        return __awaiter(this, void 0, void 0, function* () {
            const actor = yield BaseRepositories_1.ActorsDb.findUnique({
                where: {
                    id: id_actor
                }
            });
            return actor;
        });
    }
    FindPlanById(id_plans) {
        return __awaiter(this, void 0, void 0, function* () {
            yield BaseRepositories_1.ActorsDb.findUnique({
                where: {
                    id: id_plans
                }
            });
        });
    }
    updatePlan(id_plans, data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield BaseRepositories_1.PlansDb.update({
                where: {
                    id: id_plans
                },
                data: {
                    name: data.name,
                    description: data.description,
                }
            });
        });
    }
}
exports.OperationsDb = OperationsDb;
