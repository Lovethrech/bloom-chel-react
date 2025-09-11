import { Link } from "react-router-dom";
import "./AuthLoginAndRegisterBookBtn.css";
// onClick={()=>{
//                     if (((email==="")&&(password==="")) || ((email==="")||(password===""))){
//                         setEmail();
//                         setPassword();
//                         setInputBoxBorder("0.02vh solid red")
//                     }
//                 }}
// email, setEmail, password, setPassword, setInputBoxBorder,

const AuthLoginAndRegisterBookBtn=({ btnDesc})=>{
    return(
        <Link to="" className="link">
            <div 
                className="auth-login-and-register-book-btn-main-ctn"
                
            >
                <p class="auth-login-and-register-book-btn-main-ctn-name">
                    {btnDesc}
                </p>
            </div>
        </Link>
    )
};

export default AuthLoginAndRegisterBookBtn;