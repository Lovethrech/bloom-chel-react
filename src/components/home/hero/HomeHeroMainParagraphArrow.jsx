const navToAboutComponent=()=>{
    const target=document.getElementById('about');
    if (!target) return;
    target.scrollIntoView({ behavior: 'smooth' });
}

const HomeHeroMainParagraphArrow=()=>{
    return(
        <div 
            className="home-hero-main-desc-paragraph-arrow-main-ctn" 
            onClick={navToAboutComponent}
        >
            <img 
                src="src/assets/hero-arrow"
                alt="Hero ArrowDown"
            /> 
        </div>
    )
};

export default HomeHeroMainParagraphArrow;