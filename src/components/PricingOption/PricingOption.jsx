import { use } from "react";
import Price from "../Price/Price";

const PricingOption = ({ pricingPromise }) => {
  const pricingData = use(pricingPromise);

  return (
    <div>
      <h1 className="text-5xl">Get Our Membership</h1>
        <div className="grid grid-cols-3">
            {
                pricingData.map(SubPrice=> <Price 
                key={SubPrice.id}
                SubPrice={SubPrice}
                ></Price>)
            }
        </div>
    </div>
  );
};

export default PricingOption;