import { useState } from 'react'

function App() {
  const [color, setColor] = useState('')

  return (
    <>
      <h5 className="text-center text-3xl"> Background Color Changer</h5>

      <div className={`flex justify-start items-center p-12 bg-${color}`}>
        <div className="flex flex-col space-y-4">
          <button className="relative z-0 rounded bg-pink-500 px-10 py-3 transition-[all_0.3s_ease] after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-0 after:rounded after:bg-pink-700 after:transition-[all_0.3s_ease]  hover:after:w-full ml-4" onClick={() => setColor('pink-500')}>
            Pink
          </button>
          <button className="relative  z-0 rounded bg-blue-500 px-10 py-3 transition-[all_0.3s_ease] after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-0 after:rounded after:bg-blue-700 after:transition-[all_0.3s_ease]  hover:after:w-full ml-4" onClick={() => setColor('blue-500')}>
            Blue
          </button>
          <button className="relative z-0 rounded bg-green-500 px-10 py-3 transition-[all_0.3s_ease] after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-0 after:rounded after:bg-green-700 after:transition-[all_0.3s_ease]  hover:after:w-full ml-4" onClick={() => setColor('green-500')}>
            Green
          </button>
          <button className="relative z-0 rounded bg-yellow-500 px-10 py-3 transition-[all_0.3s_ease] after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-0 after:rounded after:bg-yellow-700 after:transition-[all_0.3s_ease]  hover:after:w-full ml-4" onClick={() => setColor('yellow-500')}>
            Yellow
          </button>
          <button className="relative z-0 rounded bg-purple-500 px-10 py-3 transition-[all_0.3s_ease] after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-0 after:rounded after:bg-purple-700 after:transition-[all_0.3s_ease]  hover:after:w-full ml-4" onClick={() => setColor('purple')}>
            Purple
          </button>
          <button className="relative z-0 rounded bg-gray-500 px-10 py-3 transition-[all_0.3s_ease] after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-0 after:rounded after:bg-gray-700 after:transition-[all_0.3s_ease]  hover:after:w-full ml-4" onClick={() => setColor('gray-500')}>
            Gray
          </button>
          <button className="relative z-0 rounded bg-black px-10 py-3 transition-[all_0.3s_ease] after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-0 after:rounded after:bg-black after:transition-[all_0.3s_ease]  hover:after:w-full ml-4 text-white" onClick={() => setColor('black')}>
            <b>Black</b>
          </button>
          <button className="relative z-0 rounded bg-orange-500 px-10 py-3 transition-[all_0.3s_ease] after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-0 after:rounded after:bg-orange-700 after:transition-[all_0.3s_ease]  hover:after:w-full ml-4" onClick={() => setColor('orange-500')}>
            <b>Orange</b>
          </button>
          <button className="relative z-0 border border-black-800  rounded bg-white-500   px-10 py-3 transition-[all_0.3s_ease] after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-0 after:rounded after:bg-white-700 after:transition-[all_0.3s_ease]  hover:after:w-full ml-4" onClick={() => setColor('white-500')}>
            <b>White</b>
          </button>
          <button className="relative z-0 rounded bg-indigo-500 px-10 py-3 transition-[all_0.3s_ease] after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-0 after:rounded after:bg-indigo-700 after:transition-[all_0.3s_ease]  hover:after:w-full ml-4" onClick={() => setColor('indigo-500')}>
            <b>Indigo</b>
          </button>
          <button className="relative z-0 rounded bg-teal-500 px-10 py-3 transition-[all_0.3s_ease] after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-0 after:rounded after:bg-teal-700 after:transition-[all_0.3s_ease]  hover:after:w-full ml-4" onClick={() => setColor('teal-500')}>
            <b>Teal</b>
          </button>

          <button className="relative z-0 rounded bg-lime-500 px-10 py-3 transition-[all_0.3s_ease] after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-0 after:rounded after:bg-lime-700 after:transition-[all_0.3s_ease]  hover:after:w-full ml-4" onClick={() => setColor('lime-500')}>
            <b>Lime</b>

          </button>
          <button className="relative z-0 rounded bg-fuchsia-500 px-10 py-3 transition-[all_0.3s_ease] after:absolute after:left-0 after:top-0 after:-z-10 after:h-full after:w-0 after:rounded after:bg-fuchsia-700 after:transition-[all_0.3s_ease]  hover:after:w-full ml-4" onClick={() => setColor('fuchsia-500')}>
            <b>Fuchsia</b>
          </button>
        </div>
      </div>
    </>
  )
}

export default App
