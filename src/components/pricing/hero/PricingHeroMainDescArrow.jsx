import './PricingHeroMainDescArrow.css';
const navToAboutComponent=()=>{
    const target=document.getElementById('package');
    if (!target) return;
    target.scrollIntoView({ behavior: 'smooth' });
}

const PricingHeroMainDescArrow=()=>{
    return(
        <div 
            className="home-hero-main-desc-paragraph-arrow-main-ctn"
            onClick={navToAboutComponent}
        >
            <img src="/hero-arrow.svg" alt="Hero ArrowDown"/>
        </div>
    );
};

export default PricingHeroMainDescArrow;