import Button from "../button/Button"
import Text from "../Text/Text"
import { FaCaretDown } from "react-icons/fa";
import "./navbar.css"

const Navbar = () => {
  return (
    
        <nav className="navbar">
            <div className="container">
           <Text variant='h1' style={{color:'#1A2A37'}}>B Ldsafsaf</Text> 

                
                <div>
                 <ul>
                 <button className="white-button"> Home<span> </span><FaCaretDown /></button>
                   <button className="white-button"> Home<span> </span><FaCaretDown /></button>
                    <button className="white-button"> Home<span> </span><FaCaretDown /></button>
                </ul>

                </div>
                <div>
                  <span>icon</span>
                    <button> Home</button>
                </div>
            </div>
        </nav>


    
  )
}

export default Navbar