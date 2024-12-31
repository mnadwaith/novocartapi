import express from 'express';
import queryController from '../controllers/queryController.js';

const router = express.Router();

router.get('/', async (req, res) => {
    const collection = "banner";
    const output = await queryController.fetchData(collection);
    res.send(output);
});

export default router;
