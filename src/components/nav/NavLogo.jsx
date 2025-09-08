import { Link } from "react-router-dom";

const NavLogo=()=>{
    return(
        <div className="nav-logo-img-ctn">
            <Link to="/">
                <img src="/bloom.svg" alt="Bloom Desktop Logo" id="nav-logo-desktop-logo"/>
                <img src="src/assets/bloom-M-colored.svg" alt="Bloom Mobile Logo" id="nav-logo-mobile-logo"/>
            </Link>
        </div>
    );
};

export default NavLogo;