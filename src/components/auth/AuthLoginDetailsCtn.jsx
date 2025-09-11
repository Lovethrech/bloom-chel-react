import {useState} from "react";
import AuthLoginDetails from "/src/data/auth-login-details.json";
import AuthBookAndSignDetails from "/src/data/auth-book-and-sign-details.json"; 
import "./AuthLoginDetailsCtn.css";
import AuthLoginAndRegisterHeader from "./AuthLoginAndRegisterHeader";
import AuthRegisterDetailsFormInput from "./AuthRegisterDetailsFormInput";
import AuthLoginAndRegisterBookBtn from "./AuthLoginAndRegisterBookBtn";

const AuthLoginDetailsCtn=({displayLoginBtnDetails})=>{
    const [inputBoxBorder, setInputBoxBorder]=useState("0");
    const [email, setEmail]=useState("");
    const [password, setPassword]=useState("");
    console.log(email);
    return(
        <div className="auth-register-details-ctn-main-ctn" style={{display: displayLoginBtnDetails}}>
            <div className="auth-register-details-ctn-mini-ctn">
                <AuthLoginAndRegisterHeader/>
                <form action="" className="auth-register-details-ctn-mini-ctn-form">
                    <AuthRegisterDetailsFormInput
                        inputBoxBorder={inputBoxBorder}
                        name={AuthLoginDetails[0].name}
                        placeholder={AuthLoginDetails[0].placeholder}
                        nameFor={AuthLoginDetails[0].nameFor}
                        nameType={AuthLoginDetails[0].nameType}
                        value={email}
                    />
                    <AuthRegisterDetailsFormInput
                        inputBoxBorder={inputBoxBorder}
                        name={AuthLoginDetails[1].name}
                        placeholder={AuthLoginDetails[1].placeholder}
                        nameFor={AuthLoginDetails[1].nameFor}
                        nameType={AuthLoginDetails[1].nameType}
                        value={password}
                    />
                    <div className="auth-register-details-ctn-mini-ctn-form-forget-password-ctn">
                        <p className="auth-register-details-ctn-mini-ctn-form-forget-password">
                            forget password?
                        </p>
                    </div>
                    <br/>
                    <AuthLoginAndRegisterBookBtn
                        btnDesc={AuthBookAndSignDetails[1].name}
                        email={email}
                        setEmail={setEmail}
                        password={password}
                        setPassword={setPassword}
                        setInputBoxBorder={setInputBoxBorder}
                    />
                </form>
            </div>
        </div>
    )
};

export default AuthLoginDetailsCtn;