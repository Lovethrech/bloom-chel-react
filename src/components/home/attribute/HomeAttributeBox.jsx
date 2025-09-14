import "./HomeAttributeBox.css";
import HomeAttributeBoxDesc from "./HomeAttributeBoxDesc";
import HomeAttributeBoxImg from "./HomeAttributeBoxImg";
import HomeAttributeBoxTitle from "./HomeAttributeBoxTitle";
const HomeAttributeBox=({name, imgSrc, description})=>{
    return(
        <div 
            className="home-attribute-box-main-ctn"
        >
            <div 
                className="home-attribute-box-mini-ctn"
            >
                <HomeAttributeBoxImg
                    imgSrc={imgSrc}
                />
                <HomeAttributeBoxTitle
                    name={name}
                />
                <HomeAttributeBoxDesc
                    description={description}
                />
            </div>
        </div>
    )
};

export default HomeAttributeBox;