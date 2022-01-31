const router = require('express').Router();
const { isAuth } = require('../middlewares/guards');
const { getAll, getById, create } = require('../services/furniture');
const { parseError } = require('../util');


router.get('/', async (req, res) => {
    const data = await getAll();
    res.json(data);
});

router.post('/', isAuth(), async (req, res) => {
    const data = {
        make: req.body.make,
        model: req.body.model,
        year: Number(req.body.year),
        description: req.body.description,
        price: Number(req.body.price),
        img: req.body.img,
        material: req.body.material,
        owner: req.user._id
    };
    try {
        const result = await create(data);
        res.status(201).json(result);

    } catch (err) {
        const message = parseError(err);
        res.status(err.status || 400).json({ message });
    }

    res.status(201).json(result.body);
});

router.get('/:id', async (req, res) => {
    const item = await getById(req.params.id);
    res.json(item);
});



module.exports = router;
