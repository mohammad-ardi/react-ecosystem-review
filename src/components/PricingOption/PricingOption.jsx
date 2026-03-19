import { use } from "react";
import Price from "../Price/Price";
import DaisyPricing from "../DaisyPricing/DaisyPricing";

const PricingOption = ({ pricingPromise }) => {
  const pricingData = use(pricingPromise);

  return (
    <div>
      <h1 className="text-5xl">Get Our Membership</h1>
        <div className="grid md:grid-cols-3 gap-8">
            {/* {
                pricingData.map(SubPrice=> <Price 
                key={SubPrice.id}
                SubPrice={SubPrice}
                ></Price>)
            } */}
            {
              pricingData.map(SubPrice => <DaisyPricing
              key={SubPrice.id}
              SubPrice={SubPrice}
              ></DaisyPricing>)
            }
        </div>
    </div>
  );
};

export default PricingOption;