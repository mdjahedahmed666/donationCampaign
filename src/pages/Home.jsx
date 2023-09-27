import React, { useState } from 'react'
import Banner from '../components/Banner/Banner';
import AllCard from '../components/AllCard/AllCard';

const Home = () => {
  const [search, setSearch] = useState('');
  return (
    <div className='mb-10'>
    <Banner setSearch={setSearch} ></Banner>
    <AllCard search={search}></AllCard>

    </div>
  )
}

export default Home;