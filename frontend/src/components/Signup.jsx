import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Login from './Login'
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';
import { useLocation } from 'react-router-dom';

export default function Signup() {
 const location=useLocation()
  const from=location.state ?.from ?.pathname ||"/"
  const navigate=useNavigate();
   // Initialize useForm
   const { register, handleSubmit, formState: { errors } } = useForm();

   // Define onSubmit
   const onSubmit = async (data) => {
    //  ISI INFORMATION OF STORE KRNA H
   const userInfo={
    fullname:data.fullname,
    email:data.email,
    password:data.password,
   };

   //API CALL KARENGE

await axios.post("http://localhost:4001/user/signup",userInfo)
.then((res)=>{
  console.log(res.data);
  if(res.data){
    // alert("signup successfully")
    toast.success("signup successfully");
    navigate(from,{replace:true});
  }
  localStorage.setItem("Users",JSON.stringify(res.data.user));
}).catch((err)=>{
  // console.log(err);
  // alert("Error:"+err)

  if(err.response){
    console.log(err);
    // alert("error"+err.response.data.message)
    toast.error("error"+err.response.data.message)
  }
})
  // console.log(data);

   } 
  return (
   <>
   <div className="flex h-screen items-center justify-center">
    
<div  className="flex h-screen items-center justify-center">
  <div className="w-[600px]">
    <form  onSubmit={handleSubmit(onSubmit)} method="dialog">
      {/* if there is a button in form, it will close the modal */}
      <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
    
    <h3 className="font-bold text-lg">Signup</h3>
   
     {/* Name */}
     <div className="mt-4 space-y-2">
              <span>Name</span>
              <br />
              <input
                type="text"
                placeholder="Enter your fullname"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("fullname", { required: true })}
              />
              <br/>
              {errors.fullname && <span className='text-sm text-red-500'>This field is required</span> } 
            </div>

{/* Email */}


            <div className="mt-4 space-y-2">
              <span>Email</span>
              <br />
              <input
                type="email"
                placeholder="Enter your fullname"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("email", { required: true })}
              />
              <br/>
              {errors.email && <span className='text-sm text-red-500'>This field is required</span> } 

            </div>

            {/* password */}
            <div className="mt-4 space-y-2">
              <span>Password</span>
              <br />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-80 px-3 py-1 border rounded-md outline-none"
                {...register("password", { required: true })}
              />
               <br/>
               {errors.password && <span className='text-sm text-red-500'>This field is required</span> } 
            </div>

 {/* Button */}
 <div className="flex justify-around mt-6">
              <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
           Signup
              </button>
              <div>
                Have account?{" "}
                             
                  <a className='underline text-blue-500 cursor-pointer' onClick={() => document.getElementById('my_modal_3').showModal()}>Login</a>
                {" "}
                <Login></Login>
              </div>
            </div>
         
            </form>
  </div>
</div>
   </div>
   </>
  )
}












// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';

// function Signup() {
//   const [formData, setFormData] = useState({ name: '', email: '', password: '' });

//   // Handle input changes
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormData({ ...formData, [name]: value });
//   };

//   // Handle form submission
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Form Data:', formData);
//     alert(`Name: ${formData.name}, Email: ${formData.email}, Password: ${formData.password}`);
//   };

//   return (
//     <div className="flex h-screen items-center justify-center">
//       <div>
//         <div>
//           <form onSubmit={handleSubmit}>
//             <Link to="/" className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</Link>
//             <h3 className="font-bold text-lg">Signup</h3>

//             {/* Name Field */}
//             <div className="mt-4 space-y-2">
//               <label>Name</label>
//               <br />
//               <input
//                 type="text"
//                 name="name"
//                 value={formData.name}
//                 onChange={handleChange}
//                 placeholder="Enter your fullname"
//                 className="w-80 px-3 py-1 border rounded-md outline-none"
//               />
//             </div>

//             {/* Email Field */}
//             <div className="mt-4 space-y-2">
//               <label>Email</label>
//               <br />
//               <input
//                 type="email"
//                 name="email"
//                 value={formData.email}
//                 onChange={handleChange}
//                 placeholder="Enter your email"
//                 className="w-80 px-3 py-1 border rounded-md outline-none"
//               />
//             </div>

//             {/* Password Field */}
//             <div className="mt-4 space-y-2">
//               <label>Password</label>
//               <br />
//               <input
//                 type="password"
//                 name="password"
//                 value={formData.password}
//                 onChange={handleChange}
//                 placeholder="Enter your password"
//                 className="w-80 px-3 py-1 border rounded-md outline-none"
//               />
//             </div>

//             {/* Buttons */}
//             <div className="flex justify-around mt-6">
//               <button className="bg-pink-500 text-white rounded-md px-3 py-1 hover:bg-pink-700 duration-200">
//                 Signup
//               </button>
//               <div>
//                 Have an account?{' '}
//                 <Link to="/login" className="underline text-blue-500 cursor-pointer">
//                   Login
//                 </Link>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Signup;













