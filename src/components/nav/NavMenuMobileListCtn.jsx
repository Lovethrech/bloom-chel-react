import NavMenuMobileListCtnLink from "./NavMenuMobileListCtnLink";
import NavMenuMobileListCtnTryFreeBtn from "./NavMenuMobileListCtnTryFreeBtn";
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
const navLinkColor="#000000";
const navLinkFontSize="31px";
const tryFreeBtnBgColor="linear-gradient(to bottom, #A54dea, #594edc)";
const tryFreeBtnColor="#ffffff";
const NavHeader=({displayNavMenuMobileListCtn})=>{
    return(
        <div 
            className="nav-menu-mobile-list-ctn-main-ctn" 
            style={{display: displayNavMenuMobileListCtn}}
        >
            <div 
                className="nav-menu-mobile-list-ctn-mini-ctn"
            >
                <div 
                    className="nav-menu-mobile-list-ctn-mini-ctn-nav-link"
                >
                    {NavHeaderDetails.map(NavHeaderDetail=>{
                        return(
                            <NavMenuMobileListCtnLink 
                                key={NavHeaderDetail.id}
                                name={NavHeaderDetail.name}
                                link={NavHeaderDetail.link}
                                color={navLinkColor}
                                fontSize={navLinkFontSize}
                            />
                        )
                    })}
                    <NavMenuMobileListCtnTryFreeBtn
                        tryFreeBtnBgColor={tryFreeBtnBgColor}
                        tryFreeBtnColor={tryFreeBtnColor}
                    />
                </div>
            </div>
        </div>
    )
};

export default NavHeader;