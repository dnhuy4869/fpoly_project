const User = require("../models/user");

const getAll = async (req, res) => {
    try {
        const users = await User.find();

        return res.status(200).json(users);
    }
    catch (err) {
        return res.status(500).json({
            message: "Internal server error",
            error: err,
        })
    }
}

const createOne = async (req, res) => {
    try {
        const newUser = await new User(req.body);
        await newUser.save();

        return res.status(200).json({
            message: "Created successfully",
        });
    }
    catch (err) {
        return res.status(500).json({
            message: "Internal server error",
            error: err,
        })
    }
}

const updateOne = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(403).json({
                message: "User is not exist",
            })
        }

        await user.updateOne(req.body);

        return res.status(200).json({
            message: "Updated successfully",
        });
    }
    catch (err) {
        return res.status(500).json({
            message: "Internal server error",
            error: err,
        })
    }
}

const deleteOne = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(403).json({
                message: "User is not exist",
            })
        }

        await user.deleteOne();

        return res.status(200).json({
            message: "Deleted successfully",
        });
    }
    catch (err) {
        return res.status(500).json({
            message: "Internal server error",
            error: err,
        })
    }
}

const getOneById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(403).json({
                message: "User is not exist",
            })
        }

        return res.status(200).json(user);
    }
    catch (err) {
        return res.status(500).json({
            message: "Internal server error",
            error: err,
        })
    }
}

module.exports = {
    getAll,
    createOne,
    updateOne,
    deleteOne,
    getOneById,
}