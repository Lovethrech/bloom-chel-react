import { Link } from "react-router-dom";

const HomeHeroTryFreeBtn=({tryFreeBtnBgColor,tryFreeBtnColor})=>{
    return(
        <div 
            className="try-for-free-btn-main-ctn" 
            id="home-hero-try-for-free-btn-main-ctn"
        >
            <Link 
                to="/"
            >
                <button 
                    className="try-for-free-btn"
                    style={{background:tryFreeBtnBgColor, color:tryFreeBtnColor}}
                >
                    Try for free
                </button>
            </Link>
        </div>
    )
};

export default HomeHeroTryFreeBtn;