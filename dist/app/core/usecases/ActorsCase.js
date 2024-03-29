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
exports.Actors = void 0;
const OperationsDb_1 = require("../../databases/OperationsDb");
const Validator_1 = require("../validations/Validator");
const Joi_1 = require("../../../config/Joi");
const Validator_2 = require("../validations/Validator");
const operations = new OperationsDb_1.OperationsDb();
const validate = new Validator_1.validator();
class Actors {
    CreateActor(data) {
        return __awaiter(this, void 0, void 0, function* () {
            yield validate.VerifyFields_Joi(Joi_1.SchemmaActors, data);
            if (!Validator_2.responseJoi.success) {
                return Validator_2.responseJoi;
            }
            try {
                yield operations.CreateNewActor(data);
                return { status: 200, message: "autor criado com sucesso!", success: true };
            }
            catch (error) {
                return { status: 500, message: error, success: true };
            }
        });
    }
    DeleteActor() {
        return __awaiter(this, void 0, void 0, function* () {
            return true;
        });
    }
}
exports.Actors = Actors;
