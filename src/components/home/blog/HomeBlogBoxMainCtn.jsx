import HomeBlogBox from './HomeBlogBox.jsx';
import HomeBlogDetails from  "/src/data/home-blog-details.json";
import "./HomeBlogBoxMainCtn.css";

const HomeBlogDetails=[
    {
        "id":"1",
        "bgImgSrc":"<img src='src/assets/home-blog-img-one.svg' alt='Blog Image'/>",
        "boxDesc":"Check out our latest news and articles about the use of technology in the medical field"
    },
    {
        "id":"2",
        "bgImgSrc":"<img src='src/assets/home-blog-img-two.svg' alt='Blog Image'/>",
        "boxDesc":"Check out our latest news and articles about the use of technology in the medical field"
    },
    {
        "id":"3",
        "bgImgSrc":"<img src='src/assets/home-blog-img-three.svg' alt='Blog Image'/>",
        "boxDesc":"Check out our latest news and articles about the use of technology in the medical field"
    }
]
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