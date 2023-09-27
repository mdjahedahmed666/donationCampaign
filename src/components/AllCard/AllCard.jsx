import React, { useEffect, useState } from 'react'
import Card from '../Card/Card';

const AllCard = ({search}) => {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        const fetchData = async()=>{
            const res = await fetch("/Fakedata.json");
            const data = await res.json();
            setCards(data);
        } 
        fetchData();
    },[]);
    const filter = cards.filter((card) => card.category.toLowerCase().includes(search.toLowerCase()));
  return (
    <div className='container mx-auto px-4 md:px-32 mt-16'>
    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2'>
        {filter.map((card, index)=>(
            <Card key={index} card={card}></Card>
        ))}
    </div>
    </div>
  )
}

export default AllCard;