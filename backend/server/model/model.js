const mongoose = require('mongoose');

var schema1 = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },

    date: {
        type: Date,
        default: Date.now(),
    },

    description: {
        type: String,
        required: true,
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
    catagory: {
        type: String,
        required: false,
    },

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

    about: {
        type: String,
    },
});

const student = mongoose.model('student', schema3);

var schema4 = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },

    degrees: {
        type: String,
        require: true,
    },

    contact_details: {
        type: String,
        required: true,
    },

    taken_courses: {
        type: String,
        required: true,
    },

    email_id: {
        type: String,
        required: true,
    },

    biography: {
        type: String,
    },

    specialization: {
        type: String,
    }
});

const faculty = mongoose.model('faculty', schema4);

var schema5 = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },

    sem: {
        type: Number,
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
    title: {
        type: String,
        required: true,
    },

    date: {
        type: Date,
        default: Date.now(),
    },

    description: {
        type: String,
        required: true,
    },
});

const Event = mongoose.model('Event', schema6);

module.exports = { News, admin_data, student, faculty, course, Event };