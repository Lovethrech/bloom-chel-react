import HomeAboutTitle from "./HomeAboutTitle";
import HomeAboutMobileTitle from "./HomeAboutMobileTitle";
import HomeAboutDesc from "./HomeAboutDesc";
import HomeAboutImg from "./HomeAboutImg";
import HomeAboutDesktopTryFreeBtn from "./HomeAboutDesktopTryFreeBtn";
// <HomeAboutTitle id="home-about-title"/>
//                 <HomeAboutDesc className="home-about-desc"/>
import "./HomeAbout.css";

const tryFreeBtnBgColor="linear-gradient(to bottom, #A54dea, #594edc)";
const tryFreeBtnColor="#ffffff";
const HomeAbout=()=>{
    return(
        <section id="about" className="home-about-main-ctn">
            <div className="home-about-mini-ctn">
                <HomeAboutMobileTitle/>
                <div className='home-about-mini-ctn-desktop-view'>
                    <HomeAboutTitle/>
                    <HomeAboutDesc/>
                    <HomeAboutDesktopTryFreeBtn
                        tryFreeBtnBgColor={tryFreeBtnBgColor}
                        tryFreeBtnColor={tryFreeBtnColor}
                    />
                    <br/>
                </div>
                
                <HomeAboutImg id="home-about-img"/>
            </div>
        </section>
    )
};

export default HomeAbout;