'use strict';
module.exports = function (app) {
    //Initialize models
    let todoModel = require('./models/todo-model');

    //Initialize routes
    let todoRoutes = require('./routes/todo-route');
    todoRoutes(app);
};