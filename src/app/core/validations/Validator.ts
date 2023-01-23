import { IActor, IPlan, IValidator } from "../../base/Implementations";
import { OperationsDb } from "../../databases/OperationsDb";
import Joi from "joi";
const operations = new OperationsDb()


interface isValid {
    success: boolean
    message: string
    status: number
}

export let responseJoi:isValid;
export class validator implements IValidator {

    public async VerifyFields_Joi(Schema: Joi.AnySchema, data: object):Promise<any> {
        try {
            await Schema.validateAsync(data)
            responseJoi = {
                success: true,
                message: 'validação passou!',
                status: 200
            }
        } catch (error: any) {
            responseJoi = {
                success: false,
                message: error.message,
                status: 400
            }
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
            return currentActor.super === true ? true : false;
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