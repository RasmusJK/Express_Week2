'use strict';
// catController

const cats = require('../models/catModel');



const cat_list_get = async (req, res) => {
    res.json(await cats.find());
};

const cat_get =(req,res) => {
    const id = req.params.id;
    const cat = cats.filter((cat) => cat.id === id).pop();
    res.json(cat);
};

const cat_post = async (req, res) => {
    const post = await cats.create({
        name: req.body.name,
        age: req.body.age,
        gender: req.body.gender,
        color: req.body.color,
        weight: req.body.weight,
    });
    res.send(`cat post ${post.name} created with id: ${post._id}`);
}
module.exports = {
    cat_list_get,
    cat_get,
    cat_post
};