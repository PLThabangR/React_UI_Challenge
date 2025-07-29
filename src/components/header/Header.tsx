
import Text from '../Text/Text'
import './header.css'

const Header = () => {
  return (
    
    <section className="header">
      {/* Primary heading using text component and passing style */}
       <span className='primary-heading'> <Text  variant='p' style={{color:'white'}} >minim veniam, quis nostrud exercitation</Text></span>
       {/* Main heading using text component and passing style */}
        <span className='main-heading' >  <Text variant='h1'style={{color:'white',fontStyle:"italic"}}>Acs office dits book llove Is Lijch</Text></span>
        {/* Third heading using text component and passing style */}
         <span className='third-heading'><Text variant='p' style={{color:'white'}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</Text></span>
         {/* Button */}
        <button className='button-heading'>enim mauris</button>
    </section>
  )
}

export default Header