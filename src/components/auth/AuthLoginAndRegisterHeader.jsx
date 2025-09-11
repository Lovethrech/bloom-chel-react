import "./AuthLoginAndRegisterHeader.css";
import AuthLoginAndRegisterHeaderTitle from "./AuthLoginAndRegisterHeaderTitle";
const AuthLoginAndRegisterHeader=()=>{

    return(
        <div className="auth-login-and-register-header-main-ctn">
            <div className="auth-login-and-register-header-mini-ctn">
                <AuthLoginAndRegisterHeaderTitle/>
            </div>
        </div>
    )
};

export default AuthLoginAndRegisterHeader;