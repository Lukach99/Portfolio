import "./index.scss"
import AnchorLink from 'react-anchor-link-smooth-scroll-v2'

const Home = (props:any) => {
    return(
        <section id="home" className={`home flex flex-center flex-column`} >
            <p>Hello, I'm Tino.<br />
            I'm a Front-end Developer.</p>
            <AnchorLink href="#projects">View my work</AnchorLink>
            
            
        </section>

    )
}



export default Home