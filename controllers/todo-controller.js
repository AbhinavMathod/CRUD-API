/**
 * Controller for todo endpoints.
 */

'use strict';
//import todo service.
const todoService = require('../services/todo-services');
/**
 * Returns a list of stickies in JSON based on the
 * search parameters.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.list = function (request, response) {
    const resolve = (stickies) => {
        response.status(200);
        response.json(stickies);
    };
    todoService.search({})
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * Creates a new todo with the request JSON and
 * returns todo JSON object.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.post = function (request, response) {
    const newtodo = Object.assign({}, request.body);
    const resolve = (todo) => {
        response.status(200);
        response.json(todo);
    };
    todoService.save(newtodo)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * Returns a todo object in JSON.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.get = function (request, response) {
    const resolve = (todo) => {
        response.status(200);
        response.json(todo);
    };
    todoService.get(request.params.todoId)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * Updates and returns a todo object in JSON.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.put = function (request, response) {
    const todo = Object.assign({}, request.body);
    const resolve = (todo) => {
        response.status(200);
        response.json(todo);
    };
    todo._id = request.params.todoId;
    todoService.update(todo)
        .then(resolve)
        .catch(renderErrorResponse(response));
};

/**
 * Deletes a todo object.
 *
 * @param {request} {HTTP request object}
 * @param {response} {HTTP response object}
 */
exports.delete = function (request, response) {
    const resolve = (todo) => {
        response.status(200);
        response.json({
            message: 'todo Successfully deleted'
        });
    };
    todoService.delete(request.params.todoId)
        .then(resolve)
        .catch(renderErrorResponse(response));
};
/**
 * Throws error if error object is present.
 *
 * @param {Response} response The response object
 * @return {Function} The error handler function.
 */
let renderErrorResponse = (response) => {
    const errorCallback = (error) => {
        if (error) {
            response.status(500);
            response.json({
                message: error.message
            });
        }
    }
    return errorCallback;
};