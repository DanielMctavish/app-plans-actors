import { IActor, IActorsManagement } from "../../base/Implementations";
import { OperationsDb } from "../../databases/OperationsDb";
import { validator } from "../validations/Validator";
import { SchemmaActors } from "../../../config/Joi";
const operations = new OperationsDb()
const validate = new validator()

export class Actors implements IActorsManagement {
    public async CreateActor(data: IActor): Promise<boolean> {
        validate.VerifyFields_Joi(SchemmaActors, data)
        return false
        try {
            await operations.CreateNewActor(data)
            return true
        } catch (error) {
            console.log("houve um erro ", error)
            return false
        }
    }

    public async DeleteActor(): Promise<boolean> {
        return true
    }
}