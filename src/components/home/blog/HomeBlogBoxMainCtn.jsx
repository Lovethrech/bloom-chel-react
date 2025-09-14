import HomeBlogBox from './HomeBlogBox.jsx';
import HomeBlogDetails from  "/src/data/home-blog-details.json";
import "./HomeBlogBoxMainCtn.css";

const HomeBlogBoxMainCtn=()=>{
    return(
        <div className="home-bog-box-main-ctn-main-ctn">
            <div className="home-bog-box-main-ctn-mini-ctn">
                {HomeBlogDetails.map(HomeBlogDetail=>{
                    return(
                        <HomeBlogBox
                            key={HomeBlogDetail.id}
                            bgImgSrc={HomeBlogDetail.bgImgSrc}
                            boxDesc={HomeBlogDetail.boxDesc}
                        />
                    )
                })}
                
            </div>
        </div>
    )
};

export default HomeBlogBoxMainCtn;