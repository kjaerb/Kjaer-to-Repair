import React from 'react';
import NavLink from './nav-link';
import Logo from './logo';

const Header = () => {
    return (
        <div className="header">
            <div className="wrapper">
                <Logo />
                <nav className="header-nav">
                    <NavLink text="iPhone"/>
                    <NavLink text="iPad"/>
                    <NavLink text="Macbook"/>
                    <NavLink text="Min Enhed"/>
                    <NavLink text="Om Os"/>
                    <NavLink text="Grøn Omstilling"/>
                </nav>
            </div>
        </div>
    );
}

export default Header;