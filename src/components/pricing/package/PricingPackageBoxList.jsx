import './PricingPackageBoxList.css';

const PricingPackageBoxList=({mark, markName})=>{
    return(
        <div 
            className="pricing-package-box-list-main-ctn"
        >
            <div 
                className="pricing-package-box-list-mini-ctn"
            >
                <div 
                    className='pricing-package-box-list-mini-ctn-mark-ctn'
                >
                </div>
            </div>
        </div>
    );
};

export default PricingPackageBoxList;