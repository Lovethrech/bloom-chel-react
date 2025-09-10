import "./AuthRegisterDetailsFormInput.css";

const AuthRegisterDetailsFormInput=({name, placeholder, nameFor, nameType, inputBoxBorder, value})=>{
    return(
        <div className="auth-register-details-form-input-main-ctn">
            <div className="auth-register-details-form-input-mini-ctn">
                <label for={nameFor} className="auth-register-details-form-input-mini-ctn-label">
                    { name }
                </label>
                <input 
                    value={value}
                    id={nameFor }
                    type={nameType }
                    placeholder={placeholder} 
                    className="auth-register-details-form-input-mini-ctn-input"
                    style={{border:inputBoxBorder}}
                />
            </div>
        </div>
    )
};

export default AuthRegisterDetailsFormInput;