import HomeAboutTitle from "./HomeAboutTitle";
import "./HomeAbout.css";
import HomeAboutDesc from "./HomeAboutDesc";
const HomeAbout=()=>{
    return(
        <section id="about" className="home-about-main-ctn">
            <div className="home-about-mini-ctn">
                <div className='home-about-mini-ctn-desktop-view'>
                    <HomeAboutTitle/>
                    <HomeAboutDesc/>
                </div>
            </div>
        </section>
    )
};

export default HomeAbout;