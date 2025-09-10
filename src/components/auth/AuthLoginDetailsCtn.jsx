import "./AuthLoginDetailsCtn.css";
import AuthLoginAndRegisterHeader from "./AuthLoginAndRegisterHeader";
import AuthRegisterDetailsFormInput from "./AuthRegisterDetailsFormInput";

const AuthLoginDetailsCtn=()=>{
    return(
        <div className="auth-register-details-ctn-main-ctn">
            <div className="auth-register-details-ctn-mini-ctn">
                <AuthLoginAndRegisterHeader/>
                <form action="" className="auth-register-details-ctn-mini-ctn-form">

                </form>
            </div>
        </div>
    )
};

export default AuthLoginDetailsCtn;