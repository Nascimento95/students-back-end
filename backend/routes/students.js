const express = require("express")
const app = express()

let students = [{
    id :1,
    name : "marco",
    age : 32,
    email : "marco-pereira@hotmail.fr",
     
}]

app.get("/students", (req, res) => {
    res.json(students)
})

app.post("/students", (req, res) => {
    console.log( "resultat de req",req.body.name);
    const comparation = students.find( student => student.name === req.body.name)
    console.log("resultat de mon find=>",comparation);
    if(comparation){
        console.log("name deja utiliser");
        res.status(409).send("name deja utiliser")
    } else {
        const student = {
            id:students.length +1,
            ...req.body
        }
        students = [...students, student]
        res.json(student)
    }
    
})
module.exports = app