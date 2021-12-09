import React from 'react';
import ListStudent from '../Components.js/ListStudent';
import Nav from '../Components.js/Nav'
const Home = () => {
    return (
        <div className="mt-5">
            <h1 className="text-center">Homepage</h1>
            <Nav />
            
            <ListStudent />
        </div>
    );
};

export default Home;