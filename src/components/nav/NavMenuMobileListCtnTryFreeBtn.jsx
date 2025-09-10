import { Link } from "react-router-dom";

const NavMenuMobileListCtnTryFreeBtn=({tryFreeBtnBgColor,tryFreeBtnColor})=>{
    return(
        <div 
            className="try-for-free-btn-main-ctn" 
            id="nav-menu-mobile-list-ctn-try-for-free-btn-main-ctn"
        >
            <Link 
                to="/auth" 
                className="link"
            >
                <button 
                    className="try-for-free-btn"
                    style={{background:tryFreeBtnBgColor, color:tryFreeBtnColor}}
                >
                    Try for free
                </button>
            </Link>
        </div>
    );
};

export default NavMenuMobileListCtnTryFreeBtn;