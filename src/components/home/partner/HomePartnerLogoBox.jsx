import "./HomePartnerLogoBox.css";
const HomePartnerLogoBox=({imgSrc, imgName})=>{
    return(
        <div className="home-partner-logo-box-main-ctn">
            <img src={imgSrc} alt={imgName}/>
        </div>
    )
};

export default HomePartnerLogoBox;