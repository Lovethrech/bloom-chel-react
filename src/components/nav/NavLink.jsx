import { Link } from "react-router-dom";

const NavHeader=()=>{
    return(
        <div className="nav-link-main-ctn">
            <Link to="/">
                <p class="nav-link-main-ctn-desc" :style="{color:color, fontSize:fontSize}">
                    {{name}}
                </p>
            </Link>
        </div>
    )
};

export default NavHeader;