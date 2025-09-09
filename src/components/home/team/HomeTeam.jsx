import "./HomeTeam.css";
import HomeTeamBoxOne from "./HomeTeamBoxOne";
import HomeTeamBoxTwo from "./HomeTeamBoxTwo";
import HomeTeamDesc from "./HomeTeamDesc";
import HomeTeamTitle from "./HomeTeamTitle";
const HomeTeam=()=>{
    return(
        <section className="home-team-main-ctn">
            <div className="home-team-mini-ctn">
                <HomeTeamTitle/>
                <HomeTeamDesc/>
                <br/>
                <div className="home-team-box">
                    <HomeTeamBoxOne/>
                    <HomeTeamBoxTwo/>
                </div>
            </div>
        </section>
    )
};

export default HomeTeam;