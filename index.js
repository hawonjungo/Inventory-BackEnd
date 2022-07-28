const express = require('express');
const cors = require('cors');
const connectDB = require('./src/helpers/databaseConnection');
const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 5001;
app.use(cors());
app.use(express.json());

connectDB();
app.use('/images', express.static('images'));
app.use('/product', require('./src/routes/product'));
app.use('/general', require('./src/routes/general'));

app.listen(PORT, () => console.log(`App is listening at PORT ${PORT}`));
