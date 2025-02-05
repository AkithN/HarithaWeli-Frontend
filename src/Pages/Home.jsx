import React from 'react'
import Navbar from '../Components/Navbar'
import Header from '../Containers/Header'
import FBPosts from '../Containers/FBPosts'
import CounterSection from '../Containers/Counter'
import Footer from '../Components/Footer'

const Home = () => {
  return (
    <div>
      < Navbar/> 
      < Header />
      < FBPosts />
      < CounterSection />
      < Footer />
    </div>
  )
}

export default Home