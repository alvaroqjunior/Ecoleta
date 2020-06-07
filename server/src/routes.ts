import express from "express";
import PointsController from './Controllers/PointsController';
import ItemsController from './Controllers/ItemsController';

const routes = express.Router().use(express.json());
const pointsController = new PointsController();
const itemsController = new ItemsController();

//index, show, create, update, destroy
routes.get("/items", itemsController.index);
routes.post("/points", pointsController.create); 
routes.get("/points", pointsController.index); 
routes.get("/points/:id", pointsController.show); 

export default routes;
