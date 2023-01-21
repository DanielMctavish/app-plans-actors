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
exports.Management = void 0;
const OperationsDb_1 = require("../../databases/OperationsDb");
const operations = new OperationsDb_1.OperationsDb();
class Management {
    CreatePlan(auth, Plan) {
        return __awaiter(this, void 0, void 0, function* () {
            if (auth.Auth === false) {
                console.log('autorização inválida para operação');
                return false;
            }
            operations.createNewPlan(Plan);
            return true;
        });
    }
    ReadPlan(auth, Plan) {
        return __awaiter(this, void 0, void 0, function* () {
            if (auth.Auth === false) {
                console.log('autorização inválida para operação');
                return false;
            }
            return true;
        });
    }
    UpdatePlan(auth, Plan) {
        return __awaiter(this, void 0, void 0, function* () {
            if (auth.Auth === false) {
                console.log('autorização inválida para operação');
                return false;
            }
            return true;
        });
    }
    DeletePlan() {
        return __awaiter(this, void 0, void 0, function* () {
            return true;
        });
    }
}
exports.Management = Management;
