
import { useRef, useEffect } from "react";
import "./index.scss"

import gsap from "gsap"

import{ ScrollTrigger} from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const Project = ({projectName, imgLink, liveLink, gitLink, rowRev, children,}: Props) => {

    const elemRef = useRef(null)

    useEffect(() => { 
        const el = elemRef.current;
        if(rowRev){
            gsap.fromTo(el, {x: -150, opacity: 0},{x: 0, opacity:1, duration:2, scrollTrigger:{trigger: el}})
        } else(
            gsap.fromTo(el, {x: 150,opacity: 0},{x: 0,opacity: 1, duration:2, scrollTrigger:{trigger: el}})
        )
        
        console.log(el)
     },[])


    return <article ref={elemRef} className={`project ${rowRev || ""}`}>
        <div className="project__img">
        <img src={imgLink} alt={projectName}  />
        </div>
        
        <article className="project__info">
        <h3>{projectName}</h3>
        <p>{children}</p>
        <a href={liveLink} target="_blank">LIVE SITE</a>
        <a href={gitLink} target="_blank">LEARN MORE</a>
        </article>
        

    </article>
}

export default Project

type Props = {
    projectName: string,
    imgLink: string,
    liveLink: string,
    gitLink: string
    rowRev?: string,
    children?: any,
   
}