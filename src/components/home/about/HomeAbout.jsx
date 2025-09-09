import HomeAboutTitle from "./HomeAboutTitle";
import HomeAboutDesc from "./HomeAboutDesc";
import HomeAboutImg from "./HomeAboutImg";
// <HomeAboutTitle id="home-about-title"/>
//                 <HomeAboutDesc className="home-about-desc"/>
import "./HomeAbout.css";
const HomeAbout=()=>{
    return(
        <section id="about" className="home-about-main-ctn">
            <div className="home-about-mini-ctn">
                <div className='home-about-mini-ctn-desktop-view'>
                    <HomeAboutTitle/>
                    <HomeAboutDesc/>
                    <br/>
                </div>
                
                <HomeAboutImg id="home-about-img"/>
            </div>
        </section>
    )
};

export default HomeAbout;