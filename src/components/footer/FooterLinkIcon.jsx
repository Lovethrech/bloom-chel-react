import "./FooterLinkIcon.css";

const FooterLinkIcon=({name})=>{

    return(
        <div 
            className="footer-link-icon-main-ctn" 
            dangerouslySetInnerHTML={{ __html: name }}
        >
        </div>
    )
};

export default FooterLinkIcon;