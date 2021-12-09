import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import Nav from './Nav';

const Form = () => {

    const [name, setName] = useState("")
    const [age, setAge] = useState("")
    const [email, setEmail] = useState("")
    const [error, setError] = useState("")
    // const [address, setValue] = useState("")
    // const [value, setValue] = useState("")
    let navigate = useNavigate();

    const handleSubmit = e => {
        e.preventDefault()
        // console.log("sa clik dur", e.target.value);  
        // on créé une variable qui stock la valeur de l input dans un state
        //et met ce state dans la clé name de mon objet
        const student = {
            name: name,
            age: Number(age),
            email:email
        } 

        fetch('http://localhost:5000/students', {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            // je transforme mon objet student en string
            body: JSON.stringify(student)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data)
            navigate("/post")
        })
        .catch(error => setError("name deja utiliser"))
        

    }
    
    const handleChange =(e) => {
        setName(e.target.value)
        // console.log("sa envoi la value de l'input", e.target.value);
    }
    const handleChange1 =(e) => {
        setAge(e.target.value)
        // console.log("sa envoi la value de l'input", e.target.value);
    }
    const handleChange2 =(e) => {
        setEmail(e.target.value)
        // console.log("sa envoi la value de l'input", e.target.value);
    }
    
    return (
        <div>
            <Nav />
            <div className="mt-5">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label  className="form-label">firstName</label>
                        <input onChange={handleChange} type="text" value={name} className="form-control"  />
                        <div id="emailHelp" className="form-text"></div>
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">age</label>
                        <input onChange={handleChange1} type="number" value={age} className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">E-mail</label>
                        <input onChange={handleChange2} type="e-mail" value={email} className="form-control" />
                    </div>
                    <button type="submit"  className="btn btn-primary">Submit</button>
                </form>
                {error && <p>{error}</p>}
            </div>
        </div>
    );
};

export default Form;