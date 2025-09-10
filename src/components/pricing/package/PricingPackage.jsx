import './PricingPackage.css';
import PricingPackageTitle from "./PricingPackageTitle";
import PricingPackageDesc from "./PricingPackageDesc";
import PricingPackageMainBoxCtn from "./PricingPackageMainBoxCtn";

const PricingPackage=()=>{
    return(
        <section 
            id="package" 
            className="pricing-package-main-ctn"
        >
            <div 
                className="pricing-package-mini-ctn"
            >
                <PricingPackageTitle/>
                <PricingPackageDesc/>
                <PricingPackageMainBoxCtn/>
            </div>
        </section>
    );
};

export default PricingPackage;