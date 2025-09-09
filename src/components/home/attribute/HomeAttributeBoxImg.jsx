import "./HomeAttributeBoxImg.css";
const HomeAttributeBoxImg=({imgSrc})=>{
    return(
        <div 
            className="home-attribute-box-img-main-ctn" 
            dangerouslySetInnerHTML={{ __html: imgSrc }}
        >
        </div>
    )
};

export default HomeAttributeBoxImg;