import React, { useState } from 'react'
import { useHandleSubmit } from '../hooks'

const RegExr = () => {
  const { aiResponse, handleSubmit, isLoading, input } = useHandleSubmit('text')

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <label className='text-white'>
          RegExr Expression:
          <input
            type='text'
            value={input}
            className='block w-full px-4 py-2 rounded-md'
          />
        </label>
        <button
          className='px-6 py-3 mt-4 text-white bg-blue-600 rounded-md'
          type='submit'
        >
          {isLoading ? 'Loading...' : 'Send Prompt'}
        </button>
      </form>
    </main>
  )
}

export default RegExr
