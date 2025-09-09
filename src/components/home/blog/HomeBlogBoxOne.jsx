import HomeBlogBoxOneImg from './HomeBlogBoxOneImg.jsx';
import HomeBlogBoxDesc from './HomeBlogBoxDesc.jsx';
import "./HomeBlogBoxOne.css";
const HomeBlogBoxOne=()=>{
    return(
        <div className="home-blog-box-main-ctn">
            <div className="home-blog-box-mini-ctn">
                <HomeBlogBoxOneImg/>
                <HomeBlogBoxDesc
                    boxDesc={HomeBlogDetails[0].boxDesc}
                />
            </div>
        </div>
    )
};

export default HomeBlogBoxOne;