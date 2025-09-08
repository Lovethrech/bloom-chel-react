import { Link } from "react-router-dom";

const NavTryFreeBtn=({tryFreeBtnBgColor,tryFreeBtnColor})=>{
    return(
        <div 
            className="try-for-free-btn-main-ctn" 
            id="nav-try-for-free-btn-main-ctn"
        >
            <Link 
                to="/" 
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

export default NavTryFreeBtn;