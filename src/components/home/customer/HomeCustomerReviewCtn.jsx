import "./HomeCustomerReviewCtn.css";
import HomeCustomerReviewImg from "./HomeCustomerReviewImg";
import HomeCustomerReviewTextCtnDetails from "./HomeCustomerReviewTextCtnDetails";
const HomeCustomerReviewCtn=()=>{
    return(
        <div className="home-customer-review-ctn-main-ctn">
            <div className="home-customer-review-ctn-mini-ctn">
                <HomeCustomerReviewImg/>
                <HomeCustomerReviewTextCtnDetails/>
            </div>
        </div>
    )
};

export default HomeCustomerReviewCtn;