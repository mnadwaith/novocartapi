import { client } from '../../../utils/dbConnect.js';

export async function getData(collection, query) {
    try {
        const db = client.db('novacart');
        return await db.collection(collection).find(query).toArray();
    } catch (error) {
        console.log('Error: ' + error.message)
        throw new Error('Failed to fetch the data')
    }
}
