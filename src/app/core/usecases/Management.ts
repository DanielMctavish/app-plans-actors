import IManagement from "../../base/Implementations";
import { IAuth, IPlan } from "../../base/Implementations";
import { OperationsDb } from "../../databases/OperationsDb";
const operations = new OperationsDb()

export class Management implements IManagement {
    public async CreatePlan(auth: IAuth, Plan: IPlan) {
        if (auth.Auth === false) {
            console.log('autorização inválida para operação')
            return false;
        }
        operations.createNewPlan(Plan)
        return true
    }
    public async ReadPlan(auth: IAuth, Plan: IPlan) {
        if (auth.Auth === false) {
            console.log('autorização inválida para operação')
            return false;
        }
        return true
    }

    public async UpdatePlan(auth: IAuth, Plan: IPlan) {
        return true
    }

    public async DeletePlan() {
        return true
    }

}

