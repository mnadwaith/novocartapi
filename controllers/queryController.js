import dbService from '../services/dbService.js';

async function fetchData(collection, query = {}) {
    return await dbService.getData(collection, query);
}

export default {
    fetchData,
};
