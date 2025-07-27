import Button from "../button/Button"
import Text from "../Text/Text"
import { FaCaretDown } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import "./navbar.css"

const Navbar = () => {
  return (
    
        <nav className="navbar">
            <div className="container">
           <Text variant='h1' style={{color:'#1A2A37'}}>B Ldsafsaf</Text> 

                
                <div>
                 <ul>
                   <button className="nav-button">maximus</button>
                 <button className="nav-button">maximus<span> </span><FaCaretDown /></button>
                   <button className="nav-button">Maecenas<span> </span><FaCaretDown /></button>
                    <button className="nav-button">placerat<span> </span><FaCaretDown /></button>
                </ul>

                </div>
                <div>
                  <span><CiSearch /></span>
                    <button>enim mauris</button>
                </div>
            </div>
        </nav>


    
  )
}

export default Navbar