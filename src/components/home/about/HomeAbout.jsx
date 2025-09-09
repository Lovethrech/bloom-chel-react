import HomeAboutTitle from "./HomeAboutTitle";
import HomeAboutMobileTitle from "./HomeAboutMobileTitle";
import HomeAboutDesc from "./HomeAboutDesc";
import HomeAboutMobileDesc from "./HomeAboutMobileDesc";
import HomeAboutImg from "./HomeAboutImg";
import HomeAboutDesktopTryFreeBtn from "./HomeAboutDesktopTryFreeBtn";
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
                <HomeAboutMobileDesc/>
            </div>
        </section>
    )
};

export default HomeAbout;