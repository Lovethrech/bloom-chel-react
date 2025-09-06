import { Link } from "react-router-dom";

const NavHeader=({name, link, color})=>{
    return(
        <div className="nav-link-main-ctn">
            <Link to={link}>
                <p class="nav-link-main-ctn-desc" style={color:color, fontSize:fontSize}>
                    {name}
                </p>
            </Link>
        </div>
    )
};

export default NavHeader;