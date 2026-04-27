import React from 'react'

const Stripe = ({val}) => {
  return (
    <div className='w-[16.66%] px-4 py-5  border-t-[1.5px] border-b-[1.5px] border-r-[1.5px] border-zinc-700 flex justify-between items-center' >
      <img className='h-5 w-40' src={val.url} alt="" />
      <span>{val.number}</span>
    </div>
  )
}

export default Stripe