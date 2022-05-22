import "./index.scss"
import AnchorLink from 'react-anchor-link-smooth-scroll-v2'

const StyledAnchor = ({link, isButton, children, blank, isScroll}:Props ) => {
    if(isButton){
        return <button type="submit" className="styled-anchor styled-button" >{children}</button>
    }

    if(isScroll){

        return <div className="styled-anchor styled-scroll">
                <AnchorLink href={link}>{children}</AnchorLink>
        </div>
        
    }
    console.log(blank)
    return <a href={link} className="styled-anchor" target={blank ? "_blank" : "_self"}>{children}</a>

} 


type Props={
    link?: string,
    isButton?: boolean,
    blank?: boolean,
    isScroll?: boolean,
    children: any
}

export default StyledAnchor