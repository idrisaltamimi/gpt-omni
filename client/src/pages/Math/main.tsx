import React from 'react'
import { MathJaxContext, MathJax } from 'better-react-mathjax'

const Math = () => {
  return (
    <main className='text-white'>
      <h1>Math Equation:</h1>
      <MathJaxContext>
        <MathJax>{"\\(\\frac{10}{4x} \\approx 2^{12}\\)"}</MathJax>
      </MathJaxContext>
    </main>
  )
}

export default Math
