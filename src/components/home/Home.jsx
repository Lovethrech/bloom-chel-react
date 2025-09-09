import HomeHero from "./hero/HomeHero";
import HomeAbout from "./about/HomeAbout";
import HomeContact from "./contact/HomeContact";
import "./Home.css";
import HomeAttribute from "./attribute/HomeAttribute";
import HomeAchieved from "./achieved/HomeAchieved";
import HomeCustomerReview from "./customer/HomeCustomerReview";
import HomeBlog from "./blog/HomeBlog";
import HomeTeam from "./team/HomeTeam";
import HomePartner from "./partner/HomePartner";
const Home=()=>{
    return(
        <main>
            <HomeHero/>
            <HomeAbout/>
            <HomeContact/>
            <HomeAttribute/>
            <HomeAchieved/>
            <HomeCustomerReview/>
            <HomeBlog/>
            <HomeTeam/>
            <HomePartner/>
        </main>
    )
};

export default Home;