import "./HomeContact.css";
import HomeContactMainContent from "./HomeContactMainContent";
import HomeContactTitle from "./HomeContactTitle";
const HomeContact=()=>{
    return(
        <section className="home-contact-main-ctn">
            <div className="home-contact-mini-ctn">
                <HomeContactTitle/>
                <br/>
                <HomeContactMainContent/>
            </div>
        </section>
    )
};

export default HomeContact;