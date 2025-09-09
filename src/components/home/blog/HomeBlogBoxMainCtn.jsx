import HomeBlogBoxOne from './HomeBlogBoxOne.css';
import HomeBlogBoxTwo from './HomeBlogBoxTwo.css';
import HomeBlogBoxThree from './HomeBlogBoxThree.css';
import "./HomeBlogBoxMainCtn.css";
const HomeBlogBoxMainCtn=()=>{
    return(
        <div className="home-bog-box-main-ctn-main-ctn">
            <div className="home-bog-box-main-ctn-mini-ctn">
                <HomeBlogBoxOne/>
                <HomeBlogBoxTwo/>
                <HomeBlogBoxThree/>
            </div>
        </div>
    )
};

export default HomeBlogBoxMainCtn;