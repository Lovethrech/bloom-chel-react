import './Nav.css';

const NavMenu=({navMenuActiveIcon, setNavMenuActiveIcon})=>{
    return(
        <div 
            id="nav-menu-img-ctn" 
            dangerouslySetInnerHTML={{ __html: navMenuActiveIcon }}
            onClick={()=>{
                if(navMenuActiveIcon.type==="<i class='ri-menu-4-line'></i>"){
                    setNavMenuActiveIcon("<i class='ri-close-large-line'></i>");
                }
            }}
        >
        </div>
    );
};

export default NavMenu;