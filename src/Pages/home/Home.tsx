import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import './home.css'
import TopBar from '../../components/topBar/TopBar'
import Header from '../../components/header/Header'
import Card from '../../components/card/Card'
import Hfooter from '../../components/header/Hfooter'
import Footer from '../../components/footer/Footer'


const Home = () => {
  //Props to be passed to card component
  const title1="Gel out arows well shryler it place"
  const description1="Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae."
  const title2 = "Peluct oend now"
  const description2 = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae."
  const imageLight ="https://images.unsplash.com/photo-1526057565006-20beab8dd2ed?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBhc3RlbCUyMGJsdWUlMjBtaW5pbWFsaXN0JTIwaW50ZXJpb3J8ZW58MHx8MHx8fDA%3D";
  const imgaeChair = "https://plus.unsplash.com/premium_photo-1723874468810-3147a74bb3a7?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8cGFzdGVsJTIwYmx1ZSUyMG1pbmltYWxpc3QlMjBpbnRlcmlvciUyMGNoYWlyfGVufDB8fDB8fHww"

  //
  return (
    <section> 
    <div className='home-container'>
        {/* Components import  */}
       <TopBar/>
        <Navbar/>
        <Header />
        
        <Card title={title1} description={description1} image={imgaeChair}/>
         <Card title={title2} description={description2} image={imageLight} style={{flexDirection:"row-reverse"}}/>
        <Hfooter/>
        <Footer/>
      </div>
      

    </section>
  )
}

export default Home