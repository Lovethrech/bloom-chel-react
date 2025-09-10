import {useState} from "react";
import AuthRegisterDetails from "/src/data/auth-register-details.json";
import AuthBookAndSignDetails from "/src/data/auth-book-and-sign-details.json"; 
import "./AuthRegisterDetailsCtn.css";
import AuthLoginAndRegisterHeader from "./AuthLoginAndRegisterHeader";
import AuthRegisterDetailsFormInput from "./AuthRegisterDetailsFormInput";
import AuthLoginAndRegisterBookBtn  from "./AuthLoginAndRegisterBookBtn";

const AuthRegisterDetailsCtn=()=>{
    const [inputBoxBorder, setInputBoxBorder]=useState("0");
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
                        name={AuthRegisterDetails[1].name}
                        placeholder={AuthRegisterDetails[1].placeholder}
                        nameFor={AuthRegisterDetails[1].nameFor}
                        nameType={AuthRegisterDetails[1].nameType}
                    />
                    <AuthRegisterDetailsFormInput
                        name={AuthRegisterDetails[2].name}
                        placeholder={AuthRegisterDetails[2].placeholder}
                        nameFor={AuthRegisterDetails[2].nameFor}
                        nameType={AuthRegisterDetails[2].nameType}
                    />
                    <AuthRegisterDetailsFormInput
                        name={AuthRegisterDetails[3].name}
                        placeholder={AuthRegisterDetails[3].placeholder}
                        nameFor={AuthRegisterDetails[3].nameFor}
                        nameType={AuthRegisterDetails[3].nameType}
                    />
                    <br/>
                    <AuthLoginAndRegisterBookBtn
                        btnDesc={AuthBookAndSignDetails[].name}
                    />
                </form>
            </div>
        </div>
    )
};

export default AuthRegisterDetailsCtn;