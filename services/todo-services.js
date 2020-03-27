
'use strict';
const mongoose = require('mongoose'),
    todolist = mongoose.model('todos');


exports.search = function (params) {
    const promise = todolist.find(params).exec();
    return promise;
};


exports.save = function (todo) {
    const newtodo = new todolist(todo);
    const promise = newtodo.save();
    return promise;
};


exports.get = function (todoId) {
    const promise = todolist.findById(todoId).exec();
    return promise
};


exports.update = function (todo) {
    todo.modifiedDate = new Date();
    const promise = todolist.findOneAndUpdate({_id: todo._id}, todo).exec();
    return promise;
};


exports.delete = function (todoId) {
    const promise = todolist.remove({_id: todoId});
    return promise;
};