import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from './page.module.css'
import Main from './Main'
import Error from 'next/error'

const inter = Inter({ subsets: ['latin'] })

export default async function Home() {
  const response = await fetch('http://localhost:3000/api/generate-answer',
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ prompt: 'Hello ChatGPT!' })
    })
  const data = await response

  console.log(data)

  return (
    <main className='bg-purple-400'>
      <Main />
    </main>
  )
}
