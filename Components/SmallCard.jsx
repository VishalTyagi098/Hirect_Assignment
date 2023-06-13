import React from 'react'

const SmallCard = () => {
  return (
    <div className='shadow-[0_3px_10px_rgb(0,0,0,0.2)] w-[25%] rounded px-4 py-4 bg-white hover:bg-[#a258fe] group'>
      <div className="my-2 text-[#666767] group-hover:text-white">
        Female . NL
      </div>
      <div className="my-2 text-3xl font-bold group-hover:text-white">
        Ms. Teatske Nijenhuis
      </div>
      <div className="text-[#e16259] group-hover:text-white">
        gmail.com
      </div>
    </div>
  )
}

export default SmallCard