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
const navLinkFontSize="1.8vh";
// const tryFreeBtnBgColor=useState("#ffffff");
// const tryFreeBtnColor=useState("#A54dea");
// const displayNavMenuMobileListCtn=useState("none");
// const navMenuActiveIcon=useState("<i class='ri-menu-4-line'></i>");

const NavHeader=()=>{
    return(
        <div className="nav-header-main-ctn">
            <NavLogo/>
            <div className="nav-header-main-ctn-nav">
                {NavHeaderDetails.map(NavHeaderDetail=>{
                    <NavLink
                        key={NavHeaderDetail.id}
                        className="desktop-nav"
                        name={NavHeaderDetail.name}
                        link={NavHeaderDetail.link}
                        color={navLinkColor}
                        fontSize={navLinkFontSize}
                    />
                })}
            </div>
        </div>
    )
};

export default NavHeader;