import React, { useEffect, useState } from 'react'
import Card from '../Card/Card';

const AllCard = () => {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        const fetchData = async()=>{
            const res = await fetch("/Fakedata.json");
            const data = await res.json();
            setCards(data);
        } 
        fetchData();
    },[]);
  return (
    <div className='container mx-auto sm:px-10 md:px-32 mt-16'>
    <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-2'>
        {cards.map((card, index)=>(
            <Card key={index} card={card}></Card>
        ))}
    </div>
    </div>
  )
}

export default AllCard;