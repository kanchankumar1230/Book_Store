// import React from 'react'
// import Navbar from '../components/navbar';
// import Banner from '../components/Banner';
// import Footer from '../components/footer';
// import Freebook from '../components/freebook';
// import Cards from '../components/Cards';

// export default function Home() {
//   return (
//     <>
//     <div>
//     <Navbar ></Navbar>
//     <Banner></Banner>
//     <Footer></Footer>
    
    
//     <Freebook></Freebook>
//     <div className=' max-w-screen-xl  ml-28 space-x-8 flex flex-col md:flex-row '>
//       <Cards></Cards>
//       <Cards></Cards>
//       <Cards></Cards>

//       </div>
//     </div>
//     </>
//   )
// }












import React from 'react';
import Navbar from "../components/navbar";
import Banner from "../components/Banner";
import Freebook from "../components/Freebook";
import Footer from "../components/footer";

function Home() {
  return (
    <>
      <Navbar />
      <Banner />
      <Freebook />
      <Footer />
    </>
  );
}

export default Home;