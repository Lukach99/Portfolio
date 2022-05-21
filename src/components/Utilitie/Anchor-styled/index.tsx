import "./index.scss"
import AnchorLink from 'react-anchor-link-smooth-scroll-v2'

const StyledAnchor = ({link, isButton, children, target, isScroll}:Props ) => {
    if(isButton){
        return <button type="submit" className="styled-anchor styled-button" >{children}</button>
    }

    if(isScroll){

        return <div className="styled-anchor styled-scroll">
                <AnchorLink href={link}>{children}</AnchorLink>
        </div>
        
        /* return <a href={link} className="styled-anchor" target={target ? "_blank" : "_self"}>{children}</a> */
    }
    return <a href={link} className="styled-anchor" target={target ? "_blank" : "_self"}>{children}</a>

} 


type Props={
    link?: string,
    isButton?: boolean,
    target?: boolean,
    isScroll?: boolean,
    children: any
}

export default StyledAnchor