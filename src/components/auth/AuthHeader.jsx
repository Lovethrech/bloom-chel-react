import "./AuthHeader.css";
import AuthLogo from "./AuthLogo";
import AuthLoginBtn from "./AuthLoginBtn";
import AuthRegisterBtn from "./AuthRegisterBtn";

const AuthHeader=()=>{

    return(
        <div className="auth-header-main-ctn">
            <div className="auth-header-mini-ctn">
                <header className="auth-header-mini-ctn-header">
                    <AuthLogo/>
                    <AuthLoginBtn/>
                    <AuthRegisterBtn/>
                </header>
                <div className="auth-header-mini-ctn-auth-content-ctn">
                
                </div>
            </div>
        </div>
    )
};

export default AuthHeader;