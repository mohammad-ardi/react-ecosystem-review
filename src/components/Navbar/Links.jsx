const Links = ({item}) => {
    return ( 
        <div>
            <li className="mr-10 hover:bg-amber-200 hover:text-black">
                <a href={item.path}>{item.label}</a>
            </li>
        </div>
     );
}
 
export default Links;