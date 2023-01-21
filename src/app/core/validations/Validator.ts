import { IActor, IPlan, IValidator } from "../../base/Implementations";
import { OperationsDb } from "../../databases/OperationsDb";
import Joi from "joi";
const operations = new OperationsDb()


export class validator implements IValidator {

    public async VerifyFields_Joi(Schema: Joi.AnySchema, data: object) {
        try {
            await Schema.validateAsync(data)
            console.log('validação passou!', data)
            return true
        } catch (error:any) {
            console.log({error: error.message});
            return false
        }
    }

    public async VerifyActorTrue(Actor: IActor) {
        const currentActor = operations.FindActorById(Actor.id)
        if (!currentActor) {
            return false
        }
        return true;
    }

    public async VerifyActorSuper(Actor: IActor) {
        const currentActor = await operations.FindActorById(Actor.id)
        if (!currentActor) {
            console.log('nenhum autor encontrado');
            return false
        } else {
           return  currentActor.super === true ? true : false;
        }
    }

    public async verifyPlanTrue(plan: IPlan) {
        const currentPlan = operations.FindPlanById(plan.id_actor)
        if (!currentPlan) {
            return false
        }
        return true;
    }
}