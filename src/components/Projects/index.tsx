import "./index.scss"
import Project from "./project"
import ticTacToe from "../../images/tic-tac-toe.png"
import phoneSite from "../../images/mobile-phone-site.png"
import portfolioSite from "../../images/portfolio-site.png"

import gsap from "gsap"

import{ ScrollTrigger} from "gsap/ScrollTrigger"
import { useRef, useEffect } from "react"

gsap.registerPlugin(ScrollTrigger)

const Projects = (props:any) => {
    
    return(
        <section id="projects" className="projects flex flex-center flex-column" >
            <h2>Projects</h2>
            <p className="projects__p projects__p-1">Real projects coming soon...</p>
            
            <p className="projects__p projects__p-2">Until then you can checkout my first ever little projects that were made using only HTML, CSS and Javascript except "My Portfolio website". I didn't tweaked the code as I learned new things because I wanted to remind myself how much progress I have made.</p>
            
            <Project imgLink={portfolioSite} projectName="Well, this website" rowRev="rowRev" gitLink="https://github.com/Lukach99/Portfolio" liveLink="https://lukach99.github.io/Portfolio/">My portfolio is made with React.js, Typescript and Sass. This was my first attempt on website with React and is so much easier to structure the code and change components and I love it. This website will be constantly updated with future projects.</Project>
            
            <Project imgLink={ticTacToe} projectName="Tic-Tac-Toe" gitLink="https://github.com/Lukach99/tic-tac-toe" liveLink="https://lukach99.github.io/tic-tac-toe/">This is my first project using Javascript, HTML and Sass. When I learned DOM events I immediately started doing this fun little project. It still has some bugs and quirks that I didn't polish but I was happy because I made something with logic behind it and it worked.</Project>

            <Project imgLink={phoneSite} projectName="First website - My Phone" rowRev="rowRev" gitLink="https://github.com/Lukach99/Moj_mobitel" liveLink="https://lukach99.github.io/Moj_mobitel/">This website was my homework for BrainLab Academy. It's made using only HTML and CSS. Nothing special about it just a humble beginning to my journey.</Project>
        </section>
        
    )
}

export default Projects