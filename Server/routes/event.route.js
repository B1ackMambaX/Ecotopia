const { Router } = require('express');
const router = Router();
const Event = require('../models/Event');

router.post('/add', async (req, res)=> {
    try {
        const { creatorName, creatorSurname, creatorEmail, name, date, place, descr }= req.body;

        const event = new Event({creatorName, creatorSurname, creatorEmail, name, date, place, descr});
        await event.save();
        res.status(201).json({message: 'Событие успешно создано'});
    } catch (err) {
        console.log(err);
    }
});

router.post('/get', async (req, res) => {
    try {
        const events = await Event.find();
        res.json(events);
    } catch (err) {
        console.log(err);
    }
});

module.exports = router;