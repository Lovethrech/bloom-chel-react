import './Nav.css';

const NavMenu=({navMenuActiveIcon, setNavMenuActiveIcon})=>{
    return(
        <div 
            id="nav-menu-img-ctn" 
            dangerouslySetInnerHTML={{ __html: navMenuActiveIcon }}
            onClick={()=>setNavMenuActiveIcon("<i class='ri-close-large-line'></i>")}
        >
        </div>
    );
};

export default NavMenu;