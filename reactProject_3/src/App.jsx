import { useState } from "react"


function App() {
  const [color , setColor] = useState("black")

  return (
    <div className="w-full h-screen duration-200 bg-blue-300" style={{backgroundColor: color}}
     >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-amber-100 px-3 py-2 rounded-3xl">
          <button onClick={() => setColor("red")} className="outline-none px-4 rounded-2xl"style={{backgroundColor: "red"}}>Red</button>
          <button onClick={() => setColor("green")} className="outline-none px-4 rounded-2xl" style={{backgroundColor:"green"}}>Green</button>
          <button onClick={() => setColor("yellow")}  className="outline-none px-4 rounded-2xl bg-yellow-400">Yellow</button>
          <button onClick={() => setColor("blue")}  className="outline-none px-4 rounded-2xl bg-blue-700">Blue</button>
          <button onClick={() => setColor("white")}  className="outline-none px-4 rounded-2xl bg-gray-200">White</button>
          <button onClick={() => setColor("purple")}  className="outline-none px-4 rounded-2xl bg-purple-400">Purple</button>
          <button onClick={() => setColor("pink ")}  className="outline-none px-4 rounded-2xl bg-pink-300">Pink</button>
        </div>
      </div>
     </div>
  )
}

export default App
