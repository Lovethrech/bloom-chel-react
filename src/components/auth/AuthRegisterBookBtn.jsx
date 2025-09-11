import { Link } from "react-router-dom";
import "./AuthLoginAndRegisterBookBtn.css";

const AuthLoginAndRegisterBookBtn=({name, setName, clientName, setClientName, email, setEmail, phoneNumber, setPhoneNumber, setInputBoxBorder, btnDesc})=>{
    return(
        <Link to="" className="link">
            <div 
                className="auth-login-and-register-book-btn-main-ctn"
                onClick={()=>{
                    if (((name==="")&&(clientName==="")&&(email==="")&&(phoneNumber==="")) || ((name==="")||(clientName==="")||(email==="")||(phoneNumber===""))){
                        setName();
                        setClientName();
                        setEmail();
                        setPhoneNumber();
                        setInputBoxBorder("0.02vh solid red")
                    }
                }}
            >
                <p class="auth-login-and-register-book-btn-main-ctn-name">
                    {btnDesc}
                </p>
            </div>
        </Link>
    )
};

export default AuthLoginAndRegisterBookBtn;