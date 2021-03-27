'use strict';

const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController');
// userRoute


router.get('/', userController.user_list_get);

/*
router.get('/:id', (req, res) => {
    res.send('You requested a cat whose id is '+req.params.id);
});
*/
router.get('/:id',userController.user_get)

router.post('/', (req, res) => {
    console.log(req.body)
    res.json(req.body);
});
router.put('/', (req, res) => {
    res.send('From this endpoint you can edit cats.');
});

router.delete('/', (req, res) => {
    res.send('From this endpoint you can delete cats.');
});

module.exports = router
