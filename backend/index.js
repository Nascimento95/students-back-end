const express = require("express")
const app = express()
const port = 5000
//bodyparser permet de pouvoir récupéré la valeur de ce que je met 
//dans postman
const bodyparser = require("body-parser")
const students = require("./routes/students")
// c'est deux ligne permette de utiliser bodyparser
app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))

app.use('/', students)



app.listen(port, () => {
    console.log(`serveur started on port : ${port} `);
})