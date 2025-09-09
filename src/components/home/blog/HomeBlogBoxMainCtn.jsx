// import HomeBlogBoxOne from './HomeBlogBoxOne.jsx';
// import HomeBlogBoxTwo from './HomeBlogBoxTwo.jsx';
// import HomeBlogBoxThree from './HomeBlogBoxThree.jsx';
import "./HomeBlogBoxMainCtn.css";

const HomeBlogDetails=[
    {
        "id":"1",
        "bgImgSrc":"@/assets/home-blog-img-one.svg",
        "boxDesc":"Check out our latest news and articles about the use of technology in the medical field"
    },
    {
        "id":"2",
        "bgImgSrc":"@/assets/home-blog-img-two.svg",
        "boxDesc":"Check out our latest news and articles about the use of technology in the medical field"
    },
    {
        "id":"3",
        "bgImgSrc":"@/assets/home-blog-img-three.svg",
        "boxDesc":"Check out our latest news and articles about the use of technology in the medical field"
    }
]
// <HomeBlogBoxOne/>
//                 <HomeBlogBoxTwo/>
//                 <HomeBlogBoxThree/>
const HomeBlogBoxMainCtn=()=>{
    return(
        <div className="home-bog-box-main-ctn-main-ctn">
            <div className="home-bog-box-main-ctn-mini-ctn">
                {HomeBlogDetails.map(HomeBlogDetail=>{
                    return(
                        <HomeBlogDetail
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