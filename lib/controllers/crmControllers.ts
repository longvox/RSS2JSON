import { NewPaperModels } from './../models/crmModel';
import { Request, Response } from 'express';

export class NewPaperController {
	
	constructor() {}

	public async RSS2JSON(req: Request, res: Response) {
		let rss_url = decodeURIComponent(req.query.rss_url);
		let json = await NewPaperModels.convertRSS2JSON(rss_url);
		if (json) {
			res.status(200).send(json);
		} else {
			res.status(400).send({
				status: "error",
				message: "`rss_url` parameter must be a valid url."
			});
		}
	}
}
