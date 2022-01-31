const router = require('express').Router();
const { getAll, getById, create } = require('../services/furniture');


router.get('/', async (req, res) => {
    const data = await getAll();
    res.json(data);
});

router.post('/', async (req, res) => {
    const data = {
        make: req.body.make,
        model: req.body.model,
        year: req.body.year,
        description: req.body.description,
        price: req.body.price,
        img: req.body.img,
        material: req.body.material
    };
    const result = await create(data);

    res.status(201).json(result.body);
});

router.get('/:id', async (req, res) => {
    const item = await getById(req.params.id);
    console.log(item);
    res.json(item);
});



module.exports = router;
