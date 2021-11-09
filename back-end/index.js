const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser')
require('dotenv').config();

const middlewares = require('./middlewares/error');

const vehiclesRoutes = require('./routes/vehiclesRoutes');

const app = express();
app.use(cors());
app.use(bodyParser.json())

app.use('/webmotors', vehiclesRoutes);

app.use(middlewares);

const PORT = process.env.PORT;
app.listen(PORT, console.log(`Ouvindo na porta ${PORT}`))