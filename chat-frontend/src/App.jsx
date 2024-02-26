import { useState } from 'react'
import ChatComponent from './ChatComponent'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <p>This is app</p>
      <ChatComponent/>
    </>
  )
}

export default App
