const Links = ({item}) => {
    return ( 
        <div>
            <li className="mr-10">
                <a href={item.path}>{item.label}</a>
            </li>
        </div>
     );
}
 
export default Links;