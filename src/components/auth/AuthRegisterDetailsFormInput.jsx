import "./AuthRegisterDetailsFormInput.css";
// :v-model="vModel" :style="{border:inputBoxBorder}" 


const AuthRegisterDetailsFormInput=({name, placeholder, nameFor, nameType})=>{
    return(
        <div className="auth-register-details-form-input-main-ctn">
            <div className="auth-register-details-form-input-mini-ctn">
                <label for={nameFor} className="auth-register-details-form-input-mini-ctn-label">
                    { name }
                </label>
                <input 
                    id={nameFor }
                    type={nameType }
                    placeholder={placeholder} 
                    className="auth-register-details-form-input-mini-ctn-input"
                />
            </div>
        </div>
    )
};

export default AuthRegisterDetailsFormInput;