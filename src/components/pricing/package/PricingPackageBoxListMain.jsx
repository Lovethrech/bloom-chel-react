import './PricingPackageBoxListMain.css';
import PricingPackageBoxList from "./PricingPackageBoxList";
const PricingPackageBoxListMain=({plans})=>{
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
                        {plans.map(plan=>{
                        return(
                            <PricingPackageBoxList
                                key={plan.id}
                                mark={plan.mark}
                                markName={plan.markName}
                                nameTextDecoration={plan.nameTextDecoration}
                                listIconColor={plan.listIconColor}
                            />
                        )
                    })}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PricingPackageBoxListMain;