import React from 'react';
import { NavLink, NavLinkEnviorment, Logo } from './nav-link';
import Img from './image';

//Images
import SearchLogo from '../assets/svg/search.svg';
import Plant from '../assets/svg/plant.svg';

const Header = () => {
    return (
        <div className="header">
            <div className="wrapper">
                <Logo />
                <NavLink text="iPhone" href='/iphone'/>
                <NavLink text="iPad" href='/ipad'/>
                <NavLink text="Macbook" href='/macbook'/>
                <NavLink text="Min Enhed" href='/min-enhed'/>
                <NavLink text="Skærm Typer" href='/skaerm-typer'/>
                <NavLink text="Om Os" href='/om-os'/>
                <NavLinkEnviorment text="Grøn omstilling" href='/groen-omstilling' src={Plant}/>
                <img className='search-icon' src={SearchLogo} alt='search button'/>
            </div>
        </div>
    );
}

export default Header;