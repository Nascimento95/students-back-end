import React, { useState, useEffect } from 'react';


const ListStudent = () => {
    const [students, setStudents] = useState([])
    

    useEffect(() => {
        fetch( `http://localhost:5000/students`)
            .then(reponse => reponse.json())
            .then(data => setStudents(data))
    }, []);
    console.log("state de mes etudiant dans liststudents=>",students);
    
    var style = {
       width: '18rem',
    };
    return (
        <div className ="d-flex flex-wrap">
            
            {students.map(student => 
            <div className="card space-between col-4 my-3" style={style}>
                {/* <img src="..." className="card-img-top" alt="..."/> */}
                <div className="card-body">
                <h5 className="card-title">Name student</h5>
                <p className="card-text"> nom: {student.name}</p>
                <p className="card-text"> age: {student.age}</p>
                <p className="card-text"> e-mail: {student.email}</p>
                <a href="#" className="btn btn-primary">check de profil</a>
                </div>
          </div>
        )}
        </div>
    );
};

export default ListStudent;