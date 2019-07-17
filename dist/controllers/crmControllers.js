"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const crmModel_1 = require("./../models/crmModel");
class NewPaperController {
    constructor() { }
    RSS2JSON(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let rss_url = decodeURIComponent(req.query.rss_url);
            let json = yield crmModel_1.NewPaperModels.convertRSS2JSON(rss_url);
            if (json) {
                res.status(200).send(json);
            }
            else {
                res.status(400).send({
                    status: "error",
                    message: "`rss_url` parameter must be a valid url."
                });
            }
        });
    }
}
exports.NewPaperController = NewPaperController;
//# sourceMappingURL=crmControllers.js.map