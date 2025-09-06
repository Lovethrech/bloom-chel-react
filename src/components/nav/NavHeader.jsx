import { useState } from "react";
import NavHeaderDetails from "src/data/nav-header-details.json";
import NavLogo from "./NavLogo";
import NavLink from "./NavLink";

const navLinkColor=useState("#ffffff");
const navLinkFontSize=useState("1.8vh");
const tryFreeBtnBgColor=useState("#ffffff");
const tryFreeBtnColor=useState("#A54dea");
const displayNavMenuMobileListCtn=useState("none");
const navMenuActiveIcon=useState("<i class='ri-menu-4-line'></i>");

const NavHeader=()=>{
    return(
        <div className="nav-header-main-ctn">
            <NavLogo/>
            <div className="nav-header-main-ctn-nav">
                <NavLink
                    className="desktop-nav"

                />
            </div>
        </div>
    )
};

export default NavHeader;