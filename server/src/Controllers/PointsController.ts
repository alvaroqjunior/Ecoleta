import knex from "../database/connection";
import { Request, Response } from "express";

class PointsController {
    async index(request: Request, response: Response) {
        const { city, uf, items } = request.query;
        const parsedItems = String(items)
            .split(',')
            .map(item => Number(item.trim()));

        const points = await knex('points')
            .join('point_items', 'points.id', '=', 'point_items.point_id')
            .whereIn('point_items.item_id', parsedItems)
            .where('city', String(city))
            .where('uf', String(uf))
            .distinct()
            .select('points.*');

        return response.json(points);
    }

    async show(request: Request, response: Response) {
        const { id } = request.params;

        const point = await knex('points').where('id', id).first();
        const items = await knex('items')
            .join('point_items', 'items.id', '=', 'point_items.item_id')
            .where('point_items.point_id', id);

        point.items = items;
        if (!point) {
            return response.status(400).json({ message: 'Point not found' })
        }

        return response.json(point);
    }

    async create(request: Request, response: Response) {
        const {
            name,
            email,
            whatsapp,
            city,
            uf,
            latitude,
            longitude,
            items
        } = request.body;

        const trx = await knex.transaction();

        const point = {
            image: "https://images.unsplash.com/photo-1556767576-5ec41e3239ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=400&q=60",
            name,
            email,
            whatsapp,
            city,
            uf,
            latitude,
            longitude,
        }

        const insertedIds = await trx("points").insert(point);

        const point_id = insertedIds[0]
        const pointItems = items.map((item_id: number) => {
            return {
                item_id,
                point_id
            }
        });

        await trx("point_items").insert(pointItems);

        await trx.commit();

        response.json({
            id: point_id,
            ...point //comando spread, coloca todos os campos de uma modelo em outra
        });
    }
}

export default PointsController;