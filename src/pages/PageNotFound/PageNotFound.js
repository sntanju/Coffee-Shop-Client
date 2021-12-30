import React from 'react';
import { NavLink } from 'react-router-dom';
import './PageNotFound.css';

const PageNotFound = () => {
    return (
        <div className='notfound'>
            <h1><b>Page Not Found</b></h1>
            <NavLink to="/home"><b>Go To Home</b></NavLink>
        </div>
    );
};

export default PageNotFound;