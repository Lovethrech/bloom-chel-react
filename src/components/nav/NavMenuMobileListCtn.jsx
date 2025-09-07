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

const NavHeader=()=>{
    return(
        <div className="nav-menu-mobile-list-ctn-main-ctn">
            <div className="nav-menu-mobile-list-ctn-mini-ctn">
                <div className="nav-menu-mobile-list-ctn-mini-ctn-nav-link">
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
                </div>
            </div>
        </div>
    )
};

export default NavHeader;