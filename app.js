import express from 'express';
import cors from 'cors';
import swaggerUi from 'swagger-ui-express';
import swaggerConfig from './utils/swaggerConfig.js';
import bannerRoutes from './routes/bannerRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';
import itemRoutes from './routes/itemRoutes.js';
import electronicsRoutes from './routes/electronicsRoutes.js';
import fashionRoutes from './routes/fashionRoutes.js';
import homeKitchenRoutes from './routes/homeKitchenRoutes.js';
import sportsOutdoorRoutes from './routes/sportsOutdoorRoutes.js';
import toysGamesRoutes from './routes/toysGamesRoutes.js';
import beautyPersonalCareRoutes from './routes/beautyPersonalCareRoutes.js';
import ordersRoutes from './routes/ordersRoutes.js';
import { dbConnect } from './utils/dbConnect.js';
import dotenv from 'dotenv'

dotenv.config()
const app = express();

app.use('/api-doc', swaggerUi.serve, swaggerUi.setup(swaggerConfig));
app.use(cors());
app.use(express.json());

// Add routes
app.use('/banner', bannerRoutes);
app.use('/categories', categoryRoutes);
app.use('/items', itemRoutes);
app.use('/electronics', electronicsRoutes);
app.use('/fashion', fashionRoutes);
app.use('/home_kitchen', homeKitchenRoutes);
app.use('/sports_outdoor', sportsOutdoorRoutes);
app.use('/toys_games', toysGamesRoutes);
app.use('/beauty_personal_care', beautyPersonalCareRoutes);
app.use('/orders', ordersRoutes);

app.use('*', (req, res) => {
    return res.status(404).json({ message: "API not found" })
})

app.listen(process.env.PORT, () => {
    try {
        dbConnect()
        console.log(`Server is running on port ${process.env.PORT}`);
    } catch (error) {
        console.log('Error: ' + error.message)
    }
});
