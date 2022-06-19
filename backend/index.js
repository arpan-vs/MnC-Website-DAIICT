const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');
const bodyparser = require('body-parser');

const MNCWEB = express();

dotenv.config({path:'config.env'});
const PORT = process.env.PORT||8000;

MNCWEB.use(morgan('tiny'));

MNCWEB.use(bodyparser.urlencoded({extended:true}));

MNCWEB.use('/',require('./server/routes/router'));

MNCWEB.listen(PORT,()=>{console.log(`Server is running on http://localhost:${PORT}`)});