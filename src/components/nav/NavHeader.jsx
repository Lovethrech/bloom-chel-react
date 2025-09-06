import NavLogo from "./NavLogo";
import NavLink from "./NavLink";

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
// const navLinkFontSize=useState("1.8vh");
// const tryFreeBtnBgColor=useState("#ffffff");
// const tryFreeBtnColor=useState("#A54dea");
// const displayNavMenuMobileListCtn=useState("none");
// const navMenuActiveIcon=useState("<i class='ri-menu-4-line'></i>");

const NavHeader=()=>{
    return(
        <div className="nav-header-main-ctn">
            <NavLogo/>
            <div className="nav-header-main-ctn-nav">
            {NavHeaderDetails.map(NavHeaderDetails=>{
                <NavLink
                    className="desktop-nav"
                    
                />
            })}
                // <NavLink
                //     className="desktop-nav"
                //     name=`${NavHeaderDetails[0].name}`
                //     link="NavHeaderDetails[0].link"
                //     color="navLinkColor"
                // />
            </div>
        </div>
    )
};

export default NavHeader;