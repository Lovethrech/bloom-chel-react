import AuthLoginDetails from "/src/data/auth-login-details.json";
import AuthBookAndSignDetails from "/src/data/auth-book-and-sign-details.json"; 
import "./AuthLoginDetailsCtn.css";
import AuthLoginAndRegisterHeader from "./AuthLoginAndRegisterHeader";
import AuthRegisterDetailsFormInput from "./AuthRegisterDetailsFormInput";

const AuthLoginDetailsCtn=()=>{
    return(
        <div className="auth-register-details-ctn-main-ctn">
            <div className="auth-register-details-ctn-mini-ctn">
                <AuthLoginAndRegisterHeader/>
                <form action="" className="auth-register-details-ctn-mini-ctn-form">
                    <AuthRegisterDetailsFormInput/>
                    <AuthRegisterDetailsFormInput/>
                    <div className="auth-register-details-ctn-mini-ctn-form-forget-password-ctn">
                        <p className="auth-register-details-ctn-mini-ctn-form-forget-password">
                            forget password?
                        </p>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default AuthLoginDetailsCtn;