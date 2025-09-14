import "./HomeAttributeBoxDesc.css";
const HomeAttributeBoxDesc=({description})=>{
    return(
        <div 
            className="home-attribute-box-desc-main-ctn"
        >
            <p 
                className="home-attribute-box-desc-main-ctn-name"
            >
                {description}
            </p>
        </div>
    )
};

export default HomeAttributeBoxDesc;