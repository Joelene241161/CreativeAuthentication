// const mongoose = require('mongoose');

// const UserSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//     },
//     email: {
//     type: String,
//     required: true,
//     unique: true,
//     },
//     password: {
//         type: String,
//         required: true,
//     },
// });

// module.exports = mongoose.model('User', UserSchema);

// //Get all users
// router.get('/', async (req, res) => {
//     try{
//         const users = await UserSchema.find();
//         res.status(200).json(users);
//     } catch (err) {
//         res.status(400).json({ error: err.message });
//     }
// });

// module.exports = router;

const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    email: String,
    password: String
});

module.exports = mongoose.model("User", UserSchema);