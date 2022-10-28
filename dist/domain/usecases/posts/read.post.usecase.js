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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const posts_repository_1 = __importDefault(require("../../../adapters/repositories/posts.repository"));
class ReadPostUseCase {
    constructor(_repository) {
        this._repository = _repository;
    }
    execute(data) {
        return __awaiter(this, void 0, void 0, function* () {
            return yield this._repository.readById(data.idpost);
        });
    }
}
exports.default = new ReadPostUseCase(posts_repository_1.default);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhZC5wb3N0LnVzZWNhc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi8uLi9zcmNfYmFjay9kb21haW4vdXNlY2FzZXMvcG9zdHMvcmVhZC5wb3N0LnVzZWNhc2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7QUFBQSx1R0FBOEU7QUFLOUUsTUFBTSxlQUFlO0lBQ2pCLFlBQW9CLFdBQTZCO1FBQTdCLGdCQUFXLEdBQVgsV0FBVyxDQUFrQjtJQUFFLENBQUM7SUFDOUMsT0FBTyxDQUFDLElBQXNCOztZQUNoQyxPQUFPLE1BQU0sSUFBSSxDQUFDLFdBQVcsQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFBO1FBQ3ZELENBQUM7S0FBQTtDQUNKO0FBRUQsa0JBQWUsSUFBSSxlQUFlLENBQzlCLDBCQUFlLENBQ2xCLENBQUEifQ==