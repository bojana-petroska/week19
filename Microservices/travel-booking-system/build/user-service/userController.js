import User from './userModels.js';
// CRUD
const get = async (req, res) => {
    const users = await User.find();
    res.send(users);
};
const getById = async (req, res) => {
    const userId = req.params.id;
    try {
        const user = await User.findById(userId);
        res.status(200).send(user);
    }
    catch (error) {
        res.status(404).send(error);
    }
};
const create = async (req, res) => {
    const { name, email } = req.body;
    const newUser = new User({
        name,
        email,
    });
    await newUser.save();
    res.status(201).send(newUser);
};
const update = async (req, res) => {
    const userId = req.params.id;
    const { name, email } = req.body;
    const user = await User.findByIdAndUpdate(userId, { name, email }, { new: true });
    if (!user) {
        res.status(404).send({ message: `user not found` });
    }
    res.status(200).send(user);
};
const remove = async (req, res) => {
    const userId = req.params.id;
    const user = await User.findByIdAndDelete(userId);
    if (!user) {
        res.status(404).send({ message: `user not found` });
    }
    res.status(204).send();
};
export default {
    get,
    getById,
    create,
    update,
    remove,
};
