import "./HomeAbout.css";
import HomeAboutTitle from "./HomeAboutTitle";

const HomeAbout=()=>{
    return(
        <section id="about" className="home-about-main-ctn">
            <div className="home-about-mini-ctn">
                <div className='home-about-mini-ctn-desktop-view'>
                    <HomeAboutTitle/>
                </div>
            </div>
        </section>
    )
};

export default HomeAbout;