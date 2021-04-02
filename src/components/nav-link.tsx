import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const NavLink = (props: { text: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
    return (
        <Link className="navlink" to="/home-page">
            <li>{props.text}</li>
        </Link>
    );
}

export default NavLink;