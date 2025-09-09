import HomeHero from "./hero/HomeHero";
import HomeAbout from "./about/HomeAbout";
import HomeContact from "./contact/HomeContact";
import "./Home.css";
const Home=()=>{
    return(
        <main>
            <HomeHero/>
            <HomeAbout/>
            <HomeContact/>
        </main>
    )
};

export default Home;