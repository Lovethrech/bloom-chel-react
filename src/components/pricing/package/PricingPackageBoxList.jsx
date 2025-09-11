import {useState} from "react";
import './PricingPackageBoxList.css';

const PricingPackageBoxList=({mark, markName, nameTextDecoration, listIconColor})=>{
    // const [nameTextDecoration, setNameTextDecoration]=useState("none");
    // const [listIconColor, setListIconColor]=useState("#614EDE");
    // console.log(mark);
    return(
        <div 
            className="pricing-package-box-list-main-ctn"
        >
            <div 
                className="pricing-package-box-list-mini-ctn"
            >
                <div 
                    className='pricing-package-box-list-mini-ctn-mark-ctn'
                    style={{color: listIconColor}}
                    dangerouslySetInnerHTML={{ __html: mark }}
                >
                </div>
                <div className='pricing-package-box-list-mini-ctn-mark-name-ctn'>
                    <p 
                        className="pricing-package-box-list-mini-ctn-mark-name" 
                        style={{textDecoration:nameTextDecoration}}
                    >
                        {markName}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PricingPackageBoxList;