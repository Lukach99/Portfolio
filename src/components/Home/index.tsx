import "./index.scss"
import AnchorLink from 'react-anchor-link-smooth-scroll-v2'

const Home = (props:any) => {
    return(
        <section id="home" className={`home flex flex-center flex-column`} >
            <div>
            <p>Hello, I'm Tino.<br />
            I'm a Front-end Developer.</p>
            <AnchorLink href="#projects">View my work</AnchorLink>
            </div>
            
            
            
        </section>

    )
}



export default Home