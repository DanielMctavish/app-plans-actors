import { IActor, IActorsManagement } from "../../base/Implementations";
import { OperationsDb } from "../../databases/OperationsDb";
import { validator } from "../validations/Validator";
import { SchemmaActors } from "../../../config/Joi";
import { responseJoi } from "../validations/Validator";
const operations = new OperationsDb()
const validate = new validator()

export class Actors implements IActorsManagement {
    public async CreateActor(data: IActor): Promise<any> {
        await validate.VerifyFields_Joi(SchemmaActors, data)
        if (!responseJoi.success) {
            return responseJoi
        }

        try {
            await operations.CreateNewActor(data)
            return { status: 200, message: "autor criado com sucesso!", success: true }
        } catch (error) {
            return { status: 500, message: error, success: true }
        }
    }

    public async DeleteActor(): Promise<boolean> {
        return true
    }
}

