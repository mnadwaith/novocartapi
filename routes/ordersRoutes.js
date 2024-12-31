import express from 'express';
import queryController from '../controllers/queryController.js';
import commandController from '../controllers/commandController.js';

const router = express.Router();

// Place a new order
router.post('/placeOrder', async (req, res) => {
    try {
        const data = req.body;
        const collection = "orders";
        const response = await commandController.createData(collection, data);
        return res.status(200).json(response);
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
});

// View all orders
router.get('/viewOrder', async (req, res) => {
    const collection = "orders";
    const output = await queryController.fetchData(collection);
    res.send(output);
});

export default router;
