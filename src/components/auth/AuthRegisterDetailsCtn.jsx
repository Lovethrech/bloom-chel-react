import AuthRegisterDetails from "@/data/auth-register-details.json";
import AuthBookAndSignDetails from "@/data/auth-book-and-sign-details.json"; 
import "./AuthRegisterDetailsCtn.css";
import AuthLoginAndRegisterHeader from "./AuthLoginAndRegisterHeader";
import AuthRegisterDetailsFormInput from "./AuthRegisterDetailsFormInput";

const AuthRegisterDetailsCtn=()=>{

    return(
        <div className="auth-register-details-ctn-main-ctn">
            <div className="auth-register-details-ctn-mini-ctn">
                <AuthLoginAndRegisterHeader/>
                <form action="" className="auth-register-details-ctn-mini-ctn-form">
                    <AuthRegisterDetailsFormInput
                        name={AuthRegisterDetails[0].name}
                        placeholder={AuthRegisterDetails[0].placeholder}
                        nameFor={AuthRegisterDetails[0].nameFor}
                        nameType={AuthRegisterDetails[0].nameType}
                    />
                    <AuthRegisterDetailsFormInput
                        name={AuthRegisterDetails[0].name}
                        placeholder={AuthRegisterDetails[0].placeholder}
                        nameFor={AuthRegisterDetails[0].nameFor}
                        nameType={AuthRegisterDetails[0].nameType}
                    />
                    <AuthRegisterDetailsFormInput
                        name={AuthRegisterDetails[0].name}
                        placeholder={AuthRegisterDetails[0].placeholder}
                        nameFor={AuthRegisterDetails[0].nameFor}
                        nameType={AuthRegisterDetails[0].nameType}
                    />
                    <AuthRegisterDetailsFormInput
                        name={AuthRegisterDetails[0].name}
                        placeholder={AuthRegisterDetails[0].placeholder}
                        nameFor={AuthRegisterDetails[0].nameFor}
                        nameType={AuthRegisterDetails[0].nameType}
                    />
                </form>
            </div>
        </div>
    )
};

export default AuthRegisterDetailsCtn;