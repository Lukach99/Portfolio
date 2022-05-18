import "./index.scss"
import Project from "./project"
import ticTacToe from "../../images/tic-tac-toe.png"
import phoneSite from "../../images/mobile-phone-site.png"

const Projects = (props:any) => {
    return(
        <section id="projects" className="projects flex flex-center flex-column" >
            <h2>Projects</h2>
            <p className="projects__p projects__p-1">Real projects coming soon...</p>
            
            <p className="projects__p">Until then you can checkout my first ever little projects that were made using only HTML, CSS and Javascript. <br />I didn't tweaked the code as I learned new things because I wanted to remind myself how much progress I have made.</p>
            
            
            <Project imgLink={ticTacToe} projectName="Tic-Tac-Toe" gitLink="https://github.com/Lukach99/tic-tac-toe" liveLink="https://lukach99.github.io/tic-tac-toe/">This is my first project using Javascript, HTML, CSS. When I learned DOM events I immediately started doing this fun little project. It still has some bugs and quirks that I didn't polish but I was happy because I made something with logic behind it and it worked.</Project>

            <Project imgLink={phoneSite} projectName="First website - My Phone" rowRev="rowRev" gitLink="https://github.com/Lukach99/Moj_mobitel" liveLink="https://lukach99.github.io/Moj_mobitel/">This is my first project using Javascript, HTML, CSS. When I learned DOM events I immediately started doing this fun little project. It still has some bugs and quirks that I didn't polish but I was happy because I made something with logic behind it and it worked.</Project>
        </section>
        
    )
}

export default Projects