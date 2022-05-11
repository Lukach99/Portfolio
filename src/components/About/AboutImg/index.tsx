import "./index.scss";


const AboutImg = ({imageLink,name}:Props) => {
    return(
        <div className="skill-img">
            <img className="logo-img" src={imageLink} alt={name} />
            <p>{name}</p>
        </div>

    );
};

type Props = {
    imageLink: string,
    name:string
}

export default AboutImg;