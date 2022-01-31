const Furniture = require('../models/Furniture');


async function getAll() {
    return Furniture.find({}).lean();
}

async function create(data) {
    const res = new Furniture(data);
    await res.save();

    return res;
}

async function getById(id) {
    return Furniture.findById(id).lean();
}

module.exports = {
    getAll,
    getById,
    create
};