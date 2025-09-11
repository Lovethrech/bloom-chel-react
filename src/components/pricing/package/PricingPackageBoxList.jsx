import './PricingPackageBoxList.css';

const PricingPackageBoxList=({mark, markName, nameTextDecoration, listIconColor})=>{
    return(
        <div 
            className="pricing-package-box-list-main-ctn"
        >
            <div 
                className="pricing-package-box-list-mini-ctn"
            >
                <div 
                    className='pricing-package-box-list-mini-ctn-mark-ctn'
                    style={{color: listIconColor}}
                    dangerouslySetInnerHTML={{ __html: mark }}
                >
                </div>
                <div className='pricing-package-box-list-mini-ctn-mark-name-ctn'>
                    <p 
                        className="pricing-package-box-list-mini-ctn-mark-name" 
                        style={{textDecoration:nameTextDecoration}}
                    >
                        {markName}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PricingPackageBoxList;