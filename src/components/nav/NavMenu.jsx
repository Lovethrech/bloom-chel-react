const NavMenu=({navMenuActiveIcon})=>{
    return(
        <div className="nav-menu-img-ctn" dangerouslySetInnerHTML={{ __html: navMenuActiveIcon }}></div>
    )
};

export default NavMenu;