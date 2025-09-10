import PricingPackageBoxListDetails from "/src/data/pricing-package-box-list-details.json";
import PricingPackageBox from "./PricingPackageBox";
import './PricingPackageMainBoxCtn.css';

const PricingPackageMainBoxCtn=()=>{
    return(
        <div 
            className="pricing-package-main-box-ctn-main-ctn"
        >
            <div 
                className="pricing-package-main-box-ctn-mini-ctn"
            >
                {PricingPackageBoxListDetails.map(PricingPackageBoxListDetail=>{
                    return(
                        <PricingPackageBox
                            key={PricingPackageBoxListDetail.id}
                            name={PricingPackageBoxListDetail.name}
                            price={PricingPackageBoxListDetail.price}
                            plans={PricingPackageBoxListDetail.plans}
                        />
                    )
                })}
            </div>
        </div>
    );
};

export default PricingPackageMainBoxCtn;