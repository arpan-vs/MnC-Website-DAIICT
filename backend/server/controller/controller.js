var { News, admin_data, student, faculty, course, Event } = require('../model/model');
const bcrypt = require("bcryptjs");

exports.createnews = (req, res) => {
    //validate request
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    //new user
    const user = new News({
        title: req.body.title,
        description: req.body.description,
        sort_dis: req.body.sort_dis,
    })

    //save user in the database
    user
        .save(user)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured while creating a news"
            });
        });

};

exports.createEvent = (req, res) => {
    //validate request
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    //new user
    const user = new Event({
        title: req.body.title,
        description: req.body.description,
        sort_dis: req.body.sort_dis,
    })

    //save user in the database
    user
        .save(user)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured while creating a event"
            });
        });

};

exports.addStudent = (req, res) => {
    //validate request
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    //new user
    const user = new student({
        catagory: req.body.catagory,
        name: req.body.name,
        student_id: req.body.student_id,
        batch: req.body.batch,
        about: req.body.about,
    })

    //save user in the database
    user
        .save(user)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured while adding student"
            });
        });
};

exports.addfaculty = (req, res) => {
    //validate request
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    //new user
    const user = new faculty({
        name: req.body.name,
        degrees: req.body.degrees,
        contact_details: req.body.contact_details,
        taken_courses: req.body.taken_courses,
        email_id: req.body.email_id,
        biography: req.body.biography,
        specialization: req.body.specialization,
    })

    //save user in the database
    user
        .save(user)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured while adding student"
            });
        });
};

exports.addcourse = (req, res) => {
    //validate request
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    //new user
    const user = new course({
        title: req.body.title,
        sem: req.body.sem,
        credits: req.body.credits,
        description: req.body.description,
    })

    //save user in the database
    user
        .save(user)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured while adding student"
            });
        });
};

exports.addadmin = (req, res) => {
    //validate request
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    //new user
    // const user = new admin_data({
    //     username: req.body.username,
    //     password: req.body.password,
    // })

    // //save user in the database
    // user
    //     .save(user)
    //     .then(data=>{
    //         res.send(data);
    //     })
    //     .catch(err=>{
    //         res.status(500).send({
    //             message:err.message||"Some error occured while adding student"
    //         });
    //     });

    var password = req.body.password;
    var username = req.body.username;
    bcrypt.hash(password, 10).then(async (hash) => {
        await admin_data.create({
            username,
            password: hash,
          })
            .then((user) =>
                res.status(200).json({
                    message: "User successfully created",
                    user,
                })
            )
            .catch((error) =>
                res.status(400).json({
                    message: "User not successful created",
                    error: error.message,
                })
            );
    });
};
