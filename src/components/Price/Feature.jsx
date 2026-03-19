import { CircleCheck } from "lucide-react";

const Feature = ({feature}) => {
    return ( 
        <div>
            <p className="flex gap-2 mt-4"><CircleCheck></CircleCheck> {feature}</p>
        </div>
     );
}
 
export default Feature;