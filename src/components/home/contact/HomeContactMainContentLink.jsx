import { Link } from "react-router-dom";
import "./HomeContactMainContentLink.css";
const HomeContactMainContentLink=()=>{
    return(
        <div className="hhome-contact-main-content-link-main-ctn">
            <Link to="" className="link">
                <div className="home-contact-main-content-link-mini-ctn">
                    <p class="home-contact-main-content-link-mini-ctn-name">
                        contact us
                    </p>
                    <i class='bx  bx-arrow-up-right-stroke'  ></i> 
                </div>
            </Link>
        </div>
    )
};

export default HomeContactMainContentLink;