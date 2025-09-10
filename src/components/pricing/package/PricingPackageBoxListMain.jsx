import './PricingPackageBoxListMain.css';
import PricingPackageBoxList from "./PricingPackageBoxList";

// <div className='pricing-package-box-list-main-mini-ctn-list-content'>
//                     <div className='pricing-package-box-list-main-mini-ctn-list-content-mini-ctn'>
//                         {plans.map(plan=>{
//                         return(
//                             <PricingPackageBoxList
//                                 key={plan.id}
//                                 mark={plan.mark}
//                                 markName={plan.markName}
//                             />
//                         )
//                     })}
//                     </div>
//                 </div>
// {plans}
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
                
                
            </div>
        </div>
    );
};

export default PricingPackageBoxListMain;