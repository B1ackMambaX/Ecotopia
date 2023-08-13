const { Router } = require('express');
const router = Router();
const Article = require('../models/Article');

router.post('/get', async (req, res) => {
    try {
        const articles = await Article.find();
        res.json(articles);
    } catch (err) {
        console.log(err);
    }
});

// router.post('/add', async (req, res) => {
//     const { heading, descr, link } = req.body;
//     const article = new Article({heading, descr, link});
//     try {
//         await article.save();
//     } catch (err) {
//         console.log(err);
//     }
// });

module.exports = router;