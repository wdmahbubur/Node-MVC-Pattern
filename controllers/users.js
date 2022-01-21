const Users = require("../models/Users");

exports.updateUser = async (req, res) => {
    try {
        const query = { uid: req.body.id };

        const user = {
            uid: req.body.id,
            fullname: req.body.user.fullname,
            avatar: req.body.user.avatar,
            banner: req.body.user.banner,
            email: req.body.user.email,
            address: req.body.user.address,
            basket: req.body.user.basket,
            mobile: req.body.user.mobile,
            role: req.body.user.role
        };

        const options = { upsert: true, timestamps: true }

        const saveUser = await Users.findOneAndUpdate(query, user, options);
        res.status(201).json({
            user: saveUser,
            message: "New User Add Successfully",
        });
    }
    catch (e) {
        console.error(e.message);
        res.status(500).json("Server Error");
    }
}
exports.getUser = async (req, res) => {
    try {
        const query = { uid: req.params.id };
        const user = await Users.find(query);
        res.json(user);
    }
    catch (e) {
        console.error(e.message);
        res.status(500).json("Server Error");
    }
}

exports.getAllUser = async (req, res) => {
    try {
        const user = await Users.find({});
        res.json(user);
    }
    catch (e) {
        console.error(e.message);
        res.status(500).json("Server Error");
    }
}