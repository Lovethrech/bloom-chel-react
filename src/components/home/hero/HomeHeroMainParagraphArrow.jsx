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
                src="https://github.com/Lovethrech/bloom-chel-react/blob/main/src/assets/hero-arrow.svg"
                alt="Hero ArrowDown"
            /> 
        </div>
    )
};

export default HomeHeroMainParagraphArrow;