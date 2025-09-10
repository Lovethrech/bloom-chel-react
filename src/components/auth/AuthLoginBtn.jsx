import "./AuthLoginBtn.css";

const AuthLoginBtn=({displayLoginBtn, setDisplayLoginBtn, setDisplayLoginBtnDetails, setDisplayRegisterBtn, setDisplayRegisterBtnDetails})=>{

    return(
        <div 
            className="auth-login-ctn-main-ctn"
            onClick={()=>{
                if(displayLoginBtn==="block"){
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
                login
            </p>
        </div>
    )
};

export default AuthLoginBtn;