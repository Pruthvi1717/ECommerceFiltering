import { BsCart4 } from "react-icons/bs";

import Category from "./Category/Category";
import Pricenew from "./Price/Pricenew";
import "./Sidebar.css"
import Colors from "./Colors/Colors";

const Sidebar = ({handleChange}) => {
    
    return (
     <> 
      <section className="sidebar">
        <div className="logo-container">
            <h1><BsCart4/></h1>
        </div>
        <Category handleChange = {handleChange} />
        
        <Pricenew handleChange = {handleChange}/>
        <Colors handleChange = {handleChange}/> 





      </section>
     </>
    )
}

export default Sidebar;