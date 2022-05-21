import "./index.scss"
import AnchorLink from 'react-anchor-link-smooth-scroll-v2'
import StyledAnchor from "../../Utilitie/Anchor-styled"


const Navbar = (Props: any) => {
    return(
        <section className="navbar">
            <StyledAnchor link="#about" isScroll={true}>About</StyledAnchor>
            <StyledAnchor link="#projects" isScroll={true}>Projects</StyledAnchor>
            <StyledAnchor link="#contact" isScroll={true}>Contact</StyledAnchor>
            {/* <AnchorLink href='#about'>About</AnchorLink>
            <AnchorLink href='#projects'>Projects</AnchorLink>
            <AnchorLink href='#contact'>Contact</AnchorLink> */}
          
        </section>
    )
}


export default Navbar