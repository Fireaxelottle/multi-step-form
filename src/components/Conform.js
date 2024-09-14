import React from 'react'

const Conform = ({firstName, lastName, email , nextSTEP , prevSTEP}) => {
  return (
    <div>
      <div className='mt-10 flex flex-col justify-center items-center'>
        <p>{firstName}</p>
      </div>
      <div className='mt-10 flex flex-col justify-center items-center'>
        <p>{lastName}</p>
      </div>
      <div className='mt-10 flex flex-col justify-center items-center'>
        <p>{email}</p>
      </div>
      <button className='mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-1/12' onClick={nextSTEP}>Next</button>
     <button className='mx-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded w-1/12' onClick={prevSTEP}>Previous</button>
    </div>
  )
}

export default Conform;
