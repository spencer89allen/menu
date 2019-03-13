var express = require('express');
var bodyParser = require('body-parser');

var ctrl = require('./controller')

var app = express();

app.use(bodyParser.json());

//Endpoints
app.post('/api/meal', ctrl.newMeal)
app.get('/api/getMeals', ctrl.getMeal)
app.delete('/api/delete:id', ctrl.deleteMeal)

var Port = 4545;

app.listen(Port, () => {
    console.log(`The server is listening on port: ${Port}`)
});