import "./index.scss"

import { useState, useEffect } from "react"


import StyledAnchor from "../../Utilitie/Anchor-styled"


import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'


const Navbar = (Props: any) => {
    const [phone, setPhone] = useState(false)

    const menuHandler = () => {
        if(phone){
            setPhone(false)
        } else{
            setPhone(true)
        }
    }

    return(

        <section className="navbar">
            <section className="nav-phone">
                <button onClick={menuHandler}><FontAwesomeIcon icon={faBars} size="lg" /></button>
                
            </section>
            <section className={phone ? "nav phone" : "nav"}>
                <button onClick={menuHandler}><StyledAnchor link="#about" isScroll={true}>About</StyledAnchor></button>               
                <button onClick={menuHandler}><StyledAnchor link="#projects" isScroll={true}>Projects</StyledAnchor></button>
                <button onClick={menuHandler}><StyledAnchor link="#contact" isScroll={true}>Contact</StyledAnchor></button>
                <button onClick={menuHandler} className="nav-exit"><FontAwesomeIcon icon={faXmark} size="1x" /></button>
            </section>
        </section>
        
 
        
    )
}


export default Navbar