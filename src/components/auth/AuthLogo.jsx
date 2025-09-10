import { Link } from "react-router-dom";
import "./AuthLogo.css";

const AuthLogo=()=>{

    return(
        <div className="nav-logo-img-ctn">
            <Link to="/" className="link">
                <img src="src/assets/bloom.svg" alt="Bloom Desktop Logo" className="nav-logo-desktop-logo"/>
                <img src="src/assets/auth-logo-mobile.svg" alt="Bloom Mobile Logo" className="nav-logo-mobile-logo"/>
            </Link>
        </div>
    )
};

export default AuthLogo;