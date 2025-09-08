import HomeAboutTitle from "./HomeAboutTitle";
import "./HomeAbout.css";
import HomeAboutDesc from "./HomeAboutDesc";
import HomeAboutImg from "./HomeAboutImg";
const HomeAbout=()=>{
    return(
        <section id="about" className="home-about-main-ctn">
            <div className="home-about-mini-ctn">
                <div className='home-about-mini-ctn-desktop-view'>
                    <HomeAboutTitle/>
                    <HomeAboutDesc/>
                    <br/>
                </div>
                <HomeAboutTitle/>
                <HomeAboutDesc/>
                <HomeAboutImg/>
            </div>
        </section>
    )
};

export default HomeAbout;