import express from 'express';
import * as ecoGuide from '##/controllers/ecoGuide.controller.js';

const ecoGuideRoute = express.Router();

ecoGuideRoute.route('/add/ecosection').post(ecoGuide.addEcoSection);
ecoGuideRoute.route('/get/ecosection').post(ecoGuide.getEcoSection);
ecoGuideRoute.route('/update/ecosection').patch(ecoGuide.updateEcoSection);
ecoGuideRoute.route('/add/info').post(ecoGuide.addEcoSectionItems);
ecoGuideRoute.route('/update/info').patch(ecoGuide.updateEcoSectionItems);
ecoGuideRoute.route('/delete/info').patch(ecoGuide.deleteEcoSectionItems);

export default ecoGuideRoute;
