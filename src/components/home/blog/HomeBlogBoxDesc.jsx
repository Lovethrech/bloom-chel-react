import "./HomeBlogBoxDesc.css";
const HomeBlogBoxDesc=({boxDesc})=>{
    return(
        <div className="home-blog-box-desc-main-ctn">
            <p className="home-blog-box-desc-main-ctn-name">
                {boxDesc}
            </p>
        </div>
    )
};

export default HomeBlogBoxDesc;