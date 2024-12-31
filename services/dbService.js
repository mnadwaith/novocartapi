import mongo from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const { MongoClient } = mongo;
const mongoUrl = process.env.MONGO_URL;
const client = new MongoClient(mongoUrl);

async function dbConnect() {
    try {
        await client.connect();
        console.log("Connected to the Database")
    } catch (error) {
        console.log('Error: ' + error.message)
        throw new Error("Failed to connect to the Database")
    }
}

async function getData(collection, query) {
    try {
        const db = client.db('novacart');
        return await db.collection(collection).find(query).toArray();
    } catch (error) {
        console.log('Error: ' + error.message)
        throw new Error('Failed to fetch the data')
    }
}

async function insertData(collection, data) {
    try {
        const db = client.db('novacart');
        return await db.collection(collection).insertOne(data);
    } catch (error) {
        console.log('Error: ' + error.message)
        throw new Error('Failed to insert the data')
    }
}

async function updateData(collection, query, data) {
    try {
        const db = client.db('novacart');
        return await db.collection(collection).updateOne(query, { $set: data });
    } catch (error) {
        console.log('Error: ' + error.message)
        throw new Error('Failed to update the data')
    }
}

async function deleteData(collection, query) {
    try {
        const db = client.db('novacart');
        return await db.collection(collection).deleteOne(query);
    } catch (error) {
        console.log('Error: ' + error.message)
        throw new Error('Failed to delete the data')
    }
}

export default {
    dbConnect,
    getData,
    insertData,
    updateData,
    deleteData,
};
