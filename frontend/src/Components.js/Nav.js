import React from 'react';
import {Link} from 'react-router-dom'
const Nav = () => {
    return (
        <div className="d-flex justify-content-end ">
            <Link to="/form"><li className="list-group-item disabled">Inscription</li></Link>
            <Link to="/"><li className="list-group-item disabled mx-5">Homepage</li></Link>
        </div>
    );
};

export default Nav;