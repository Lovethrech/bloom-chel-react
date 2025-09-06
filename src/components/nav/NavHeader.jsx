import NavLogo from "./NavLogo";
import NavLink from "./NavLink";

const NavHeader=()=>{
    return(
        <div className="nav-header-main-ctn">
            <NavLogo/>
            <div className="nav-header-main-ctn-nav">
                <NavLink/>
            </div>
        </div>
    )
};

export default NavHeader;