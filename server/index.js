const express = require('express');
const mongoose = require('mongoose');
const cors = require('./middlewares/cors');
const furnitureController = require('./controllers/furniture');
const userController = require('./controllers/user');


start();

async function start() {
    await new Promise((resolve, reject) => {
        mongoose.connect('mongodb://localhost:27017/furniture', {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });

        const db = mongoose.connection;
        db.once('open', () => {
            console.log(' >>> Database connected');
            resolve();
        });
        db.on('error', (err) => reject(err));
    });

    const port = 5000;
    const app = express();

    app.use(cors());
    app.use(express.json());


    app.use('/data/catalog', furnitureController);
    app.use('/users', userController);

    app.listen(port, () =>
        console.log(` >>> Server running: http://localhost:${port}`));
}
