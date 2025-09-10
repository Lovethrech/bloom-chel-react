import './PricingPackageBoxListMain.css';
import PricingPackageBoxList from "./PricingPackageBoxList";

const PricingPackageBoxListMain=()=>{
    return(
        <div 
            className="pricing-package-box-list-main-main-ctn"
        >
            <div 
                className="pricing-package-box-list-main-mini-ctn"
            >
                <p className="pricing-package-box-list-main-mini-ctn-title">
                    plan includes:
                </p>
                <br/>
                <div className='pricing-package-box-list-main-mini-ctn-list-content'>
                    <div className='pricing-package-box-list-main-mini-ctn-list-content-mini-ctn'>
                    
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingPackageBoxListMain;