import "./HomeBlogBoxOneImg.css";
const HomeBlogBoxOneImg=({bgImgSrc})=>{
    return(
        <div 
            className="home-blog-box-img" 
            dangerouslySetInnerHTML={{ __html: bgImgSrc }}
        >
        </div>
    )
};

export default HomeBlogBoxOneImg;