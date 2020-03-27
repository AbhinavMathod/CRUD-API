A simple RESTful API using nodejs,expressjs,mongoDB and simple javascript.
Technologies used :
Nodejs
Expressjs
npm
mongoDB
nodemon
VScode
Insomnia
git
Requirements :
A functioning laptop to act as a local host
A code editor to view and edit javascript code (example intelliJ or VScode)
An API development platform like postman/insomnia
Steps to Run :
Clone from git
Open terminal at folder and run npm run start-watch to start nodemon
open another terminal to run mongod command to host mongoDB on local server by default on port 27017
Open insomnia and add the appropriate request header with request type in order to see output
http://localhost:3000/todos with get for getting list of json objects in the DB
http://localhost:3000/todos with post for adding json object to db
http://localhost:3000/todos/todoId with get for getting json object with particular id
http://localhost:3000/todos/todoId with put for updating required json object
http://localhost:3000/todos/todoId with delete for deleting required json objects   
