import Joi from "joi"

export const SchemmaPlans = Joi.object({
    name: Joi.string().required(),
    description: Joi.string().required(),
    id_actor: Joi.string().required()
})

export const SchemmaActors = Joi.object({
    name: Joi.string().required(),
    email: Joi.string().required(),
    phone: Joi.string().required(),
    level: Joi.string().required(),
    Super: Joi.boolean().optional(),
    auth: Joi.boolean().optional()
})