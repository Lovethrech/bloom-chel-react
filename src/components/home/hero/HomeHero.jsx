import NavHeader from "../../nav/NavHeader";
import HomeHeroMainDesc from "./HomeHeroMainDesc";


const HomeHero=()=>{
    return(
        <div className="home-hero-main-ctn">
            <div className="home-hero-mini-ctn">
                <NavHeader/>
                <HomeHeroMainDesc/>
            </div>
        </div>
    )
};

export default HomeHero;