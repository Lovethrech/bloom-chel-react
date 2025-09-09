import "./HomeCustomerReview.css";
import HomeCustomerReviewCtn from "./HomeCustomerReviewCtn";
const HomeCustomerReview=()=>{
    return(
        <section className="home-customer-review-main-ctn">
            <div className="home-customer-review-mini-ctn">
                <h4 className="home-customer-review-mini-ctn-name">
                    customer reviews
                </h4>
                <HomeCustomerReviewCtn/>
            </div>
        </section>
    )
};

export default HomeCustomerReview;