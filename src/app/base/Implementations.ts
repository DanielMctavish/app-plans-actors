
export interface IAuth {
    Actor_id: string
    Auth: boolean
}

export interface IPlan {
    name: string
    description: string
    id_actor: string
}

export default interface IManagement {
    CreatePlan(auth: IAuth, Plan: IPlan): Promise<boolean>
    ReadPlan(auth: IAuth, Plan: IPlan): Promise<boolean>
    UpdatePlan(auth: IAuth, Plan: IPlan): Promise<boolean>
    DeletePlan(auth: IAuth, id_plan: string): Promise<boolean>
}

//-----------------------------------------------------------------------------------
enum levels {
    BASIC = "BASIC",
    MEDIUM = "MEDIUM",
    SUPER = "SUPER"
}

export interface IActor {
    id: string
    name: string
    email: string
    phone: string
    level: levels
    Super: boolean
    auth: boolean
}


export interface IActorsManagement {
    CreateActor(Actor: IActor): Promise<boolean>
    DeleteActor(id: boolean, verifySuperActor: boolean): Promise<boolean>
}

//----------------------------------------------------------------------------------

export interface IValidator {
    VerifyFields_Joi(Schema: any, data: object): Promise<boolean>
    VerifyActorTrue(Actor: IActor): Promise<boolean>
    VerifyActorSuper(Actor: IActor): Promise<boolean>
    verifyPlanTrue(Plan: IPlan): Promise<boolean>
}


//-------------------------------------------------------------------------------------