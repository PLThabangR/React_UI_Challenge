import Text from '../Text/Text'
import './header.css'

const Hfooter = () => {
  return (
    <section className="Hfooter">
      {/* Primary heading using text component and passing style */}
        <span className='fmain-heading'>  <Text variant='h1'style={{color:'white'}}>Nulla vel mi id neque malesuada pretium ut id magna. Fusce vitae feugiat nibh.</Text></span>
        {/* Button */}
        <button className='fbutton-heading'style={{color:'black',backgroundColor:'white'}}>enim mauris</button>
    </section>
  )
}

export default Hfooter