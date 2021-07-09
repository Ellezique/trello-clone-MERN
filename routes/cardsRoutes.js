const express = require('express')
const router = express.Router()

const {getCards, newCard, getCard, removeCard, changeCard} = require('../controllers/cardsController')

router.get('/', getCards)
router.post('/', newCard)

router.get('/:id', getCard)

router.delete('/:id', removeCard)

router.put('/:id', changeCard)



module.exports = router