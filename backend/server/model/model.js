const mongoose = require('mongoose');

var schema1 = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },

    date:{
        type:String,
        required:true,
    },

    description:{
        type:String,
        required:true,
    },

    sort_dis:{
        type:String,
        required:true,
    },
});

const News = mongoose.model('News',schema1);

var schema2 = new mongoose.Schema({
    username:{
        type:String,
        required:true,
    },

    password:{
        type:String,
        required:true,
    },
});

const admin = mongoose.model('admin',schema2);

var schema3 = new mongoose.Schema({
    catagory:{
        type:String,
        required:true,
    },

    name:{
        type:String,
        required:true,
    },

    id:{
        type:Integer,
        required:true,
    },

    batch:{
        type:String,
        required:true
    },

    about:{
        type:String,
    },
});

const student = mongoose.model('student',schema3);

var schema4 = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },

    degrees:{
        type:String,
        require:true,
    },

    contact_details:{
        type:String,
        required:true,
    },

    taken_courses:{
        type:String,
        required:true,
    },

    email_id:{
        type:String,
        required:true,
    },

    biography:{
        type:String,
    },

    specialization:{
        type:String,
    }
});

const faculty = mongoose.model('faculty',schema4);

var schema5 = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },

    sem:{
        type:Integer,
        required:true,
    },

    credit:{
        typr:String,
        required:true,
    },

    discription:{
        type:String,
        required:true,
    },
});

const course = mongoose.Schema('course',schema5);

module.exports = {News,admin,student,faculty};