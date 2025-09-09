import HomeBlogBoxOne from './HomeBlogBoxOne.jsx';
import HomeBlogBoxTwo from './HomeBlogBoxTwo.jsx';
import HomeBlogBoxThree from './HomeBlogBoxThree.jsx';
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