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
const operations = new OperationsDb_1.OperationsDb();
const validate = new Validator_1.validator();
class Actors {
    CreateActor(data) {
        return __awaiter(this, void 0, void 0, function* () {
            validate.VerifyFields_Joi(Joi_1.SchemmaActors, data);
            return false;
            try {
                yield operations.CreateNewActor(data);
                return true;
            }
            catch (error) {
                console.log("houve um erro ", error);
                return false;
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
