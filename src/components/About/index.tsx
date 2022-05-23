import AboutImg from "./AboutImg";
import "./index.scss";
import profilePic from "../../images/profile-pic.jpg"

import { useRef, useEffect } from "react";
import gsap from "gsap"

import{ ScrollTrigger} from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const imageLinks = [{
    name: "html",
    imageLink: "https://benscott.dev/imgs/html.6aa56206be02cf6404844871df1d2da6.png"
},{
    name: "javascript",
    imageLink: "https://benscott.dev/imgs/js.f8a28e905c78dadb79434b7ceebd52a0.png"
},{
    name: "react",
    imageLink: "https://benscott.dev/imgs/react.cb15bfce2a9004ce61c5f79f805b067b.png"
},{
    name: "sass",
    imageLink: "https://benscott.dev/imgs/sass.3706567f8b353c748df3850c1aabca46.png"
},{
    name: "git",
    imageLink: "https://benscott.dev/imgs/git.3092b5991e8accb9e7c36817c048a8d5.png"
},{
    name: "typescript",
    imageLink: "https://iconape.com/wp-content/png_logo_vector/typescript.png"
}]



type Props={
    name:string,
    imageLink:string
}

const About = (props:any) => {
    const links = imageLinks.map((item: Props, index:number) => { return (
        <AboutImg key={index} name={item.name.toUpperCase()} imageLink={item.imageLink} ></AboutImg>)})

    const imgRef = useRef(null)
    const parRef = useRef(null)
    const skillsRef = useRef(null)
    useEffect(() => { 
        const imgEl = imgRef.current;
        const parEl = parRef.current;
       
       
        gsap.fromTo(imgEl, {x: -150, opacity: 0},{x: 0, opacity:1, duration:2.5, scrollTrigger:{trigger: imgEl}})
        gsap.fromTo(parEl, {x: 300, opacity: 0},{x: 0, opacity:1, duration:2.5, scrollTrigger:{trigger: parEl}})
       
     
     },[])

    return(
        <section  id="about" className={`about flex flex-justify-start flex-align-center flex-column`} >
            <h2>About</h2>


            <article >
            <div ref={imgRef} className="flex ">
                <div className="img-div" >
                <img className="profile-pic" src={profilePic} width="300" alt="bzbz"/>
                </div>
            
            <div>
                <div ref={parRef}>
                <p >Just a young guy with passion for technology and photography, I'm a front-end developer with skills in JavaScript, React , Typescript, HTML and CSS. The unique combination of creativity, logic, technology and never running out of new things to discover, drives my excitement and passion for web development. Currently attending <a href="https://brainlabacademy.hr/">BrainLab Academy</a> for Front-End developing. When I'm not coding I like to spend my time playing video games, hang out with friends and watch movies.</p>
            <section className="skills flex ">
                {links}
            </section>
                </div>
            
            
            </div>
            </div>
            </article>
            
            
            
            
            
            
            </section>

    );
};



export default About;