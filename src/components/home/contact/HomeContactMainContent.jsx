import HomeContactImg from "./HomeContactImg";
import "./HomeContactMainContent.css";
import HomeContactMainContentDesc from "./HomeContactMainContentDesc";
import HomeContactMainContentLink from "./HomeContactMainContentLink";
const HomeContactMainContent=()=>{
    return(
        <div className="home-contact-main-content-main-ctn">
            <div className="home-contact-main-content-main-ctn-main">
                <HomeContactImg/>
                <div className="home-contact-main-content-mini-ctn">
                    <HomeContactMainContentDesc/>
                    <br/>
                    <HomeContactMainContentLink/>
                </div>
            </div>
        </div>
    )
};

export default HomeContactMainContent;