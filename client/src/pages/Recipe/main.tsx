import React, { ChangeEvent, FormEvent, useState } from 'react'
import parse from 'html-react-parser'

import { fetchData, parseHtml } from '../../utils'

const Recipe = () => {
  const [input, setInput] = useState<string>('')

  const [response, setResponse] = useState<string>('')
  const [generatedImg, setGeneratedImg] = useState<any>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [isImgLoading, setIsImgLoading] = useState(false)

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    fetchData('POST', input, '/dalle')
      .then(res => res.json())
      .then(data => {
        setGeneratedImg(data.photo[0].url)
      })

    const response = await fetchData('POST', search(input), '/')
    const data = await response.json()

    setResponse(data.response)
    setIsLoading(false)
  }

  const handleChange = (e: ChangeEvent) => {
    const target = e.target as HTMLInputElement
    setInput(target.value)
  }

  const string = response.replace(/<\/h1>/, '</h1>\n' + `<img src='${generatedImg}' alt='${input}' />`)

  return (
    <main className='flex flex-col items-center w-full text-white section'>
      <form onSubmit={handleSubmit} className='max-w-[620px] w-full my-20'>
        <label
          htmlFor='name'
          className='text-lg font-extrabold text-lightGrey'
        >
          What do you want to cook:
          <input
            id='name'
            type='text'
            placeholder='ex. Classic Spaghetti Carbonara'
            value={input}
            onChange={handleChange}
            className='block w-full h-10 px-4 mt-2 font-medium rounded-md text-jet'
          />
        </label>
        <button
          className='w-full h-10 mt-4 font-bold transition-colors duration-200 ease-in rounded-md bg-jungle hover:bg-blue'
        >
          {isLoading ? 'Generating...' : 'Generate recipe'}
        </button>
      </form>

      <div className='w-full max-w-[700px] mb-10 bg-charcoal rounded-md p-10'>
        {/* {generatedImg && <img src={generatedImg} alt="" />} */}
        {/* {response !== '' && (parse(string))} */}
        <h1 className='text-4xl font-extrabold'>Homemade Beef Jerky</h1>
        <img src='https://oaidalleapiprodscus.blob.core.windows.net/private/org-KkzHWyo7XTTNaqigZMa6t7nV/user-XLDQnvtqdPLERvQ3nJpXLrqM/img-YQqVSiIxs8MUie7P5SL8akeD.png?st=2023-04-17T12%3A18%3A58Z&se=2023-04-17T14%3A18%3A58Z&sp=r&sv=2021-08-06&sr=b&rscd=inline&rsct=image/png&skoid=6aaadede-4fb3-4698-a8f6-684d7786b067&sktid=a48cca56-e6da-484e-a814-9c849652bcb3&skt=2023-04-17T10%3A59%3A39Z&ske=2023-04-18T10%3A59%3A39Z&sks=b&skv=2021-08-06&sig=qoukdEBMFzsVUdGzS9wOJwhyMMitoLh/6rOc5idGQAk%3D' alt='jerky' className='mt-4 rounded-md' />
        <h2 className='mt-10 text-2xl font-bold'>Ingredients:</h2>
        <ul className='pl-8 list-disc'>
          <li className='font-medium'>2 lbs. beef (flank steak, sirloin, or round steak)</li>
          <li className='font-medium'>1/2 cup soy sauce</li>
          <li className='font-medium'>1/4 cup Worcestershire sauce</li>
          <li className='font-medium'>2 tbsp. honey</li>
          <li className='font-medium'>1 tbsp. onion powder</li>
          <li className='font-medium'>1 tbsp. garlic powder</li>
          <li className='font-medium'>1 tsp. black pepper</li>
          <li className='font-medium'>1 tsp. red pepper flakes</li>
        </ul>
        <h2 className='mt-10 text-2xl font-bold'>Instructions:</h2>
        <ol className='pl-8 list-decimal'>
          <li className='font-medium'>Slice the beef into thin, even strips, about 1/4 inch thick.</li>
          <li className='font-medium'>In a mixing bowl, whisk together the soy sauce, Worcestershire sauce, honey, onion powder, garlic powder, black pepper, and red pepper flakes.</li>
          <li className='font-medium'>Add the beef strips to the marinade, making sure they are all coated evenly.</li>
          <li className='font-medium'>Cover the bowl with plastic wrap and refrigerate for at least 4 hours, or overnight for best results.</li>
          <li className='font-medium'>Preheat the oven to 170°F (or the lowest temperature setting available on your oven).</li>
          <li className='font-medium'>Remove the beef from the marinade and pat it dry with paper towels.</li>
          <li className='font-medium'>Place the strips of beef on a wire rack that is lined with foil or parchment paper, making sure there is space between each piece.</li>
          <li className='font-medium'>Bake the beef for 3-4 hours, until it is dry and chewy. Check it periodically and rotate the pan so that the beef cooks evenly.</li>
          <li className='font-medium'>Remove the beef from the oven and let it cool completely before storing in an airtight container, where it will keep for up to 2 weeks.</li>
        </ol>
      </div>
    </main>
  )
}

export default Recipe

const search = (input: string) => `
write me a recipe for ${input}. Use the following format:

  <h1 class='text-4xl font-extrabold'>title</h1>
  <h2 class='text-2xl font-bold'>Ingredients:</h2>
  <ul class='list-disc'>
    <li class='font-medium'></li>
  </ul>
  <h2 class='text-2xl font-bold'>Instructions:</h2>
  <ol class='list-decimal'>
    <li class='font-medium'></li>
  </ol>
`