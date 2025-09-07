import '../Home.css';

import HomeHeroTryFreeBtn from './HomeHeroTryFreeBtn';
import HomeHeroMainDescParagraph from './HomeHeroMainDescParagraph.jsx';
import HomeHeroMainParagraphArrow from './HomeHeroMainParagraphArrow.jsx';

const HomeHeroMainDescParagraphMainCtn=()=>{
    return(
        <div className="home-hero-main-desc-paragraph-main-ctn-main-ctn">
            <HomeHeroMainDescParagraph/>
            <HomeHeroMainParagraphArrow
                className="home-hero-main-desc-paragraph-main-ctn-main-ctn-paragraph-arrow"
            />
            <HomeHeroTryFreeBtn
                className="home-hero-main-desc-paragraph-main-ctn-main-ctn-try-free"
            />
        </div>
    )
};

export default HomeHeroMainDescParagraphMainCtn;