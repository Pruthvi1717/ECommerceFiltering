import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "../index.css"

import "./Nav.css"
import App from "../App";

const Nav = ({query, handleInputChange}) => {
    return (

        

        
        <nav>
        <div className="nav-container">
            <input type="text" placeholder="Enter your Search shoes" className = "search-input" value ={query} onChange ={handleInputChange} />
        </div>

        <div className="profile-container">
            <a href="#">
                <FiHeart className ="nav-icons"/>
            </a>
            <a href="#">
                <AiOutlineShoppingCart className ="nav-icons" />
            </a>
            <a href="#">
                <AiOutlineUserAdd className ="nav-icons" />
            </a>
        </div>
        </nav>
        
    )
}

export default Nav;