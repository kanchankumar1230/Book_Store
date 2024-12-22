import React from 'react'
import { Link } from 'react-router-dom'

export default function About() {
  return (
    <div className=" max-w-screen-2xl container mx-auto md:px-20 px-4">
        <div className="mt-28 items-center justify-center text-center">
    <p className="mt-12">
      Wide Range of Books: Access an extensive collection of books across genres like fiction,
       non-fiction, academic, and more.
User-Friendly Interface: Smooth navigation with categorized sections for
 effortless browsing.
Search and Filter: Quickly find books by title, author, genre, or
 price range.
Wishlist and Cart: Save books for later or add them directly to the cart for checkout.
Personalized Recommendations: Get suggestions based on your browsing and purchase history.
    </p>
     <Link to="/">
     <button className="mt-6 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
       Back
     </button>
   </Link>
   </div>
   </div>
  )
}
