import './PricingHeroMainDesc.css';
import PricingHeroMainDescTitleText from "./PricingHeroMainDescTitleText";
import PricingHeroMainDescArrow from "./PricingHeroMainDescArrow";

const PricingHeroMainDesc=()=>{
    return(
        <div 
            className="pricing-hero-main-desc-main-ctn"
        >
            <div 
                className="pricing-hero-main-desc-mini-ctn"
            >
                <PricingHeroMainDescTitleText/>
                <PricingHeroMainDescArrow/>
            </div>
            
        </div>
    );
};

export default PricingHeroMainDesc;