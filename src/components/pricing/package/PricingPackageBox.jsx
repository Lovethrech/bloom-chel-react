import './PricingPackageBox.css';
import PricingPackageBoxStatus from "./PricingPackageBoxStatus";
import PricingPackageBoxStatusDesc from "./PricingPackageBoxStatusDesc";
import PricingPackageBoxPrice from "./PricingPackageBoxPrice";
import PricingPackageBoxBuyBtn from "./PricingPackageBoxBuyBtn";

const PricingPackageBox=()=>{
    return(
        <div 
            className="pricing-package-box-main-ctn"
        >
            <div 
                className="pricing-package-box-mini-ctn"
            >
                <PricingPackageBoxStatus/>
                <PricingPackageBoxStatusDesc/>
                <br/>
                <PricingPackageBoxPrice/>
                <br/>
                <PricingPackageBoxBuyBtn/>
            </div>
        </div>
    );
};

export default PricingPackageBox;