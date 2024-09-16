import React from 'react'
import { cardDetails } from '../constants';
import '../css/Trusted.css'

const Trusted = () => {
  return (
    <section className="carousel_container">
      <h1 className='poppins-semibold'>
        Trusted by
      </h1>
      <div className="cards_con">
        <div className="c_1">
          {cardDetails.map((detail) => (
            <img src={detail.imgUrl} alt="" />
          ))}
          
          {cardDetails.map((detail) => (
            <img src={detail.imgUrl} alt="" />
          ))}
          
          {cardDetails.map((detail) => (
            <img src={detail.imgUrl} alt="" />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Trusted;
