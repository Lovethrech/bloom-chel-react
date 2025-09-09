import "./Footer.css";
import FooterDesc from "./FooterDesc";
import FooterLinkIconCtn from "./FooterLinkIconCtn";
import FooterLinkMail from "./FooterLinkMail";
import FooterLogo from "./FooterLogo";
import FooterRight from "./FooterRight";

const Footer=()=>{

    return(
        <footer className="footer-main-ctn">
            <div className="footer-mini-ctn">
                <FooterLogo/>
                <FooterDesc/>
                <br/>
                <FooterLinkMail/>
                <FooterLinkIconCtn/>
                <FooterRight/>
            </div>
        </footer>
    )
};

export default Footer;