import React from 'react'
import './testimonials.css'

// import Swiper core and required modules
import {Pagination} from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


import avtr1 from '../../assets/avatar1.jpg'
import avtr2 from '../../assets/avatar2.jpg'
import avtr3 from '../../assets/avatar3.webp'
import avtr4 from '../../assets/avatar4.jpg'
import avtr5 from '../../assets/avatar5.jpg'
const Testimonials = () => {
  return (
    <section id='testimonials'>
      <h5>Review from clients</h5>
      <h2>Testimonials</h2>

      <Swiper className='container testimonials__container'
          // install Swiper modules
          modules={[Pagination]}
          spaceBetween={40}
          slidesPerView={1}
          pagination={{ clickable: true }}
      >
        <SwiperSlide className='testimonial'>
          <div className='client__avatar'>
            <img src={avtr1} alt='avatar one'></img>
          </div>
          <h5>Alex</h5>
            <small className='client__review'>
            You made it! You reached the end of the project 
            and are ready to deliver the final product.
            You work in color and text format fantastic.
            I really like my product that you design like my
            thought.I must work in future with you for my 
            different products.
            </small>
        </SwiperSlide>

        <SwiperSlide className='testimonial'>
          <div className='client__avatar'>
            <img src={avtr4} alt='avatar one'></img>
          </div>
          <h5>Sara</h5>
            <small className='client__review'>
            You made it! You reached the end of the project 
            and are ready to deliver the final product.
            You work in color and text format fantastic.
            I really like my product that you design like my
            thought.I must work in future with you for my 
            different products.
            </small>
        </SwiperSlide>

        <SwiperSlide className='testimonial'>
          <div className='client__avatar'>
            <img src={avtr2} alt='avatar one'></img>
          </div>
          <h5>Davin</h5>
            <small className='client__review'>
            You made it! You reached the end of the project 
            and are ready to deliver the final product.
            You work in color and text format fantastic.
            I really like my product that you design like my
            thought.I must work in future with you for my 
            different products.
            </small>
        </SwiperSlide>

        <SwiperSlide className='testimonial'>
          <div className='client__avatar'>
            <img src={avtr5} alt='avatar one'></img>
          </div>
          <h5>Kim</h5>
            <small className='client__review'>
            You made it! You reached the end of the project 
            and are ready to deliver the final product.
            You work in color and text format fantastic.
            I really like my product that you design like my
            thought.I must work in future with you for my 
            different products.
            </small>
        </SwiperSlide>

      </Swiper>
    </section>
  )
}

export default Testimonials
