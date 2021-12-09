import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Post from './pages/Post';
import Home from './pages/Home';
import Formulaire from './pages/Formulaire';


const App = () => {
  return (
    <div className="container">
     
      <BrowserRouter>
        <Routes>
                <Route exact path="/" element={<Home/>}  />
                <Route  path="/form" element={<Formulaire/>} />
                <Route  path="/post" element={<Post/>} />
                {/* <Route  path="*" element={<NotFound/>} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;