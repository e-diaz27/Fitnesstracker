const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({express: true}));
app.use(express.json());

app.use(express.static('public'));

mongoose.connect(
    process.env.MONGODB_URI || 'mongodb://localhost/workout', 
    {
    useNewUrlParser: true,
    useFindAndModify: false,
    useCreateIndex: true,
    useUnifiedTopology: true
    }
);

app.use(require('./routes/apiRoutes.js'))
app.use(require('./routes/htmlRoutes.js'))

app.listen(PORT,() => {
    console.log("listening");
})