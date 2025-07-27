import Button from "../button/Button"
import Text from "../Text/Text"
import { FaCaretDown } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import "./navbar.css"

const Navbar = () => {
  return (
    
        <nav className="navbar">
            <div className="container">
           <Text variant='h1' style={{color:'#1A2A37',fontStyle:"italic"}}>B Ldsafsaf</Text> 
                <div>
                 <ul>
                   <button className="nav-button">maximus</button>
                 <button className="nav-button">maximus<span > <FaCaretDown /></span></button>
                   <button className="nav-button">Maecenas<span ><FaCaretDown /> </span></button>
                    <button className="nav-button">placerat<span><FaCaretDown /> </span></button>
                </ul>

                </div>
                <div style={{marginLeft :"20px"}}>
      
                <span className="nav-icons">   <Text variant='span' style={{padding:"4px"}}><CiSearch /></Text> </span>
                  <span className="nav-icons">   <Text variant='span' style={{padding:"4px"}}><CiSearch /></Text> </span>
                   
                    <button>enim mauris</button>
                </div>
            </div>
        </nav>


    
  )
}

export default Navbar