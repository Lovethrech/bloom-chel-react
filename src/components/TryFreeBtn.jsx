import { Link } from "react-router-dom";

const TryFreeBtn=({tryFreeBtnBgColor, tryFreeBtnColor})=>{
    return(
        <div className="try-for-free-btn-main-ctn">
            <Link to="/auth">
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

export default TryFreeBtn;