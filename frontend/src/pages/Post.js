import React from 'react';
import { Link } from 'react-router-dom';

const Post = () => {
    return (
        <div>
            <p>bravo vouis avez bien envoyer le nom du student</p>
            <Link to="/">go to Homepage</Link>
        </div>
    );
};

export default Post;