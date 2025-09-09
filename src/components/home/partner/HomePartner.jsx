import "./HomePartner.css";
import HomePartnerDesc from "./HomePartnerDesc";
import HomePartnerLogoDisplay from "./HomePartnerLogoDisplay";
import HomePartnerTitle from "./HomePartnerTitle";
const HomePartner=()=>{
    return(
        <section className="home-partner-main-ctn">
            <div className="home-partner-mini-ctn">
                <HomePartnerTitle/>
                <HomePartnerDesc/>
                <HomePartnerLogoDisplay/>
            </div>
        </section>
    )
};

export default HomePartner;