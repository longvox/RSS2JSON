"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const crmControllers_1 = require("../controllers/crmControllers");
const cors = require("cors");
class Routes {
    constructor() {
        this.newPaper = new crmControllers_1.NewPaperController();
    }
    routes(app) {
        app.use(cors());
        app.route('/').get((req, res) => {
            res.status(200).send({
                message: 'GET request successfulll!!!!'
            });
        });
        app.route('/api.json').get((req, res, next) => {
            // Get all contacts
            next();
        }, this.newPaper.RSS2JSON);
    }
}
exports.Routes = Routes;
//# sourceMappingURL=crmRoutes.js.map