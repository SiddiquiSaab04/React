import React, { useState } from 'react'

const Counter = () => {

  const [count, setCount] = useState(0);
  const incrementFn = () => {
    setCount(count+1)
  }
    const decrementFn = () => {
      if(count === 0) return
    setCount(count-1)
  }
  return (
    <>
      <div className='w-full flex flex-col justify-center items-center space-y-3 text-gray-600'>
        <span> Counter={count}</span>
        <div className="flex gap-x-3">
          <button
          className='bg-blue-300 w-fit px-3 py-1 rounded-md cursor-pointer'
          onClick={incrementFn}
        >
          increment
        </button>
        <button
          className='bg-green-300 w-fit px-3 py-1 rounded-md cursor-pointer'
          onClick={decrementFn}
          disabled={ count===0 }
        >
          decrement
        </button>
        </div>
      </div>
    </>
  )
}

export default Counter