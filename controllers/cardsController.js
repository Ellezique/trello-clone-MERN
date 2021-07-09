const {getAllCards, addCard, getCardById, deleteCard, updateCard} = require('../utils/cardsUtils')

const getCards = function (req, res){
    getAllCards(req).exec((err, cards)=>{
        if (err){
            res.status(500)
            return res.json({error: err.message})
        } 
        res.send(cards)
    })
}

const getCard = function (req, res){
    getCardById(req.params.id).exec((err, card)=>{
        if (err){
            res.status(404)
            return res.json({error: err.message})
        } 
        res.send(card)
    })
}

const newCard = function (req, res){
    addCard(req).save((err, card)=>{
        if (err){
            res.status(500)
            return res.json({error: err.message})
        }
        res.send(card)
    })
}

const removeCard = function(req, res){
    deleteCard(req.params.id).exec((err)=>{
        if (err){
            res.status(404)
            return res.json({error: err.message})
        }
        res.sendStatus(204)
    })
}

const changeCard = function(req,res){
    updateCard(req).exec((err, card)=>{
        if (err){
            res.status(404)
            return res.json({error: err.message})
        }
        res.status(200)
        res.send(card)
    })
}

module.exports = {getCards, newCard, getCard, removeCard, changeCard}