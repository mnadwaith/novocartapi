import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const mongoUrl = process.env.MONGO_URL;
const client = new MongoClient(mongoUrl);

let count = 0;
async function dbConnect() {
    try {
        count++;
        await client.connect();
        console.log("Connected to the Database");
    } catch (error) {
        if (count <= 5) {
            console.log("Re-connecting to db")
            dbConnect();
        } else {
            console.error('Error: ' + error.message);
            throw new Error('Failed to connect to the Database');
        }
    }
}

export { client, dbConnect };
