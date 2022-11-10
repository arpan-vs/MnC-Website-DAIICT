var { News, admin_data, student, faculty, course, Event, Achievement } = require('../model/model');
const bcrypt = require("bcryptjs");
const fs = require('fs');
const path1 = "./asserts/uploads/";

exports.createnews = async (req, res) => {
    // console.log(req.body)
    //validate request
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    //new user

    
    let user = new News({
        title: req.body.title,
        description: req.body.description,
        date: req.body.date,
    });
    try{
        // await upload();
        // im = req.file.filename;
        user.image = req.file.filename;
    }
    catch{}

    // console.log(user);
    //save user in the database
    await user
        .save(user)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            if (req.file) {
                try {
                    fs.unlinkSync(path1 + req.file.filename);
                    //file removed
                } catch (err) {
                    console.error(err);
                }
            }
            res.status(500).send({
                message: err.message || "Some error occured while creating a news"
            });
        });

};

exports.addStudent = async (req, res) => {
    //validate request
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    //new user
    const user = new student({
        name: req.body.name,
        student_id: req.body.student_id,
        batch: req.body.batch,
        link: req.body.link,
    })

    //save user in the database
    await user
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

exports.addfaculty = async (req, res) => {
    //validate request
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }
    
    //new user
    let user = new faculty({
        name: req.body.name,
        link: req.body.link,
    });

    try{
        // await upload();
        // im = req.file.filename;
        user.image = req.file.filename;
    }
    catch{}

    //save user in the database
    await user
        .save(user)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            if (req.file) {
                try {
                    fs.unlinkSync(path1 + req.file.filename);
                    //file removed
                } catch (err) {
                    console.error(err);
                }
            }
            res.status(500).send({
                message: err.message || "Some error occured while adding faculty"
            });
        });
};

exports.addcourse = async (req, res) => {
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
    await user
        .save(user)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            res.status(500).send({
                message: err.message || "Some error occured while adding course"
            });
        });
};

exports.addadmin = async (req, res) => {
    //validate request
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    var password = req.body.password;
    var username = req.body.username;
    bcrypt.hash(password, 10).then(async (hash) => {
        await admin_data.create({
            username,
            password: hash,
        })
            .then((user) =>
                res.status(200).json({
                    message: "Admin successfully created",
                    user,
                })
            )
            .catch((error) =>
                res.status(400).json({
                    message: "Admin not created",
                    error: error.message,
                })
            );
    });
};

exports.addAchievements = async (req, res) => {
    //validate request
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    //new user

    let user = new Achievement({
        description: req.body.description,
    })

    try{
        // await upload();
        // im = req.file.filename;
        user.image = req.file.filename;
    }
    catch{}

    //save user in the database
    await user
        .save(user)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            if (req.file) {
                try {
                    fs.unlinkSync(path1 + req.file.filename);
                    //file removed
                } catch (err) {
                    console.error(err);
                }
            }
            res.status(500).send({
                message: err.message || "Some error occured while add Achievement"
            });
        });

};

exports.deletenews = async (req, res) => {
    const id = req.params.id;
    try {
        await News.findByIdAndDelete(id)
            .then(data => {
                if (!data) {
                    res.status(404).send({ message: `Cannot Delete with ${id}. Maybe id is wrong!` })
                } else {
                    try {
                        fs.unlinkSync(path1 + data.image);
                        //file removed
                    } catch (err) {
                        // console.error(err);
                    }
                    res.send({
                        message: "News was deleted successfully!"
                    });
                }
            })
            .catch(err => {
                res.status(500).send({
                    message: `Could not delete News with id=${id}`
                });
            });
    }
    catch (err) {
        res.status(500).json({ message: "Error deleting News with id " + id })
    }
};

exports.deletestudent = async (req, res) => {
    const id = req.params.id;

    await student.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `Cannot Delete with ${id}. Maybe id is wrong!` })
            } else {
                res.send({
                    message: "Student was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Could not delete Student with id=${id}`
            });
        });
};

exports.deletefaculty = async (req, res) => {
    const id = req.params.id;

    await faculty.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `Cannot Delete with ${id}. Maybe id is wrong!` })
            } else {
                try {
                    fs.unlinkSync(path1 + data.image);
                    //file removed
                } catch (err) {
                    console.error(err);
                }
                res.send({
                    message: "Faculty was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Could not delete Faculty with id=${id}`
            });
        });
};

exports.deletecourse = async (req, res) => {
    const id = req.params.id;

    await course.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `Cannot Delete with ${id}. Maybe id is wrong!` })
            } else {
                res.send({
                    message: "Course was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Could not delete Course with id=${id}`
            });
        });
};

exports.deleteadmin = async (req, res) => {
    const id = req.params.id;

    await admin_data.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `Cannot Delete with ${id}. Maybe id is wrong!` })
            } else {
                res.send({
                    message: "Admin was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Could not delete Admin with id=${id}`
            });
        });
};

exports.deleteAchievement = async (req, res) => {
    const id = req.params.id;

    await Achievement.findByIdAndDelete(id)
        .then(data => {
            if (!data) {
                res.status(404).send({ message: `Cannot Delete with ${id}. Maybe id is wrong!` })
            } else {
                try {
                    fs.unlinkSync(path1 + data.image);
                    //file removed
                } catch (err) {
                    console.error(err);
                }
                res.send({
                    message: "Achievement was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Could not delete Achievement with id=${id}`
            });
        });
};