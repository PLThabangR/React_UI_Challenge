
import './topBar.css'
import Text from '../Text/Text'
import { CiSearch } from "react-icons/ci";
import { CiUser } from "react-icons/ci";
const TopBar = () => {
  return (
    <section>
    <div className='topBar-container'>
      <div className='topBar-content'>
               <Text variant='p' style={{color:'white',fontSize:"10px"}}>Lorem ipsum dolor</Text>
            <Text variant='p' style={{color:'white',fontSize:"10px"}}>rna turpis tempor</Text>
          <span className='topBar-icon'>  <Text variant='span' style={{color:'white'}}><CiSearch /></Text></span>
            <span className='topBar-icon'> <Text variant='span' style={{color:'white'}}><CiUser/></Text></span>
            
</div>


           

           
       
    </div>
    </section>
  )
}

export default TopBar