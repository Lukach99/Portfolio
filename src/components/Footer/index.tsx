import "./index.scss"

import AnchorLink from 'react-anchor-link-smooth-scroll-v2'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faAnglesLeft } from '@fortawesome/free-solid-svg-icons'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'


const Footer = (props: any) => { 
    return <section className="footer flex flex-column flex-center">
        <div className="return">
            <AnchorLink href="#home"> <FontAwesomeIcon icon={faAnglesLeft} size="2x" rotation={90} className="return-btn"/> </AnchorLink>
        
        </div>

        <div>
        <a href="https://github.com/Lukach99" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} size="2x" className="m-r-20"/></a>
        
        <a href="https://www.linkedin.com/in/tino-luka%C4%8D-55b69b20a" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} size="2x" className="m-r-20"/></a>

        <a href="mailto:lukac.tino@gmail.com"><FontAwesomeIcon icon={faEnvelope} size="2x"/></a>
        
        </div>

        <s className="copyright">©2022 Tino Lukač All rights reserved Built by Tino Lukač</s>


    </section>

 }

export default Footer