import './PricingPackageBox.css';
import PricingPackageBoxStatus from "./PricingPackageBoxStatus";
import PricingPackageBoxStatusDesc from "./PricingPackageBoxStatusDesc";
import PricingPackageBoxPrice from "./PricingPackageBoxPrice";
import PricingPackageBoxBuyBtn from "./PricingPackageBoxBuyBtn";
import PricingPackageBoxListMain from "./PricingPackageBoxListMain";

const PricingPackageBox=({name, price, plans})=>{
    return(
        <div 
            className="pricing-package-box-main-ctn"
        >
            <div 
                className="pricing-package-box-mini-ctn"
            >
                <PricingPackageBoxStatus
                    name={name}
                />
                <PricingPackageBoxStatusDesc/>
                <br/>
                <PricingPackageBoxPrice
                    price={price}
                />
                <br/>
                <PricingPackageBoxBuyBtn/>
                <PricingPackageBoxListMain
                    plans={plans}
                />
            </div>
        </div>
    );
};

export default PricingPackageBox;