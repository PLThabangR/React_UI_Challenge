import Text from "../Text/Text"
import "./navbar.css"

const Navbar = () => {
  return (
    
        <nav className="navbar">
            <div className="container">
            <Text variant='h1' style={{color:'red'}}>Coffee shop</Text>

                <ul>
                  <li >Home</li>
                  <li >About</li>
                  <li >Contact</li>
                </ul>
                <div className='user' >
                  <Text variant='span'style={{color:"black"}} >U</Text>

                </div>
            </div>
        </nav>


    
  )
}

export default Navbar