var { News, admin_data, student, faculty, course, Achievement } = require('../model/model');
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

exports.login = async (req, res) => {
    const { username, password } = req.body
    // Check if username and password is provided
    if (!username || !password) {
        return res.status(400).json({
            message: "Username or Password not present",
        })
    }
    try {
        const ad_data = await admin_data.findOne({ username })
        if (!ad_data) {
            res.status(400).json({
                message: "Login not successful",
                error: "User not found",
            })
        } else {
            // comparing given password with hashed password
            var result = bcrypt.compare(password, ad_data.password);
            if (!result) {
                res.status(400).json({ message: "Login not succesful" })
            }
            else {
                const maxAge = 3 * 60 * 60;
                const token = jwt.sign({ username: username }, process.env.JWTSECRET, { expiresIn: maxAge });
                res.cookie("jwt", token, {
                    httpOnly: true,
                    maxAge: maxAge * 1000, // 3hrs in ms
                });
                res.status(200).json({
                    message: "Login successful",
                    user_id: ad_data._id,
                })
            }
        }
    } catch (error) {
        res.status(400).json({
            message: "An error occurred",
            error: error.message,
        })
    }
};

exports.getnews = async (req, res) => {
    if (req.query.id) {
        const id = req.query.id;

        try {
            var data = await News.findById(id);
            if (!data) {
                res.status(404).json({ message: "Not found News with id " + id })
            } else {
                res.json(data);
            }
        }
        catch (err) {
            res.status(500).json({ message: "Error retrieving News with id " + id })
        }

    } else {
        try {
            var data = await News.find();
            res.json(data);
        }
        catch (err) {
            res.status(500).json({ message: err.message || "Error Occurred while retriving user information" });
        }
    }
};

exports.getEvent = async (req, res) => {
    if (req.query.id) {
        const id = req.query.id;

        try {
            var data = await Event.findById(id);
            if (!data) {
                res.status(404).json({ message: "Not found Event with id " + id })
            } else {
                res.json(data);
            }
        }
        catch (err) {
            res.status(500).json({ message: "Erro retrieving Event with id " + id })
        }

    }
    else {

        try {
            var data = await Event.find();
            res.json(data);
        }
        catch (err) {
            res.status(500).json({ message: err.message || "Error Occurred while retriving information" });
        }
    }
};

exports.getStudent = async (req, res) => {
    if (req.query.id) {
        const id = req.query.id;

        try {
            var data = await student.findById(id);
            if (!data) {
                res.status(404).json({ message: "Not found student with id " + id })
            } else {
                res.json(data);
            }
        }
        catch (err) {
            res.status(500).json({ message: "Erro retrieving student with id " + id })
        }

    }
    else if (req.query.catagory) {
        const catagory = req.query.catagory;
        try {
            var data = await student.find({ catagory: catagory });
            if (!data) {
                res.status(404).json({ message: "Not found student with id " + id })
            } else {
                res.json(data);
            }
        }
        catch (err) {
            res.status(500).json({ message: "Erro retrieving student with id " + id })
        }
    }
    else {

        try {
            var data = await student.find();
            res.json(data);
        }
        catch (err) {
            res.status(500).json({ message: err.message || "Error Occurred while retriving information" });
        }
    }
};

exports.getcourse = async (req, res) => {
    if (req.query.id) {
        const id = req.query.id;

        try {
            var data = await course.findById(id);
            if (!data) {
                res.status(404).json({ message: "Not found course with id " + id })
            } else {
                res.json(data);
            }
        }
        catch (err) {
            res.status(500).json({ message: "Erro retrieving course with id " + id })
        }

    }
    else if (req.query.sem) {
        const seme = req.query.sem;
        try {
            var data = await course.find({ sem: seme });
            if (!data) {
                res.status(404).send({ message: "Not found course with id " + id })
            } else {
                res.send(data);
            }
        }
        catch (err) {
            res.status(500).send({ message: "Erro retrieving course with id " + id })
        }
    }
    else {

        try {
            var data = await course.find();
            res.json(data);
        }
        catch (err) {
            res.status(500).json({ message: err.message || "Error Occurred while retriving information" });
        }
    }
};

exports.getfaculty = async (req, res) => {
    if (req.query.id) {
        const id = req.query.id;

        try {
            var data = await faculty.findById(id);
            if (!data) {
                res.status(404).json({ message: "Not found faculty with id " + id })
            } else {
                res.json(data);
            }
        }
        catch (err) {
            res.status(500).json({ message: "Erro retrieving faculty with id " + id })
        }

    } else {

        try {
            var data = await faculty.find();
            res.json(data);
        }
        catch (err) {
            res.status(500).json({ message: err.message || "Error Occurred while retriving information" });
        }
    }
};

exports.getfaculty = async (req, res) => {
    if (req.query.id) {
        const id = req.query.id;

        try {
            var data = await Achievement.findById(id);
            if (!data) {
                res.status(404).json({ message: "Not found Achievement with id " + id })
            } else {
                res.json(data);
            }
        }
        catch (err) {
            res.status(500).json({ message: "Erro retrieving Achievement with id " + id })
        }

    } else {

        try {
            var data = await faculty.find();
            res.json(data);
        }
        catch (err) {
            res.status(500).json({ message: err.message || "Error Occurred while retriving information" });
        }
    }
};

exports.logout = (req, res) => {
    res.cookie("jwt", "");
}

