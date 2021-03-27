'use strict';

const express = require('express')
const router = express.Router()
const catController = require('../controllers/catController');
// catRoute
/*
router.get('/', (req, res) => {
    res.send('From this endpoint you can get cats.');
});
*/

router.get('/', catController.cat_list_get);

/*
router.get('/:id', (req, res) => {
    res.send('You requested a cat whose id is '+req.params.id);
});
*/
router.get('/:id',catController.cat_get)

router.post('/', (req, res) => {
    res.send('From this endpoint you can add cats.');
});
router.put('/', (req, res) => {
    res.send('From this endpoint you can edit cats.');
});

router.delete('/', (req, res) => {
    res.send('From this endpoint you can delete cats.');
});

module.exports = router
