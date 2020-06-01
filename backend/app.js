const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');  

const authRoutes = require('./routes/auth');
const shopRoutes = require('./routes/shop');

const app = express();

app.use(bodyParser.json());

app.use(cors());

app.use('/auth', authRoutes);
app.use('', shopRoutes);

app.use((error, req, res, next) => {
    console.log(error);
    const statusCode = error.statusCode || 500;
    const message = error.message;
    const data = error.data
    res.status(statusCode).json({ message: message, data: data });
});

const MONGODB_URI = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@cluster0-tlxfn.gcp.mongodb.net/${process.env.MONGO_DEFAULT_DATABASE}?authSource=admin&replicaSet=Cluster0-shard-0&w=majority&readPreference=primary&appname=MongoDB%20Compass&retryWrites=true&ssl=true`

mongoose.connect(MONGODB_URI).then(result => {
    app.listen(process.env.PORT || 3000);
}).catch(err => {
    console.log(err);
});
