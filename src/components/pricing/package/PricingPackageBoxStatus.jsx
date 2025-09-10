import './PricingPackageBoxStatus.css';

const PricingPackageBoxStatus=({name})=>{
    return(
        <div 
            className="pricing-package-box-status-main-ctn"
        >
            <p className="pricing-package-box-status-main-ctn-name">
                {name}
            </p>
        </div>
    );
};

export default PricingPackageBoxStatus;