import { IActorsManagement } from "../../base/Implementations";

export class Actors implements IActorsManagement{
    public async CreateSuperActor(){
        return true
    }
    public async CreateActor(){
        return true
    }
    public async DeleteActor(){
        return true
    }
}