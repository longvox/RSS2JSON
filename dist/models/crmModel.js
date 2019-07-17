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
const Feed = require("rss-to-json");
const cheerio = require("cheerio");
class NewPaperModels {
    constructor() { }
    static getMoreData(data) {
        let description = cheerio.load(`<div id="data">${data}</div>`, { decodeEntities: false });
        // console.log(description('#data').html())
        let decodeData = description('#data').html();
        let $ = cheerio.load(decodeData);
        return {
            thumbnail: $('img').attr('src'),
            decodeData
        };
    }
    static convertRSS2JSON(url) {
        return __awaiter(this, void 0, void 0, function* () {
            let result;
            yield new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                yield Feed.load(url, function (err, rss) {
                    result = rss;
                    resolve(rss);
                });
            }));
            result.items.map(x => {
                let data = this.getMoreData(x.description);
                x.thumbnail = data.thumbnail;
                x.description = data.decodeData;
                return x;
            });
            return result;
        });
    }
}
exports.NewPaperModels = NewPaperModels;
//# sourceMappingURL=crmModel.js.map