import Header from '@/components/Header'
import Navbar from '@/components/Navbar'
import Recipes from '@/components/Recipes'
import React from 'react'

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header title="Recipe Dashboard" type='Home'/>
      <section className='md:max-w-[1440px] mx-auto px-4 bg-black'>
        <Recipes />
      </section>
    </div>
  )
}

export default Home