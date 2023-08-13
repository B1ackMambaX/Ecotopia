const express = require('express');
const cors =  require('cors');
const mongoose = require('mongoose');

const app = express();
const PORT = process.env.PORT || 8000;
app.use(express.json({extended: true}));
app.use(cors());
app.use('/api/auth/', require('./routes/auth.route'));
app.use('/api/events', require('./routes/event.route'));
app.use('/api/articles', require('./routes/article.route'));

async function start() {
    try {
        await mongoose.connect('mongodb+srv://b1ackmambax:dRdwOL2t8wgkQLuZ@cluster0.7xzxxlm.mongodb.net?retryWrites=true&w=majority');

        app.listen(PORT, () => {
            console.log('Server started');
        })
    } catch (err) {
        console.log(err);
    }
}
start();