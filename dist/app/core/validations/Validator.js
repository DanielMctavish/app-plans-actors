"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.validator = exports.responseJoi = void 0;
const OperationsDb_1 = require("../../databases/OperationsDb");
const operations = new OperationsDb_1.OperationsDb();
class validator {
    VerifyFields_Joi(Schema, data) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield Schema.validateAsync(data);
                exports.responseJoi = {
                    success: true,
                    message: 'validação passou!',
                    status: 200
                };
            }
            catch (error) {
                exports.responseJoi = {
                    success: false,
                    message: error.message,
                    status: 400
                };
            }
        });
    }
    VerifyActorTrue(Actor) {
        return __awaiter(this, void 0, void 0, function* () {
            const currentActor = operations.FindActorById(Actor.id);
            if (!currentActor) {
                return false;
            }
            return true;
        });
    }
    VerifyActorSuper(Actor) {
        return __awaiter(this, void 0, void 0, function* () {
            const currentActor = yield operations.FindActorById(Actor.id);
            if (!currentActor) {
                console.log('nenhum autor encontrado');
                return false;
            }
            else {
                return currentActor.super === true ? true : false;
            }
        });
    }
    verifyPlanTrue(plan) {
        return __awaiter(this, void 0, void 0, function* () {
            const currentPlan = operations.FindPlanById(plan.id_actor);
            if (!currentPlan) {
                return false;
            }
            return true;
        });
    }
}
exports.validator = validator;
