import { Menu, X } from "lucide-react";
import Links from "./Links";
import { useState } from "react";

const navItems = [
  {
    id: 1,
    label: "Home",
    path: "/",
    icon: "home",
  },
  {
    id: 2,
    label: "About",
    path: "/about",
    icon: "info",
  },
  {
    id: 3,
    label: "Services",
    path: "/services",
    icon: "briefcase",
  },
  {
    id: 4,
    label: "Blog",
    path: "/blog",
    icon: "article",
  },
  {
    id: 5,
    label: "Contact",
    path: "/contact",
    icon: "mail",
  }
];

const Navbar = () => {
    const [open, setOpen] = useState(false);

    return ( 
        <div className="flex justify-between mx-10">
            <span onClick={()=> {setOpen(!open)}}>
                {
                    open ? <X></X> : <Menu className="md:hidden"></Menu>
                }
                <h1>My Page</h1>
            </span>
            <ul className="md:flex hidden">
                {
                    navItems.map((item)=> <Links key={item.id} item={item}></Links>)
                }
            </ul>
            <button className="btn">Sign In</button>
        </div>

        // daisy khala version
        // <div className="navbar bg-base-100 shadow-sm">
        //     <div className="navbar-start">
        //         <div className="dropdown">
        //         <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        //             <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
        //         </div>
        //         <ul
        //             tabIndex="-1"
        //             className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        //             <li><a>Item 1</a></li>
        //             <li>
        //             <a>Parent</a>
        //             <ul className="p-2">
        //                 <li><a>Submenu 1</a></li>
        //                 <li><a>Submenu 2</a></li>
        //             </ul>
        //             </li>
        //             <li><a>Item 3</a></li>
        //         </ul>
        //         </div>
        //         <a className="btn btn-ghost text-xl">daisyUI</a>
        //     </div>
        //     <div className="navbar-center hidden lg:flex">
        //         <ul className="menu menu-horizontal px-1">
        //         <li><a>Item 1</a></li>
        //         <li>
        //             <details>
        //             <summary>Parent</summary>
        //             <ul className="p-2 bg-base-100 w-40 z-1">
        //                 <li><a>Submenu 1</a></li>
        //                 <li><a>Submenu 2</a></li>
        //             </ul>
        //             </details>
        //         </li>
        //         <li><a>Item 3</a></li>
        //         </ul>
        //     </div>
        //     <div className="navbar-end">
        //         <a className="btn">Button</a>
        //     </div>
        // </div>
     );
}
 
export default Navbar;