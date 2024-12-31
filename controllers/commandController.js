import dbService from '../services/dbService.js';

async function createData(collection, data) {
    return await dbService.insertData(collection, data);
}

async function updateData(collection, query, data) {
    return await dbService.updateData(collection, query, data);
}

async function deleteData(collection, query) {
    return await dbService.deleteData(collection, query);
}

export default {
    createData,
    updateData,
    deleteData,
};
