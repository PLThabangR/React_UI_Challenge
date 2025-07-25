
import './topBar.css'
import Text from '../Text/Text'
import { CiSearch } from "react-icons/ci";
const TopBar = () => {
  return (
    <section>
    <div className='topBar-container'>
      
            <Text variant='p' style={{color:'white'}}>Coffee shop</Text>
            <Text variant='p' style={{color:'white'}}>Coffee shop</Text>
            <Text variant='span' style={{color:'white'}}><CiSearch /></Text>
       
    </div>
    </section>
  )
}

export default TopBar