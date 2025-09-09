import HomeBlogBoxOneImg from './HomeBlogBoxOneImg.css';
import HomeBlogBoxDesc from './HomeBlogBoxDesc.jsx';
import "./HomeBlogBoxOne.css";

const HomeBlogDetails=[
    {
        "id":"1",
        "bgImgSrc":"@/assets/home-blog-img-one.svg",
        "boxDesc":"Check out our latest news and articles about the use of technology in the medical field"
    }
]
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