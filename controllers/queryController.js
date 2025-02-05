import { getData as gd } from '../services/dbServices/queries/dbService.js';

async function fetchData(collection, query = {}) {
    return await gd(collection, query);
}

export default {
    fetchData,
};
