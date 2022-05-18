import "./index.scss"
import AnchorLink from 'react-anchor-link-smooth-scroll-v2'


const Navbar = (Props: any) => {
    return(
        <section className="navbar">
            <AnchorLink href='#about'>About</AnchorLink>
            <AnchorLink href='#projects'>Projects</AnchorLink>
            <AnchorLink href='#contact'>Contact</AnchorLink>
          
        </section>
    )
}


export default Navbar