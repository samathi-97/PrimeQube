
import React, { useState } from 'react';
import './navigation.css'
import {
    FaTh,
    FaBars,
    FaUserAlt,
    FaRegChartBar,
    FaCommentAlt,
    FaShoppingBag,
    FaThList
}from "react-icons/fa";
import { NavLink } from 'react-router-dom';

const Menubar = ({children}) => {
    const[isOpen ,setIsOpen] = useState(false);
    const toggle = () => setIsOpen (!isOpen);
    const menuItem=[
        {
            path:"/",
            name:"Dashboard",
            icon:<FaTh/>
        },
        {
            path:"/user",
            name:"User",
            icon:<FaUserAlt/>
        },
        {
            path:"/analytics",
            name:"Assessment",
            icon:<FaRegChartBar/>
        },
        {
            path:"/comment",
            name:"Contact us",
            icon:<FaCommentAlt/>
        },
    ]
    return (
        <div className="container">
           <div style={{width: isOpen ? "260px" : "50px"}} className="sidebar">
               <div className="top_section">
                   <h2 style={{display: isOpen ? "block" : "none"}} className="logo">PrimeQube</h2>
                   <div style={{marginLeft: isOpen ? "50px" : "0px"}} className="bars">
                       <FaBars onClick={toggle}/>
                   </div>
               </div>
               {
                   menuItem.map((item, index)=>(
                       <NavLink to={item.path} key={index} className="link" activeclassName="active">
                           <div className="icon">{item.icon}</div>
                           <div style={{display: isOpen ? "block" : "none"}} className="link_text">{item.name}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main>{children}</main>
        </div>
    );
};

export default Menubar;
