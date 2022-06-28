const express= require('express');
const route = express.Router();
const services = require('../services/render');
const controller = require('../controller/controller');
const verify = require('../services/varifytoken');

route.get('/',services.logout);

route.get('/login',services.login);

route.get('/getnews',services.getnews);

route.get('/getevent',services.getEvent);

route.get('/getstudent',services.getStudent);

route.get('/getcourse',services.getcourse);

route.get('/getfaculty',services.getfaculty);

route.get('/logout',verify,services.logout);

route.post('/api/users/news',verify,controller.createnews);

route.post('/api/users/event',verify,controller.createEvent);

route.post('/api/users/student',verify,controller.addStudent);

route.post('/api/users/faculty',verify,controller.addfaculty);

route.post('/api/users/course',verify,controller.addcourse);

route.post('/api/users/admin',verify,controller.addadmin);

module.exports = route;