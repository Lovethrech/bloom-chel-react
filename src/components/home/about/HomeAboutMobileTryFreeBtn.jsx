import { Link } from "react-router-dom";
import "./HomeAboutMobileTryFreeBtn.css";

const HomeAboutMobileTryFreeBtn=({tryFreeBtnBgColor, tryFreeBtnColor})=>{
    return(
        <div 
            id="mobile" 
            className="try-for-free-btn-main-ctn"
        >
            <Link 
                to="/auth"
            >
                <button 
                    className="try-for-free-btn"
                    style={
                        {
                            background:tryFreeBtnBgColor, 
                            color:tryFreeBtnColor
                        }
                    }
                >
                    Try for free
                </button>
            </Link>
        </div>
    )
};

export default HomeAboutMobileTryFreeBtn;