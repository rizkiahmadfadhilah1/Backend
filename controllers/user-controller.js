const bcrypt = require('bcrypt')
const User = require("../models/users")
const Todo = require("../models/Todo")

module.exports = {
    getAllUser: async (req, res) => {
        try {
            const users = await User.findAll({include : Todo});
            console.log(users.every(user => user instanceof User)); // true
            console.log("All users:", JSON.stringify(users, null, 2));

            res.json({
                message: "berhasil mendapatkan data",
                users: users
            });
        } catch (error) {
            console.error("Error:", error);
            res.status(500).json({
                message: "gagal mendapatkan data",
                error: error.message
            });
        }
    },

    getUserById: async (req, res) => {
        const userId = req.params.id;
        try {
            const user = await User.findByPk(userId);

            if (user === null) {
                console.log('User not found!');
                res.status(404).json({
                    message: 'User not found'
                });
            } else {
                console.log(user instanceof User); // true
                console.log('User:', JSON.stringify(user, null, 2));

                res.json({
                    message: 'Berhasil mendapatkan data user',
                    user: user
                });
            }
        } catch (error) {
            console.error('Error:', error);
            res.status(500).json({
                message: 'Gagal mendapatkan data user',
                error: error.message
            });
        }
    },

    createUser: async (req, res) => {
        let data = req.body

        // hash password
        try {
            const hashpassword = bcrypt.hashSync(data.password, 10)
            data.password = hashpassword
            // input data
            await User.create(data)
            // status
            res.status(201).json({
                massage: "berhasil menambahkan user"
            })
        } catch {
            res.json({
                massage: "gagal menambahkan data"
            })
        }
    },
}