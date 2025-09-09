import "./FooterLinkIconCtn.css";
import FooterLinkIcon from './FooterLinkIcon';
const FooterLinkIconDetails=[
    {
        "id":1,
        "name":"<i class='bx bxl-instagram'></i>"
    },
    {
        "id":2,
        "name":"<i class='bx bxl-twitter' ></i>"
    },
    {
        "id":3,
        "name":"<i class='bx bxl-linkedin-square'></i>"
    },
    {
        "id":4,
        "name":"<i class='bx bxl-whatsapp' ></i>"
    }
];

const FooterLinkIconCtn=()=>{
    return(
        <div className="footer-link-icon-ctn-main-ctn">
            <div className="footer-link-icon-ctn-mini-ctn">
                {FooterLinkIconDetails.map(FooterLinkIconDetail=>{
                    return(
                        <FooterLinkIcon
                            key={FooterLinkIconDetail.id}
                            name={FooterLinkIconDetail.name}
                        />
                    )
                })}
            </div>
        </div>
    )
};

export default FooterLinkIconCtn;