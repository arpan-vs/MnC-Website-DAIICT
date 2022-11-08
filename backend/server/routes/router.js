const express = require('express');
const route = express.Router();
const services = require('../services/render');
const controller = require('../controller/controller');
const verify = require('../services/varifytoken');
const multer = require('multer');
const path = require("path");

const validation_of_file = function (file, cb) {
    //Allowed file extensions
    if(!file)
    {
      return cb(null,true);
    }
    const fileTypes = /jpeg|jpg|png|/;
    //check extension names
    const extName = fileTypes.test(path.extname(file.originalname).toLowerCase());
    const mimeType = fileTypes.test(file.mimetype);
    if (mimeType && extName) {
      return cb(null, true);
    } else {
      cb("Error: You can Only Upload Images!!");
    }
  };
  
  const Storage = multer.diskStorage({
      //destination for file
      destination: function (request, file, callback) {
        if(file){
          callback(null, './asserts/uploads/');
        }
      },
  
      // destination:"./asserts/uploads/",
  
      //add back to extension
      filename: function (request, file, callback) {
        if(file){  
          callback(null, Date.now() + file.originalname);
        }
        else
        {
          callback(null, "NA");
        }
      },
  });
  
  const upload = multer({ 
      storage : Storage,
      limits: { fileSize: 5000000 },
      fileFilter: (req, file, cb) => {
          validation_of_file(file, cb);
        },
  }).single('image');

route.get('/', services.logout);

route.post('/login', services.login);

route.get('/getnews', services.getnews);

route.get('/getevent', services.getEvent);

route.get('/getstudent', services.getStudent);

route.get('/getcourse', services.getcourse);

route.get('/getfaculty', services.getfaculty);

route.get('/logout', verify, services.logout);

route.post('/api/users/news', verify, upload, controller.createnews);

route.post('/api/users/event', verify, controller.createEvent);

route.post('/api/users/student', verify, controller.addStudent);

route.post('/api/users/faculty', verify, upload, controller.addfaculty);

route.post('/api/users/course', verify, controller.addcourse);

route.post('/api/users/admin', verify, controller.addadmin);

route.post('/api/users/achievement', verify, upload, controller.addAchievements);

route.delete('/api/users/news/:id',verify, controller.deletenews);

route.delete('/api/users/student/:id', verify, controller.deletestudent);

route.delete('/api/users/faculty/:id', verify, controller.deletefaculty);

route.delete('/api/users/course/:id', verify, controller.deletecourse);

route.delete('/api/users/admin/:id', verify, controller.deleteadmin);

route.delete('/api/users/achievement/:id', verify, controller.deleteadmin);


module.exports = route;