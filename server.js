const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({express: true}));
app.use(express.json());

app.use(express.static('public'));

mongoose.connect('mongodb://localhost/workout', {
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

app.use(require('./routes/apiRoutes.js'))
app.use(require('./routes/htmlRoutes.js'))

app.listen(PORT,() => {
    console.log("listening");
})