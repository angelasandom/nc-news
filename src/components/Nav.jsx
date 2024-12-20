import { Link } from "react-router";

function Nav() {
    return (
        <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
              <Link to="/topics/coding">Coding</Link>
            <li>
              <Link to="topics/cooking">Cooking</Link>
            </li>
            <li>
              <Link to="topics/football">Footbal</Link>
            </li>
        </ul>
    )
}

export default Nav