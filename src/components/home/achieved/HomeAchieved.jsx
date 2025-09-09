import "./HomeAchieved.css";
import HomeAchievedDescBottom from "./HomeAchievedDescBottom";
import HomeAchievedDescTop from "./HomeAchievedDescTop";
const HomeAchieved=()=>{
    return(
        <section className="home-achieved-main-ctn">
            <div className="home-achieved-mini-ctn">
                <HomeAchievedDescTop/>
                <HomeAchievedDescBottom/>
            </div>
        </section>
    )
};

export default HomeAchieved;