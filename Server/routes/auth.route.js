const { Router } = require('express');
const router = Router();
const User = require('../models/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

router.post('/registration', async (req, res) => {
    try {
        const { email, password, name, surname } = req.body;

        const isUsed = await User.findOne({ email })

        if(isUsed) {
            return res.status(300).json({message: 'Данный email уже занят попробуйте другой'})
        }
        const hashedPassword = await bcrypt.hash(password, 12);
        const user = new User({email, password: hashedPassword, name, surname});

        await user.save();

        res.status(201).json({message: "Пользователь создан"});
    } catch (err) {
        console.log(err);
    }
});

router.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email })
        if(!user) {
            return res.status(400).json({message: 'Такого email нет в базе'});
        }
        const isMatched = await bcrypt.compare(password, user.password);
        if (!isMatched) {
            return res.status(400).json({message: 'Пароли не совпадают'});
        }

        const jwtSecret = 'dshjfkjsdhfjkdshfjsdk8fjkdsl2903';
        const token = jwt.sign({
            firstName: user.name,
            secondName: user.surname,
            email: user.email
        }, jwtSecret, {
            expiresIn: "1h"
        });

        res.json({token, firstName: user.name, secondName: user.surname, email: user.email});
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;