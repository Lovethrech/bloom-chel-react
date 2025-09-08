import { Link } from "react-router-dom";
import './Nav.css';

const NavMenuMobileListCtnLink=({name, link, color, fontSize})=>{
    return(
        <div className="nav-link-main-ctn" id="nav-link-main-ctn">
            <Link to={link} className="link">
                <p className="nav-link-main-ctn-desc" style={{color:color, fontSize:fontSize}}>
                    {name}
                </p>
            </Link>
        </div>
    )
};

export default NavMenuMobileListCtnLink;