const express = require('express');
const cors = require('./middlewares/cors');


const port = 5000;
const app = express();

app.use(cors());
app.use(express.json());

app.get('/', (req, res) => {
    res.json({ "message": "It works" });
});

app.listen(port, () =>
    console.log(` >>> Server running: http://localhost:${port}`));
