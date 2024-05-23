const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');

const SECRET_KEY = process.env.SECRET_KEY;

exports.login = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await User.findOne({ where: { username: username } });
        if (user) {
            const match = await bcrypt.compare(password, user.passwordHash);
            if (match) {
                const token = jwt.sign({ userId: user.user_id, role: user.role }, SECRET_KEY, {
                    expiresIn: '1h',
                });
                res.status(200).json({ message: 'Login successful', token: token, userId: user.user_id});
            } else {
                res.status(401).json({ error: 'Invalid credentials' });
            }
        } else {
            res.status(404).json({ error: 'User not found' });
        }
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.validateToken = async (req, res) => {
    try {
        const token = req.headers.authorization;
        jwt.verify(token, SECRET_KEY);
        const userId = jwt.decode(token).userId;
        res.status(200).json({ message: 'Token is valid', userId: userId });
    } catch (error) {
        res.status(401).json({ error: 'Invalid token' });
    }
};