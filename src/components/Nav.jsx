
import { NavLink } from "react-router-dom";

function Nav() {
    return (
        <nav>
        <ul>
            <li>
              <NavLink to="/" className="nav-link">Home</NavLink>
            </li>
            <li>
              <NavLink to="/topics/coding" className="nav-link">Coding</NavLink>
            </li>
            <li>
              <NavLink to="topics/cooking" className="nav-link">Cooking</NavLink>
            </li>
            <li>
              <NavLink to="topics/football" className="nav-link">Football</NavLink>
            </li>
        </ul>
        </nav>    
    )
}

export default Nav