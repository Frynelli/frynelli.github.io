
import { NavLink } from "react-router-dom";



const SideBar =()=>{
    return <div className="nav-bar">
 <nav>
    <ul>
        <li>
           <NavLink exact="true" activeclassname="active" to="/about">
               <h2>about</h2>
           </NavLink>
        </li>
        <li>
            <NavLink exact="true" activeclassname="active" to="/projects">
               <h2>projects</h2>
            </NavLink>
        </li>
        <li>
           <NavLink exact="true" activeClassName="active" to="/contact">
               <h2>contact</h2>
          </NavLink>
        </li>
    </ul>
    
</nav>
    </div>
    
}
export default SideBar;