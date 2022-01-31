const { getById } = require("../services/furniture");


module.exports = (paramName = 'id') => async (req, ers, next) => {
    const id = req.params[paramName];

    const data = await getById(id);
    req.data = data;

    next();
};
