import "./index.scss"

const Project = ({projectName, imgLink, liveLink, gitLink, rowRev, children}: Props) => {
    return <article className={`project ${rowRev || ""}`}>
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
    children?: any
}