const express = require("express");
const router = express.Router();

const {
    updateUser,
    getUser,
    getAllUser
} = require("../controllers/users");

router.put("/users", updateUser);
router.get("/users/:id", getUser);
router.get("/users/", getAllUser);

module.exports = router;