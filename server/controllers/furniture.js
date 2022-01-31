const router = require('express').Router();
const { getAll } = require('../services/furniture');

router.get('/', async (req, res) => {
    const data = await getAll();
    res.json(data);
});



module.exports = router;
