import React from 'react';
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <Link to="/">
            <h1 className="logo">
                Kjaer to Repair
            </h1>
        </Link>
    );
}

export default Logo;