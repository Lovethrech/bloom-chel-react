import HomeBlogBoxOneImg from './HomeBlogBoxOneImg.jsx';
import HomeBlogBoxDesc from './HomeBlogBoxDesc.jsx';
import "./HomeBlogBoxOne.css";
const HomeBlogBoxOne=({bgImgSrc, boxDesc})=>{
    return(
        <div className="home-blog-box-main-ctn">
            <div className="home-blog-box-mini-ctn">
                <HomeBlogBoxOneImg
                    bgImgSrc={bgImgSrc}
                />
                <HomeBlogBoxDesc
                    boxDesc={boxDesc}
                />
            </div>
        </div>
    )
};

export default HomeBlogBoxOne;