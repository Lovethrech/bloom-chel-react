import HomeHero from "./hero/HomeHero";
import HomeAbout from "./about/HomeAbout";
import HomeContact from "./contact/HomeContact";
import "./Home.css";
import HomeAttribute from "./attribute/HomeAttribute";
import HomeAchieved from "./achieved/HomeAchieved";
const Home=()=>{
    return(
        <main>
            <HomeHero/>
            <HomeAbout/>
            <HomeContact/>
            <HomeAttribute/>
            <HomeAchieved/>
        </main>
    )
};

export default Home;