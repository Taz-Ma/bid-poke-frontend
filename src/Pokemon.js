import React, { useState, useEffect } from 'react'
import Cards from './Cards';
import './App.css';


function Pokemon() {

  const [current_bids, setCurrentBids] =  useState([]);

  useEffect(()=>{
    fetch(`https://bid-pokemon-backend.onrender.com/items/current`)
        .then(res => res.json())
        .then(data => {
            
            const bidIds = data.map(bid => bid.bid_id);
            setCurrentBids(bidIds);

        })
        .catch(err => console.log(err))

   
  },[])

 


  return (
    <>
     
    
    <div className="container"> 
      
      {current_bids.map( bid_id =>
        <Cards 
          bid_id = {bid_id}  
        />
      )}
    </div>

    </>
  );
}

export default Pokemon;
