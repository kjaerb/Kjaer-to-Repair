import { Link } from 'react-router-dom';

interface INavLink {
    text: string;
    href: string;
}

interface INavLinkEnviorment extends INavLink{
    src: string;

}

const NavLink = (props:INavLink) => {   
    return (
        <Link className="navlink" to={props.href}>
            <li>{props.text}</li>
        </Link>
    );
}

const NavLinkEnviorment = (props:INavLinkEnviorment) => {
    return (
        <Link className="navlinkEV" to={props.href}>
            <li>{props.text}</li>
            <img src={props.src} alt="plant"/>
        </Link>
    );
}

const Logo = () => {
    return (
        <Link to="/">
            <h1 className="logo">
                Kjaer to <span className="repair">Repair</span>
            </h1>
        </Link>
    );
}

export {
    NavLink,
    NavLinkEnviorment,
    Logo
};