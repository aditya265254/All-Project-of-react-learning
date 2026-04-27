import React from 'react'
import Nav from './Nav'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
      <div className='flex gap-3'>
        <Nav />

        <Link to="/Details" className="card p-5 border shadow rounded w-[18%] h-[30vh]">
          <div
            className="w-full h-[80%] bg-contain bg-no-repeat"
            style={{
              backgroundImage:
                "url(https://plus.unsplash.com/premium_photo-1686149811450-c55a5fa3851f?q=80&w=1171&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
            }}
          ></div>
          <h1>Lorem ipsum dolor sit amet..</h1>
        </Link>

      </div>
    </>
  )
}

export default Home