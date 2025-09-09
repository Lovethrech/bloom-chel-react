import { Link } from "react-router-dom";

const HomeAboutDesktopTryFreeBtn=({tryFreeBtnBgColor, tryFreeBtnColor})=>{
    return(
        <div id="desktop" className="try-for-free-btn-main-ctn">
            <Link to="/">
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

export default HomeAboutDesktopTryFreeBtn;