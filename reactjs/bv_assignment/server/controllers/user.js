const UserModel = require("../models/user");

const getAll = async (req, res) => {
    try {
        const users = await UserModel.findAll();

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
        const user = await UserModel.create(req.body);

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
        const id = req.params.id;
        await UserModel.update(req.body,
            {
                where: { id: id },
            })

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
        const id = req.params.id;
        await UserModel.destroy({
            where: { id: id },
        })

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
        const user = await UserModel.findByPk(req.params.id);
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