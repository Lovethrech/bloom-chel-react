import "./AuthRegisterBtn.css";

const AuthRegisterBtn=({displayRegisterBtn, setDisplayLoginBtn, setDisplayLoginBtnDetails, setDisplayRegisterBtn, setDisplayRegisterBtnDetails})=>{
    return(
        <div 
            className="auth-login-ctn-main-ctn"
            onClick={()=>{
                if(displayRegisterBtn==="none"){
                    setDisplayLoginBtn("none");
                    setDisplayLoginBtnDetails("block");
                    setDisplayRegisterBtn("block");
                    setDisplayRegisterBtnDetails("none");
                }
                else{
                    setDisplayLoginBtn("block");
                    setDisplayLoginBtnDetails("none");
                    setDisplayRegisterBtn("none");
                    setDisplayRegisterBtnDetails("block");
                }
            }}
        >
            <p className="auth-login-ctn-main-ctn-name">
                Register
            </p>
        </div>
    )
};

export default AuthRegisterBtn;