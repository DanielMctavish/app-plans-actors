import { IActor, IPlan } from "../base/Implementations";
import { ActorsDb, PlansDb } from "./BaseRepositories";

export class OperationsDb {
    public async createNewPlan(Plan: IPlan) {
        await PlansDb.create({
            data: {
                name: Plan.name,
                description: Plan.description,
                actorsId: Plan.id_actor
            }
        })
    }
    public async CreateNewActor(Actor: IActor) {
        await ActorsDb.create({
            data: {
                name: Actor.name,
                email: Actor.email,
                phone: Actor.phone,
                levels: Actor.level,
                auth: false
            }
        })
    }
    public async FindActorById(id_actor: string) {
        const actor = await ActorsDb.findUnique({
            where: {
                id: id_actor
            }
        })
        return actor;
    }
    public async FindPlanById(id_plans: string) {
        await ActorsDb.findUnique({
            where: {
                id: id_plans
            }
        })
    }
    public async updatePlan(id_plans: string, data: IPlan) {
        await PlansDb.update({
            where: {
                id: id_plans
            },
            data: {
                name: data.name,
                description: data.description,
            }
        })
    }
}