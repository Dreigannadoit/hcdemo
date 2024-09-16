import React from 'react'
import '../css/Services.css'
import { services } from '../constants'
import TitleHead from '../parts/TitleHead'

const Services = () => {
  return (
    <section className='padding_side services' id='services'>
      <TitleHead header="Services" subheader="CHOOSE YOUR Virtual Assistant’s"/>

      <div className="blocks poppins-regular">
        {services.map((service) => (
          <div className="block">
            <img src={service.icon} alt="" />
            <h1 className='poppins-bold'>{service.title}</h1>
            <p>{service.price_type}</p>
            <p><span>{service.price_initial}</span> <span>{service.price_max}</span> <span>{service.payment_intervals}</span></p>

            <br />
            <p>Includes: </p>

            <ul>
              {service.info.map((detail, index) => (
                <li key={index}>{detail}</li>
              ))}
            </ul>
          </div>
        ))}
        </div>
    </section>
  )
}

export default Services