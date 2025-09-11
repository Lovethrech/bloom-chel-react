import {useState} from "react";
import AuthRegisterDetails from "/src/data/auth-register-details.json";
import AuthBookAndSignDetails from "/src/data/auth-book-and-sign-details.json"; 
import "./AuthRegisterDetailsCtn.css";
import AuthLoginAndRegisterHeader from "./AuthLoginAndRegisterHeader";
import AuthRegisterDetailsFormInput from "./AuthRegisterDetailsFormInput";
import AuthRegisterBookBtn from "./AuthRegisterBookBtn";

const AuthRegisterDetailsCtn=({displayRegisterBtnDetails})=>{
    const [inputBoxBorder, setInputBoxBorder]=useState("0");
    const [name, setName]=useState("");
    const [clientName, setClientName]=useState("");
    const [email, setEmail]=useState("");
    const [phoneNumber, setPhoneNumber]=useState("");
    return(
        <div className="auth-register-details-ctn-main-ctn" style={{display:displayRegisterBtnDetails}}>
            <div className="auth-register-details-ctn-mini-ctn">
                <AuthLoginAndRegisterHeader/>
                <form action="" className="auth-register-details-ctn-mini-ctn-form">
                    <AuthRegisterDetailsFormInput
                        inputBoxBorder={inputBoxBorder}
                        name={AuthRegisterDetails[0].name}
                        placeholder={AuthRegisterDetails[0].placeholder}
                        nameFor={AuthRegisterDetails[0].nameFor}
                        nameType={AuthRegisterDetails[0].nameType}
                    />
                    <AuthRegisterDetailsFormInput
                        inputBoxBorder={inputBoxBorder}
                        name={AuthRegisterDetails[1].name}
                        placeholder={AuthRegisterDetails[1].placeholder}
                        nameFor={AuthRegisterDetails[1].nameFor}
                        nameType={AuthRegisterDetails[1].nameType}
                    />
                    <AuthRegisterDetailsFormInput
                        inputBoxBorder={inputBoxBorder}
                        name={AuthRegisterDetails[2].name}
                        placeholder={AuthRegisterDetails[2].placeholder}
                        nameFor={AuthRegisterDetails[2].nameFor}
                        nameType={AuthRegisterDetails[2].nameType}
                    />
                    <AuthRegisterDetailsFormInput
                        inputBoxBorder={inputBoxBorder}
                        name={AuthRegisterDetails[3].name}
                        placeholder={AuthRegisterDetails[3].placeholder}
                        nameFor={AuthRegisterDetails[3].nameFor}
                        nameType={AuthRegisterDetails[3].nameType}
                    />
                    <br/>
                    <AuthRegisterBookBtn
                        btnDesc={AuthBookAndSignDetails[0].name}
                    />
                </form>
            </div>
        </div>
    )
};

export default AuthRegisterDetailsCtn;