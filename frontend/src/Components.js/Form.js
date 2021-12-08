import React, { useState } from 'react';
import { useNavigate } from 'react-router';
   

const Form = () => {

    const [name, setName] = useState("")
    // const [FullName, setValue] = useState("")
    // const [age, setValue] = useState("")
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
        .then(data => console.log(data))
        navigate("/post")

    }
    
    const handleChange =(e) => {
        setName(e.target.value)
        // console.log("sa envoi la value de l'input", e.target.value);
    }

    return (
        <div>
            
            <div className="mt-5">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label  className="form-label">firstName</label>
                        <input onChange={handleChange} type="text" value={name} className="form-control"  />
                        <div id="emailHelp" className="form-text"></div>
                    </div>
                    <button type="submit"  className="btn btn-primary">Submit</button>
                    {/* <div className="mb-3">
                        <label  className="form-label">FullName</label>
                        <input type="text" value="" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Age</label>
                        <input type="text" value="" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Address</label>
                        <input type="text" value="" className="form-control" />
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Codepostal</label>
                        <input type="text" value="" className="form-control" />
                    </div> */}
                </form>
            </div>
        </div>
    );
};

export default Form;