import HomeBlogBoxOneImg from './HomeBlogBoxOneImg.css';
import HomeBlogBoxDesc from './HomeBlogBoxDesc.jsx';
import "./HomeBlogBoxOne.css";
const HomeBlogBoxOne=()=>{
    return(
        <div className="home-blog-box-main-ctn">
            <div className="home-blog-box-mini-ctn">
                <HomeBlogBoxOneImg/>
                <HomeBlogBoxDesc/>
            </div>
        </div>
    )
};

export default HomeBlogBoxOne;