import "./HomeCustomerReviewTextCtnDetails.css";
import HomeCustomerReviewTextCtnDetailsName from "./HomeCustomerReviewTextCtnDetailsName";
import HomeCustomerReviewTextCtnDetailsTitle from "./HomeCustomerReviewTextCtnDetailsTitle";
import HomeCustomerReviewTextCtnDetailsYear from "./HomeCustomerReviewTextCtnDetailsYear";
import HomeCustomerReviewTextCtnSpeech from "./HomeCustomerReviewTextCtnSpeech";
const HomeCustomerReviewTextCtnDetails=()=>{
    return(
        <div className="home-customer-review-text-ctn-details-main-ctn">
            <div className="home-customer-review-text-ctn-details-mini-ctn">
                <HomeCustomerReviewTextCtnSpeech/>
                <div className="home-customer-review-personal-details">
                    <HomeCustomerReviewTextCtnDetailsTitle/>
                    <HomeCustomerReviewTextCtnDetailsName/>
                    <HomeCustomerReviewTextCtnDetailsYear/>
                </div>
            </div>
        </div>
    )
};

export default HomeCustomerReviewTextCtnDetails;