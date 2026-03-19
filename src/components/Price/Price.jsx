import Feature from "./Feature";

const Price = ({SubPrice}) => {
    const {name, price, features, popular} = SubPrice;

    return ( 
        <div>
            <div className="bg-amber-600 p-4 space-y-4">
                {/* card heading */}
                <div>
                    <h2 className="text-3xl">{name}</h2>
                    <h2 className="text-xl">${price}</h2>
                </div>
                {/* card body */}
                <div className="p-4 bg-amber-400">
                    {
                        popular && `<div className="badge badge-warning">Popular</div>`
                    }
                    {
                        features.map((feature, i)=> <Feature
                        key={i}
                        feature={feature}
                        ></Feature>)
                    }
                </div>
                <button className="btn w-full">Subscribe</button>
            </div>
        </div>
     );
}
 
export default Price;