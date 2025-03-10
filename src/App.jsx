import { useState } from 'react'
import Navbar from './components/Navbar'


function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])

  const handleEdit = () => {

  }

  const handleDelete = () => {

  }

  const handleAdd = () => {
    setTodos([...todos, { todo, isCompleted: false }])
    setTodo("")
  }

  const handleChange = (e) => {
    setTodo(e.target.value)
  }




  return (
    <>
      <Navbar />
      <div className="container mx-auto rounded-xl my-5 bg-violet-300 p-5 min-h-[70vh]">
        <h1 className='text-lg font-bold flex justify-center '>iTask-During the daily routine</h1>
        <div className="card">
          <h2 className='text-lg font-bold'>Add todo</h2>
          <input onChange={handleChange} value={todo} type="text" className='w-1/2 rounded-full px-2' />
          <button onClick={handleAdd} className='text-white text-sm bg-blue-800 hover:bg-blue-900 mx-5 rounded-lg px-3 p-1'>Add</button>
        </div>
        <div className="Your-todo">
          <h2 className='text-xl font-bold
          '>Your todo</h2>

          {todos.map(item => {

            return <div className="todos flex justify-between w-1/2 my-3">

              <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>
              <div className="button flex gap-4">
                <button onclick={handleEdit} className='bg-blue-800 text-white text-sm hover:bg-blue-900 px-4 p-2 rounded-full'>Edit</button>
                <button onclick={handleDelete} className='text-white text-sm bg-blue-800 hover:bg-blue-900 rounded-full px-4 p-2'>Delete</button>
              </div>
            </div>
          })}

        </div>
      </div>
    </>
  )
}


export default App
