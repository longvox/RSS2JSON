import { Request, Response } from 'express';
import { NewPaperController } from '../controllers/crmControllers';
import * as cors from 'cors';

export class Routes {
	newPaper: NewPaperController;

	constructor () {
		this.newPaper = new NewPaperController();
	}

	public routes(app): void {
		app.use(cors());

		app.route('/').get((req: Request, res: Response) => {
			res.status(200).send({
				message: 'GET request successfulll!!!!'
			});
		});

		app.route('/api.json').get((req: Request, res: Response, next: Function) => {
			// Get all contacts

			next();
		}, this.newPaper.RSS2JSON);
	}
}
