const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const connectDB = require('./server/database/connection');
const cookieParser = require("cookie-parser");
const cors = require("cors");
const MNCWEB = express();
const path = require('path');

dotenv.config({path:'dot.env'});
const PORT = process.env.PORT || 8000;

// MNCWEB.use(express.static('asserts'));
MNCWEB.use("/images", express.static(path.join("asserts/uploads/")));  
// MNCWEB.use('../asserts/img', express.static('img'));

connectDB();
MNCWEB.use(cors({
    origin: 'http://localhost:3000',
    credentials: true // some legacy browsers (IE11, various SmartTVs) choke on 204
}))
MNCWEB.use(function(req, res, next) {
    res.header('Content-Type', 'application/json;charset=UTF-8')
    res.header('Access-Control-Allow-Credentials', true)
    res.header(
      'Access-Control-Allow-Headers',
      'Origin, X-Requested-With, Content-Type, Accept'
    )
    next()
  })

MNCWEB.use(morgan('tiny'));
MNCWEB.use(cookieParser());
MNCWEB.use(express.json());
MNCWEB.use(bodyparser.urlencoded({extended:true}));

MNCWEB.use('/',require('./server/routes/router'));



MNCWEB.listen(PORT,()=>{console.log(`Server is running on http://localhost:${PORT}`)});