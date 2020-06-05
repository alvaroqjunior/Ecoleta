import express, { response } from 'express';
import knex from './database/connection';
import { request } from 'http';

const routes = express.Router();

routes.get('/items', async (request, response) => {
    const items = await knex('items').select('*');
    const serializedItems = items.map(item => {
        return {
            id: item.id,
            title: item.titulo,
            image_url: 'http://localhost:3333/uploads/' + item.image
        }
    });

    return response.json(serializedItems);
});

routes.post('/points', async (request, response) => {
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

    await knex('/points').insert({
        image: 'image-fake',
        name,
        email,
        whatsapp,
        city,
        uf,
        latitude,
        longitude,
    });

    response.json({success:true});
});

export default routes;
