import AboutImg from "./AboutImg";
import "./index.scss";

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
    const links = imageLinks.map((item: Props) => { return (
        <AboutImg name={item.name.toUpperCase()} imageLink={item.imageLink} ></AboutImg>)})

    return(
        <section className={`about flex flex-justify-start flex-align-center flex-column`} >
            <h2>About</h2>

            <div className="flex ">
            <p>Just a young guy with passion for technology and photography, I'm a front-end developer with skills in JavaScript, React , Typescript, HTML and CSS. The unique combination of creativity, logic, technology and never running out of new things to discover, drives my excitement and passion for web development. When I'm not coding I like to spend my time playing video games, hang out with friends and watch movies.</p>
            <section className="skills">
                {links}
            </section>
            </div>
            
            </section>

    );
};



export default About;