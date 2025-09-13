import { Link } from "react-router-dom";
import "./AuthLoginAndRegisterBookBtn.css";

const AuthLoginBookBtn=({email, setEmail, password, setPassword, setInputBoxBorder, btnDesc})=>{
    return(
        <Link to="" className="link">
            <div 
                className="auth-login-and-register-book-btn-main-ctn"
                onClick={()=>{
                    if (((email==="")&&(password==="")) || ((email==="")||(password===""))){
                        e.preventDefault();
                        setEmail();
                        setPassword();
                        setInputBoxBorder("0.02vh solid red")
                    }
                }}
            >
                <p className="auth-login-and-register-book-btn-main-ctn-name">
                    {btnDesc}
                </p>
            </div>
        </Link>
    )
};

export default AuthLoginBookBtn;