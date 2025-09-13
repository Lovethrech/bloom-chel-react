import "./HomeAttribute.css";
import HomeAttributeDetails from "/src/data/home-attribute-details.json";
import HomeAttributeBox from "./HomeAttributeBox";

const HomeAttribute=()=>{
    return(
        <section className="home-attribute-main-ctn">
            <div className="home-attribute-mini-ctn">
                {HomeAttributeDetails.map(HomeAttributeDetail=>{
                    return(
                        <HomeAttributeBox
                            key={HomeAttributeDetail.id}
                            name={HomeAttributeDetail.name}
                            imgSrc={HomeAttributeDetail.imgSrc}
                            description={HomeAttributeDetail.description}
                        />
                    )
                })}
            </div>
        </section>
    )
};

export default HomeAttribute;