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
class Management {
    CreatePlan(auth, Plan) {
        return __awaiter(this, void 0, void 0, function* () {
            if (auth.Auth === false) {
                console.log('autorização inválida para operação');
                return false;
            }
            console.log(Plan.name);
            return true;
        });
    }
    ReadPlan() {
        return __awaiter(this, void 0, void 0, function* () {
            return true;
        });
    }
    UpdatePlan() {
        return __awaiter(this, void 0, void 0, function* () {
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
const crud = new Management();
let autorization = {
    Actor_id: '1lk23j1k2j3hjska',
    Auth: false
};
let data = {
    id_plan: '12312a5s4fa4sf',
    name: 'Primeiro Plano!',
    description: 'um plano que bla bla bla bla bla'
};
crud.CreatePlan(autorization, data);
