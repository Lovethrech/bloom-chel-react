import './Nav.css';

const NavMenu=({navMenuActiveIcon, setNavMenuActiveIcon})=>{
    return(
        <div 
            id="nav-menu-img-ctn" 
            dangerouslySetInnerHTML={{ __html: navMenuActiveIcon }}
            onClick={()=>{
                if(navMenuActiveIcon==="<i class='ri-menu-4-line'></i>"){
                    setNavMenuActiveIcon("<i class='ri-close-large-line'></i>");
                }
                else{
                    setNavMenuActiveIcon("<i class='ri-menu-4-line'></i>");
                }
            }}
        >
        </div>
    );
};

export default NavMenu;