import Navbar from "./navbar"
import "./index.scss"
import Logo from "./h1-logo"

const Header = (props:any) => {
    return (
        <header className="header">
            <Logo></Logo>
            <Navbar>
                
            </Navbar>
        </header>
    )
}

export default Header