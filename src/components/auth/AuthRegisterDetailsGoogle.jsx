import {Link} from "react-router-dom";
import "./AuthRegisterDetailsGoogle.css";

const AuthRegisterDetailsGoogle=()=>{

    return(
        <div className="auth-register-details-google-main-ctn">
            <Link to="" className="link">
                <button className="auth-register-details-google-main-ctn-button">
                    <div className="auth-register-details-google-main-ctn-button-img-ctn">
                        <img src="src/assets/flat-color-icons_google.svg" alt=""/>
                    </div>
                    <p className="auth-register-details-google-main-ctn-button-name">
                        Sign up with Google
                    </p>
                </button>
            </Link>
        </div>
    )
};

export default AuthRegisterDetailsGoogle;