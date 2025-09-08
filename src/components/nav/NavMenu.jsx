import './Nav.css';

const NavMenu=({navMenuActiveIcon})=>{
    return(
        <div id="nav-menu-img-ctn" dangerouslySetInnerHTML={{ __html: navMenuActiveIcon }}></div>
    );
};

export default NavMenu;