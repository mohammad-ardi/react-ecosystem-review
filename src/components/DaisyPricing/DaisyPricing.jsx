import Feature from "../Price/Feature";

const DaisyPricing = ({SubPrice}) => {
    const {name, price, features, popular} = SubPrice;

    return ( 
        <div className="card w-96 bg-base-100 shadow-sm">
            <div className="card-body">
                {popular && <span className="badge badge-xs badge-warning">Most Popular</span>}
                <div className="flex justify-between">
                    <h2 className="text-3xl font-bold">{name}</h2>
                    <span className="text-xl">${price}/mo</span>
                </div>
                    <ul className="mt-6 flex flex-col gap-2 text-xs">
                        {
                            features.map((feature, i)=> <Feature
                            key={i}
                            feature={feature}
                            ></Feature>)
                        }
                    </ul>
                <div className="mt-6">
                    <button className="btn btn-primary btn-block">Subscribe</button>
                </div>
            </div>
        </div>
     );
}
 
export default DaisyPricing;