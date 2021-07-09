const Card = require ('../models/card')

const getAllCards = function (req){
    return Card.find()
}

const addCard = function(req){
    let date = Date.now()
    req.body.created_at = date
    req.body.modified_at = date
    return Card(req.body)
}

const getCardById = function (id){
    return Card.findById(id)
}

const deleteCard = function(id){
    return Card.findByIdAndRemove(id)
}

const updateCard = function(req){
    req.body.modified_at = Date.now()
    //new: true will return the updated card
    return Card.findByIdAndUpdate(req.params.id, req.body, {new: true})
}

module.exports = {getAllCards, addCard, getCardById, deleteCard, updateCard}

