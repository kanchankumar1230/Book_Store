import React, { useEffect } from 'react'
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useState } from 'react';

// import list from "../../public/list.json";
import Cards from "./Cards";

export default function Freebook() {
  const [Book,setBook]=useState([] )
  useEffect(() =>{
    const getBook=async()=>{
      try{
    const res= await axios.get("http://localhost:4001/book")
    // console.log(res.data);
     const data=(res.data.filter((data)=>data.category === "free"));
     console.log(data);
     setBook(data);
      }catch(error){
   console.log(error)
      }
    };
    getBook();
  },[])

  // const filterData= list.filter((data)=>data.category === "free");
 
  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };



  return (
   <>
   <div  className='max-w-screen-2xl container mx-auto md:px-28 px-4 '>
   
   <div>
    <h1 className='font-semibold text-xl pb-2'>free offer course</h1>
    <p>
    Physical bookstores can help you disconnect from technology and engage 
    with the world in a more tactile way. Reading physical books can also have health benefits, 
    such as reducing stress and improving brain function
    </p>
    </div>
   

   <div>


   <Slider {...settings}>
            {Book.map((item) => (
              <Cards item={item} key={item.id} />
            ))}
          </Slider>


   </div>
   </div>
   </>
  )
}

























