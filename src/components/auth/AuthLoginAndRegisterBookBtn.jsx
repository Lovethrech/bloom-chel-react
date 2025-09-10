import "./AuthLoginAndRegisterBookBtn.css";

const AuthLoginAndRegisterBookBtn=({email, setEmail, password, setPassword, setInputBoxBorder})=>{
    return(
        <div 
            className="footer-desc-main-ctn"
            onClick={()=>{
                if (((email==="")&&(password==="")) || ((email==="")||(password===""))){
                    setEmail();
                    setPassword();
                    setInputBoxBorder("0.02vh solid red")
                }
            }}
        >
        </div>
    )
};

export default AuthLoginAndRegisterBookBtn;