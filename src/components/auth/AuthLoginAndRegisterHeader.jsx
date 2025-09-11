import "./AuthLoginAndRegisterHeader.css";
import AuthLoginAndRegisterHeaderTitle from "./AuthLoginAndRegisterHeaderTitle";
import AuthLoginAndRegisterHeaderDesc from "./AuthLoginAndRegisterHeaderDesc";
import AuthRegisterDetailsGoogle from "./AuthRegisterDetailsGoogle";
const AuthLoginAndRegisterHeader=()=>{

    return(
        <div className="auth-login-and-register-header-main-ctn">
            <div className="auth-login-and-register-header-mini-ctn">
                <AuthLoginAndRegisterHeaderTitle/>
                <AuthLoginAndRegisterHeaderDesc/>
                <AuthRegisterDetailsGoogle/>
            </div>
        </div>
    )
};

export default AuthLoginAndRegisterHeader;