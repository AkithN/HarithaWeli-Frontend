import React from 'react'
import Navbar from '../Components/Navbar'
import Header from '../Components/Header'
import AboutUs from '../Containers/AboutUs'
import FBPosts from '../Containers/FBPosts'
import CounterSection from '../Containers/Counter'
import Footer from '../Components/Footer'
import TopProducts from '../Containers/TopProducts'
import Product from '../Containers/Products'
import UserReviews from '../Containers/UserReviews'
import Location from '../Containers/Location'

const Home = () => {
  return (
    <div>
      < Navbar/> 
      < Header />    
      < FBPosts />
      < AboutUs />
      < CounterSection />
      < TopProducts />
      < Product />
      < Location />
      < UserReviews />
      < Footer />
    </div>
  )
}

export default Home