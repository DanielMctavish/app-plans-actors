"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SchemmaActors = exports.SchemmaPlans = void 0;
const joi_1 = __importDefault(require("joi"));
exports.SchemmaPlans = joi_1.default.object({
    name: joi_1.default.string().required(),
    description: joi_1.default.string().required(),
    id_actor: joi_1.default.string().required()
});
exports.SchemmaActors = joi_1.default.object({
    name: joi_1.default.string().required(),
    email: joi_1.default.string().required(),
    phone: joi_1.default.string().required(),
    level: joi_1.default.string().required(),
    Super: joi_1.default.boolean().optional(),
    auth: joi_1.default.boolean().optional()
});
