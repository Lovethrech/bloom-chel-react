import './PricingPackageBoxPrice.css';

const PricingPackageBoxPrice=({price})=>{
    return(
        <div 
            className="pricing-package-box-price-main-ctn"
        >
            <p className="pricing-package-box-price-main-ctn-name">
                <sup className="pricing-package-box-price-main-ctn-name-sup">
                    #
                </sup>
                { price }
                <sub className="pricing-package-box-price-main-ctn-name-sub">
                    /yr
                </sub>
            </p>
        </div>
    );
};

export default PricingPackageBoxPrice;