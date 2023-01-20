import { IActor, IPlan, IValidator } from "../../base/Implementations";
import Joi from 'joi'
import { VerifyJoi } from "../../../config/Joi";
import { OperationsDb } from "../../databases/OperationsDb";
const operations = new OperationsDb()


export class validator implements IValidator {

    public async VerifyFields_Joi(Schema: any, data: object) {
        await VerifyJoi.validate(Schema, data)
        return true
    }

    public async VerifyActorTrue(Actor: IActor) {
        const currentActor = operations.FindActorById(Actor.id)
        if (!currentActor) {
            return false
        }
        return true;
    }

    public async VerifyActorSuper() {
        return true;
    }

    public async verifyPlanTrue(plan: IPlan) {
        const currentPlan = operations.FindPlanById(plan.id_actor)
        if (!currentPlan) {
            return false
        }
        return true;
    }
}