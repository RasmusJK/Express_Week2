'use strict';
/*
const cats = [
  {
    id: '1',
    name: 'Frank',
    age: '6',
    weight: '5',
    owner: '1',
    filename: 'http://placekitten.com/400/300',
  },
  {
    id: '2',
    name: 'James',
    age: '4',
    weight: '11',
    owner: '2',
    filename: 'http://placekitten.com/400/302',
  },
];

module.exports = {
  cats,
};
*/

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const catSchema = new Schema({
  name:  String,
  age:  {type: "Number",min: [0]},
  gender:  {type: String,enum: ['male','female']} ,
  color:  String,
  weight:  Number

});
module.exports = mongoose.model('Cats', catSchema);