const Links = ({item}) => {
    return ( 
        <div>
            <li>
                <a href={item.path}>{item.label}</a>
            </li>
        </div>
     );
}
 
export default Links;