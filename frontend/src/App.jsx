import React from 'react'
import About from './components/About'
import Home from './Homes/Home'
import Courses from './Courses/Courses'
import {Routes,Route, Navigate} from "react-router-dom"
import Signup from './components/Signup'
import { Toaster } from 'react-hot-toast'
import { useAuth } from './context/AuthProvider'
export default function App() {

   const [authUser,setAuthUser]=useAuth()
    console.log(authUser)

  return (
    <>
    <div className='dark:bg-slate-900 dark:text-white'>
      {/* <Home></Home>
      <Course></Course> */}

      <Routes>
        
        <Route path="/" element={<Home></Home>}></Route>

        {/* <Route path="/course" element={<Courses></Courses>}></Route> */}


        <Route path="/course" element={authUser ? <Courses></Courses>:<Navigate to="/signup"></Navigate>}></Route>
        <Route path="/signup" element={<Signup></Signup>}></Route>
        <Route path="/About" element={<About></About>}></Route>
      </Routes>
      <Toaster></Toaster>
    </div>
    </>
      
    
  )
}













// import React from "react";
// import Home from "./Homes/Home";
// import { Navigate, Route, Routes } from "react-router-dom";
// import Courses from "./Courses/Courses";
// import Signup from "./components/Signup";
// import { Toaster } from "react-hot-toast";
// import { useAuth } from "./context/AuthProvider";

// function App() {
//   const [authUser, setAuthUser] = useAuth();
//   console.log(authUser);
//   return (
//     <>
//       <div className="dark:bg-slate-900 dark:text-white">
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route
//             path="/course"
//             element={authUser ? <Courses /> : <Navigate to="/signup" />}
//           />
//           <Route path="/signup" element={<Signup />} />
//         </Routes>
//         <Toaster />
//       </div>
//     </>
//   );
// }

// export default App;