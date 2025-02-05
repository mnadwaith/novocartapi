import { client } from '../../../utils/dbConnect.js';

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

export { insertData, updateData, deleteData }