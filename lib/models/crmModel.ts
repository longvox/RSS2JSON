import * as Feed from 'rss-to-json';
import * as cheerio from 'cheerio';

export class NewPaperModels {
	constructor() {}

	static thumbnail(data: any) {
		let description = cheerio.load(data);
		return description('img').attr('src'); 
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
			x.thumbnail = this.thumbnail(x.description);
			return x;
		})
		return result;
	}
}
