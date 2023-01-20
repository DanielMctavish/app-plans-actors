import Joi from "joi"

export const VerifyJoi = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    id_actor: Joi.string().required()
})