const mongoose = require('mongoose');

var schema1 = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },

    date: {
        type: Date,
    },

    description: {
        type: String,
        required: true,
    },

    image: {
        type: String,
        // required: true,
    },
});

const News = mongoose.model('News', schema1);

var schema2 = new mongoose.Schema({
    username: {
        type: String,
        required: true,
    },

    password: {
        type: String,
        required: true,
    },
});

const admin_data = mongoose.model('admin_data', schema2);

var schema3 = new mongoose.Schema({

    name: {
        type: String,
        required: true,
    },

    student_id: {
        type: Number,
        required: true,
    },

    batch: {
        type: Number,
        required: true,
    },

    link: {
        type: String
    },
});

const student = mongoose.model('student', schema3);

var schema4 = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    
    link: {
        type: String
    },
    
    image: {
        type: String,
        required: true,
    },

});

const faculty = mongoose.model('faculty', schema4);

var schema5 = new mongoose.Schema({
    course_code: {
        type: String,
        required: true,
    },
    
    title: {
        type: String,
        required: true,
    },

    sem: {
        type: String,
        required: true,
    },

    credits: {
        type: String,
        required: true,
    },

    description: {
        type: String,
        required: true,
    },
});

const course = mongoose.model('course', schema5);

var schema6 = new mongoose.Schema({
    image: {
        type: String
    },

    description: {
        type: String,
        required: true,
    },
});

const Achievement = mongoose.model('Achievement', schema6);

module.exports = { News, admin_data, student, faculty, course, Achievement };