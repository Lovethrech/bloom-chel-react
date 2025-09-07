import NavLogo from "./NavLogo";
import NavLink from "./NavLink";
import NavTryFreeBtn from "./NavTryFreeBtn";
import NavMenu from './NavMenu';
import NavMenuMobileListCtn from './NavMenuMobileListCtn';
import './Nav.css';

const NavHeaderDetails=[
    {
        "id":"1",
        "name":"about",
        "link":"/"
    },
    {
        "id":"2",
        "name":"blog",
        "link":"/"
    },
    {
        "id":"3",
        "name":"contact",
        "link":"/"
    },
    {
        "id":"4",
        "name":"pricing",
        "link":"/pricing"
    }
]

const navLinkColor="#ffffff";
const navLinkFontSize="1.8vh";
const tryFreeBtnBgColor="#ffffff";
const tryFreeBtnColor="#A54dea";
const displayNavMenuMobileListCtn="none";
const navMenuActiveIcon="<i class='ri-menu-4-line'></i>";

const navMenuDisplayMenu=()=>{
    if (navMenuActiveIcon==="<i class='ri-menu-4-line'></i>"){
        navMenuActiveIcon.value="<i class='ri-close-large-line'></i>";
        displayNavMenuMobileListCtn.value="block";
    }
    else{
        navMenuActiveIcon.value="<i class='ri-menu-4-line'></i>";
        displayNavMenuMobileListCtn.value="none";
    }
};

const NavHeader=()=>{
    return(
        <header className="nav-header-main-ctn">
            <NavLogo/>
            <div className="nav-header-main-ctn-nav">
                {NavHeaderDetails.map(NavHeaderDetail=>{
                    return(
                        <NavLink
                            key={NavHeaderDetail.id}
                            className="desktop-nav"
                            name={NavHeaderDetail.name}
                            link={NavHeaderDetail.link}
                            color={navLinkColor}
                            fontSize={navLinkFontSize}
                        />
                    )
                })}
                <NavTryFreeBtn
                    className="nav-header-try-free"
                    tryFreeBtnBgColor={tryFreeBtnBgColor}
                    tryFreeBtnColor={tryFreeBtnColor}
                />
                <NavMenu
                    className="mobile-nav-menu"
                    navMenuActiveIcon={navMenuActiveIcon}
                    onClick={navMenuDisplayMenu}
                />
                <NavMenuMobileListCtn
                    className="mobile-nav" 
                    style={{display:displayNavMenuMobileListCtn}}
                />
            </div>
        </header>
    )
};

export default NavHeader;