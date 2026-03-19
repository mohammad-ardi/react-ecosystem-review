import Feature from "./Feature";

const Price = ({SubPrice}) => {
    const {name, price, features, popular} = SubPrice;

    return ( 
        <div>
            <div className="">
                {/* card heading */}
                <div className="bg-amber-600 p-4 border">
                    <h2 className="text-3xl">{name}</h2>
                    <h2 className="text-xl">${price}</h2>
                </div>
                {/* card body */}
                <div className="p-4 bg-amber-400">
                    {
                        features.map((feature, i)=> <Feature
                        key={i}
                        feature={feature}
                        ></Feature>)
                    }
                </div>
            </div>
        </div>
     );
}
 
export default Price;