import HomeBlogBoxOne from 'src/components/home/blog/HomeBlogBoxOne.css';
import HomeBlogBoxTwo from 'src/components/home/blog/HomeBlogBoxTwo.css';
import HomeBlogBoxThree from 'src/components/home/blog/HomeBlogBoxThree.css';
import "./HomeBlogBoxMainCtn.css";
const HomeBlogBoxMainCtn=()=>{
    return(
        <div className="home-bog-box-main-ctn-main-ctn">
            <div className="home-bog-box-main-ctn-mini-ctn">
                <HomeBlogBoxOne/>
            </div>
        </div>
    )
};

export default HomeBlogBoxMainCtn;