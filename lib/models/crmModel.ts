import * as Feed from 'rss-to-json';
import * as cheerio from 'cheerio';

export class NewPaperModels {
	constructor() {}

	static getMoreData(data: any) {
		let description = cheerio.load(`<div id="data">${data}</div>`,{ decodeEntities: false });
		// console.log(description('#data').html())
		let decodeData = description('#data').html();
		let $ = cheerio.load(decodeData)
		return {
			thumbnail: $('img').attr('src'),
			decodeData
		} 
	}

	static async convertRSS2JSON(url: string) {
		let result: any;
		await new Promise(async (resolve, reject) => {
			await Feed.load(url, function(err, rss) {
				result = rss;
				resolve(rss);
			});
		});
		result.items.map(x=>{
			let data = this.getMoreData(x.description);
			x.thumbnail = data.thumbnail;
			x.description = data.decodeData;
			return x;
		})
		return result;
	}
}
