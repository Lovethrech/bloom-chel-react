import { Link } from "react-router-dom";
import "./FooterLinkMail.css";

const FooterLinkMail=()=>{

    return(
        <div className="footer-link-mail-main-content-link-main-ctn">
            <Link to="" className="link">
                <p className="footer-link-mail-main-content-link-mini-ctn-name">
                    Send us an email
                </p>
                <div className="footer-link-mail-main-content-link-mini-ctn-arrow-ctn">
                    <img src="src/assets/footer-mail.svg" alt="Footer link Mail Icon"/>
                </div>
            </Link>
        </div>
    )
};

export default FooterLinkMail;