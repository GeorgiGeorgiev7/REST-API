const router = require('express').Router();
const { isAuth } = require('../middlewares/guards');
const { getAll, getById, create } = require('../services/furniture');


router.get('/', async (req, res) => {
    const data = await getAll();
    res.json(data);
});

router.post('/', isAuth(), async (req, res) => {
    const data = {
        make: req.body.make,
        model: req.body.model,
        year: req.body.year,
        description: req.body.description,
        price: req.body.price,
        img: req.body.img,
        material: req.body.material,
        owner: req.user._id
    };
    const result = await create(data);

    res.status(201).json(result.body);
});

router.get('/:id', async (req, res) => {
    const item = await getById(req.params.id);
    res.json(item);
});



module.exports = router;
