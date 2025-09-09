import "./HomePartnerLogoDisplay.css";
const HomePartnerLogoDetails=[
    {
        "id":"1",
        "imgSrc":"/partner-img-one.svg",
        "imgName":"Partner Image One"
    },
    {
        "id":"2",
        "imgSrc":"/partner-img-two.svg",
        "imgName":"Partner Image Two"
    },
    {
        "id":"3",
        "imgSrc":"/partner-img-three.svg",
        "imgName":"Parter Image Three"
    },
    {
        "id":"4",
        "imgSrc":"/partner-img-four.svg",
        "imgName":"PartnerImageFour"
    }
];
const HomePartnerLogoDisplay=()=>{
    return(
        <div className="home-partner-logo-display-main-ctn">
            <div className="home-partner-logo-display-mini-ctn">
                {HomePartnerLogoDetails.map(HomePartnerLogoDetail=>{
                    return(
                        <NavLink
                            key={HomePartnerLogoDetail.id}
                            name={HomePartnerLogoDetail.name}
                            link={HomePartnerLogoDetail.link}
                            color={navLinkColor}
                            fontSize={navLinkFontSize}
                        />
                    )
                })}
            </div>
        </div>
    )
};

export default HomePartnerLogoDisplay;