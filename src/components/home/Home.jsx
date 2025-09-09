import HomeHero from "./hero/HomeHero";
import HomeAbout from "./about/HomeAbout";
import "./Home.css";
const Home=()=>{
    return(
        <main>
            <HomeHero/>
            <HomeAbout/>
        </main>
    )
};

export default Home;