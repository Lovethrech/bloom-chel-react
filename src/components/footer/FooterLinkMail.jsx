import { Link } from "react-router-dom";
import "./FooterLinkMail.css";

const FooterLinkMail=()=>{

    return(
        <div className="footer-link-mail-main-content-link-main-ctn">
            <Link to="" className="link">
            <div class="footer-link-mail-main-content-link-mini-ctn">   
                <p className="footer-link-mail-main-content-link-mini-ctn-name">
                    Send us an email
                </p>
                <div className="footer-link-mail-main-content-link-mini-ctn-arrow-ctn">
                    <img src="/footer-mail.svg" alt="Footer link Mail Icon"/>
                </div>

            </div>
            </Link>
        </div>
    )
};

export default FooterLinkMail;