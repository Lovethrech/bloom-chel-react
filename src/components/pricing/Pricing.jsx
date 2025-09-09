import "./Pricing.css";
import PricingHero from './hero/PricingHero';
import PricingPackage from './package/PricingPackage';
import Footer from "../footer/Footer";


const Pricing=()=>{
    return(
        <main>
            <PricingHero/>
            <PricingPackage/>
            <Footer/>
        </main>
    )
};

export default Pricing;