import {Link, NavLink} from "react-router-dom";

export function NavBar() {
    return (
        <ul style={{display: 'flex', listStyleType: 'none'}}>
            <li style={{marginRight: '15px'}}>
                <NavLink to="/" className="Link">Main Page</NavLink>
            </li>
            <li style={{marginRight: '15px'}}>
                <NavLink to="/about" className="Link">About Page</NavLink>
            </li>
            <li style={{marginRight: '15px'}}>
                <NavLink to="/contacts" className="Link">Contacts Page</NavLink>
            </li>
            <li style={{marginRight: '15px'}}>
                <NavLink to="/posts" className="Link">Posts Page</NavLink>
            </li>
            <li style={{marginRight: '15px'}}>
                <NavLink to="/footer" className="Link">Footer Page</NavLink>
            </li>
        </ul>
    )
}