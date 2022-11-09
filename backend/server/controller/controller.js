var { News, admin_data, student, faculty, course, Event, Achievement } = require('../model/model');
const bcrypt = require("bcryptjs");
const fs = require('fs');
const path = "./asserts/uploads/";

exports.createnews = async (req, res) => {
    //validate request
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    //new user

    const user = new News({
        title: req.body.title,
        description: req.body.description,
        date: req.body.date,
        image: req.file.filename
    })

    //save user in the database
    await user
        .save(user)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            if (req.file) {
                try {
                    fs.unlinkSync(path + req.file.filename);
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

exports.createEvent = async (req, res) => {
    //validate request
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    //new user
    const user = new Event({
        title: req.body.title,
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
                message: err.message || "Some error occured while creating a event"
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
    const user = new faculty({
        name: req.body.name,
        link: req.body.link,
        image: req.file.filename
    })

    //save user in the database
    await user
        .save(user)
        .then(data => {
            res.send(data);
        })
        .catch(err => {
            if (req.file) {
                try {
                    fs.unlinkSync(path + req.file.filename);
                    //file removed
                } catch (err) {
                    console.error(err);
                }
            }
            res.status(500).send({
                message: err.message || "Some error occured while adding student"
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
                message: err.message || "Some error occured while adding student"
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
    await bcrypt.hash(password, 10).then(async (hash) => {
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

exports.addAchievements = async (req, res) => {
    //validate request
    if (!req.body) {
        res.status(400).send({ message: "Content can not be empty!" });
        return;
    }

    //new user

    const user = new Achievement({
        description: req.body.description,
        image: req.file.filename
    })

    //save user in the database
    await user
        .save(user)
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            if (req.file) {
                try {
                    fs.unlinkSync(path + req.file.filename);
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
                        fs.unlinkSync(path + data.image);
                        //file removed
                    } catch (err) {
                        console.error(err);
                    }
                    res.send({
                        message: "User was deleted successfully!"
                    });
                }
            })
            .catch(err => {
                res.status(500).send({
                    message: `Could not delete User with id=${id}`
                });
            });
    }
    catch (err) {
        res.status(500).json({ message: "Erro deleting News with id " + id })
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
                    message: "User was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Could not delete User with id=${id}`
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
                    fs.unlinkSync(path + data.image);
                    //file removed
                } catch (err) {
                    console.error(err);
                }
                res.send({
                    message: "User was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Could not delete User with id=${id}`
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
                    message: "User was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Could not delete User with id=${id}`
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
                    message: "User was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Could not delete User with id=${id}`
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
                    fs.unlinkSync(path + data.image);
                    //file removed
                } catch (err) {
                    console.error(err);
                }
                res.send({
                    message: "User was deleted successfully!"
                });
            }
        })
        .catch(err => {
            res.status(500).send({
                message: `Could not delete User with id=${id}`
            });
        });
};