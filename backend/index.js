const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');
const connectDB = require('./server/database/connection');
const cookieParser = require("cookie-parser");
const cors = require("cors");
const MNCWEB = express();

dotenv.config({path:'.env'});
const PORT = process.env.PORT||8000;

connectDB();
MNCWEB.use(cors())
MNCWEB.use(morgan('tiny'));
MNCWEB.use(cookieParser());
MNCWEB.use(express.json());
// MNCWEB.use(bodyparser.urlencoded({extended:true}));

MNCWEB.use('/',require('./server/routes/router'));



MNCWEB.listen(PORT,()=>{console.log(`Server is running on http://localhost:${PORT}`)});