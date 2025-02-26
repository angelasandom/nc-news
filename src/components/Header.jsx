import HamburgerMenu from "./HamburguerMenu"
import Nav from "./Nav"
function Header () {
    return (
        <header>
            <a href="/"><img src="nc-news-logo.png" id="logo"/></a>
            <HamburgerMenu />
            <Nav />
        </header>
    )
}

export default Header