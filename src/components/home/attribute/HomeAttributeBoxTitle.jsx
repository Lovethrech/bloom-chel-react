import "./HomeAttributeBoxTitle.css";
const HomeAttributeBoxTitle=({name})=>{
    return(
        <div 
            className="home-attribute-box-title-main-ctn"
        >
            <p 
                className="home-attribute-box-title-main-ctn-name"
            >
                {name}
            </p>
        </div>
    )
};

export default HomeAttributeBoxTitle;