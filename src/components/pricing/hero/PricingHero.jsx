import './PricingHero.css';
import NavHeader from 'src/components/nav/NavHeader.jsx';
import PricingHeroMainDesc from './PricingHeroMainDesc';

const PricingHero=()=>{
    return(
        <section 
            className="pricing-hero-main-ctn"
        >
            <div 
                className="pricing-hero-mini-ctn"
            >
                    <NavHeader/>
                    <PricingHeroMainDesc/>
            </div>
            
        </section>
    );
};

export default PricingHero;