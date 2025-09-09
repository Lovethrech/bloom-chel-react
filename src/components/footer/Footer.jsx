import "./Footer.css";

const NavHeader=()=>{

    return(
        <header className="nav-header-main-ctn">
            <NavLogo/>
            <div className="nav-header-main-ctn-nav">
                {NavHeaderDetails.map(NavHeaderDetail=>{
                    return(
                        <NavLink
                            key={NavHeaderDetail.id}
                            name={NavHeaderDetail.name}
                            link={NavHeaderDetail.link}
                            color={navLinkColor}
                            fontSize={navLinkFontSize}
                        />
                    )
                })}
                <NavTryFreeBtn
                    tryFreeBtnBgColor={tryFreeBtnBgColor}
                    tryFreeBtnColor={tryFreeBtnColor}
                />
                <NavMenu
                    navMenuActiveIcon={navMenuActiveIcon}
                    setNavMenuActiveIcon={setNavMenuActiveIcon}
                    setDisplayNavMenuMobileListCtn={setDisplayNavMenuMobileListCtn}
                />
                <NavMenuMobileListCtn
                    displayNavMenuMobileListCtn={displayNavMenuMobileListCtn}
                />
            </div>
        </header>
    )
};

export default NavHeader;