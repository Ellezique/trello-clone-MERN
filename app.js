const express = require('express')
const cors = require('cors')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cardsRouter = require('./routes/cardsRoutes') 
const port = 4000
const app = express()
const dbConn = 'mongodb://localhost/trello_clone_db'
app.use(cors())
app.use(bodyParser.json())

mongoose.connect(dbConn,
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false
    },
    err => {
        if (err){
            console.log("No database connection", err)
        } else {
            console.log("Connected to the database")
        }
    }
)
app.get("/", (req, res) => {
    res.send("Hello world!")
    })

app.use("/cards", cardsRouter)
app.listen(port, ()=>{console.log(`Trello clone server is running on port ${port}`)})



