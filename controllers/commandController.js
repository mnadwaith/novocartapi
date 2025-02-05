import { insertData as id, updateData as ud, deleteData as dd } from '../services/dbServices/commands/dbService.js'

async function createData(collection, data) {
    return await id(collection, data);
}

async function updateData(collection, query, data) {
    return await ud(collection, query, data);
}

async function deleteData(collection, query) {
    return await dd(collection, query);
}

export default {
    createData,
    updateData,
    deleteData,
};
