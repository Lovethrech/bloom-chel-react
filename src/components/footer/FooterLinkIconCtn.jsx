import FooterLinkIcon from './FooterLinkIcon';
import "./FooterLinkIconCtn.css";
const FooterLinkIcons=[
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
                {FooterLinkIcons.map(FooterLinkIcon=>{
                    return(
                        <FooterLinkIcon
                            key={FooterLinkIcon.id}
                            name={FooterLinkIcon.name}
                        />
                    )
                })}
            </div>
        </div>
    )
};

export default FooterLinkIconCtn;