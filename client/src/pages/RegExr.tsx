import React, { useState } from 'react'
import { useHandleSubmit } from '../hooks'

const RegExr = () => {
  const [input, setInput] = useState('')
  const { aiResponses, handleSubmit, isLoading } = useHandleSubmit(input)

  return (
    <form>
      <label className='text-white'>
        RegExr Expression:
        <input
          type='text'
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
  )
}

export default RegExr
