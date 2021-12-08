const express = require("express")
const app = express()

let students = [{
    "id":1,
    "firstName" : "marco",
    "fullName" :"marco  paulo nascimento pereira",
    "age" : 32,
    "address" : "66 rue de la chapelle",
    "codePostal" : "val d'oise",   
}]

app.get("/students", (req, res) => {
    res.json(students)
})

app.post("/students", (req, res) => {
    console.log( "resultat",req.body);
    const student = {
        ...req.body,
        id:students.length +1
    }
    students = [...students, student]
    res.json(student)
})
module.exports = app