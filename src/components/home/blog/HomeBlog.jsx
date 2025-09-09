import "./HomeBlog.css";
import HomeBlogBoxMainCtn from "./HomeBlogBoxMainCtn";
import HomeBlogDesc from "./HomeBlogDesc";
import HomeBlogTitle from "./HomeBlogTitle";
import HomeBlogVisitBtn from "./HomeBlogVisitBtn";
const HomeBlog=()=>{
    return(
        <section className="home-blog-main-ctn">
            <div className="home-blog-mini-ctn">
                <HomeBlogTitle/>
                <HomeBlogDesc/>
                <br/>
                <HomeBlogBoxMainCtn/>
                <br/>
                <HomeBlogVisitBtn/>
            </div>
        </section>
    )
};

export default HomeBlog;