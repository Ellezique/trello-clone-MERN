const express = require('express')
const router = express.Router()

const {getCards, newCard, getCard, removeCard, changeCard} = require('../controllers/cardsController')
const {loginRequired} = require('../controllers/authController')

router.use(loginRequired)

router.get('/', getCards)
router.get('/:id', getCard)

router.use(loginRequired)

router.post('/', newCard)



router.delete('/:id', removeCard)

router.put('/:id', changeCard)



module.exports = router