import express from 'express';
import queryController from '../controllers/queryController.js';

const router = express.Router();

router.get('/', async (req, res) => {
    const collection = "items";
    const lcost = Number(req.query.lcost);
    const hcost = Number(req.query.hcost);
    let query = {};
    if (lcost && hcost) {
        query = { $and: [{ price: { $gt: lcost, $lt: hcost } }] };
    }
    const output = await queryController.fetchData(collection, query);
    res.send(output);
});

export default router;
