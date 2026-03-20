const CustomTooltip = ({active, payload, label}) => {
    if(active && payload.length && label){
    return ( 
        <div>
            <p><strong>{label}</strong></p>
            <p>Physics: {payload[0].value}</p>
            <p>Chemistry: {payload[1].value}</p>
            <p>Math: {payload[2].value}</p>
        </div>
     );
    }
}
const CustomTooltip2 = ({active, payload, label})=>{
    const isVisible = active && label && payload.length;
    return (
        <div style={{visibility: isVisible ? 'visible':'hidden'}}>
            {isVisible && (
                <>
                <p><strong>{label}</strong></p>
                <p>`${label} : ${payload[0].value}`</p>
                <p>`${label} : ${payload[1].value}`</p>
                <p>`${label} : ${payload[2].value}`</p>
                </>
            )}
        </div>
    )
}
 
export default CustomTooltip;