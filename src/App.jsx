import { useEffect, useState } from 'react'
import './App.css'
import Popup from './components/Popup'
import Title from './components/Title'
import Todo from './components/Todo'
import Exercises from './components/Exercises'
import todoData from './todoData'

function App() {
  // Reactive variable declared with useState --- When a reactive variable is updated with reactive function --- the component re-renders
  const [isPopupOpen, setIsPopupOpen] = useState(false)
  const [loading, setLoading] = useState(false)
  const [todos, setTodos] = useState([])
  const [currentClickedId, setCurrentClickedId] = useState('')
  /* --
  // A normal variable
  let isPopupOpen = false

  // trying to handle popup without useState

  function togglePopup() {
    isPopupOpen = !isPopupOpen
    console.log(isPopupOpen)
  }
  -- */
  const handleChange = e => {
    console.log(e.target.value)
  }

  /** --- passing function as props | Remember more and think about ideas --- */
  function openPopup(id) {
    setCurrentClickedId(id) // This state we'll use when the user clicks on confirm delete button
    setIsPopupOpen(true)
  }

  // Now, handling closing of the pop-up
  function closePopup() {
    setIsPopupOpen(false)
  }

  // 3. delete the element on confirm button click of the model
  function deleteElement(id) {
    console.log(id)

    const filteredTodos = todos.filter(todo => {
      return todo.id !== id
    })

    setTodos(filteredTodos)
    setIsPopupOpen(false)
    // setTodos(todo => {
    //   return todo.item.id !== id
    // })
  }

  useEffect(() => {
    setLoading(true)
    // Simulating API call delay
    const timer = setTimeout(() => {
      setTodos(todoData)
      setLoading(false)
    }, 500) // fake delay

    return () => clearTimeout(timer) // cleanup
  }, [])

  return (
    <>
      <Title />

      <div>
        <input
          type="text"
          onChange={handleChange}
          style={{ padding: '0.25rem 1rem' }}
        />
        <button>add item</button>
      </div>

      {/* <Todo
        task="Master the game and fear will fade away"
        description="code every 3-4 hours"
        openPopup={openPopup}
      />
      <Todo
        task="Live and let live"
        description="set aside time for your well being"
        openPopup={openPopup}
      />
      <Todo
        task="life is a race"
        description="Do not forget to sleep on time"
        openPopup={openPopup}
      />
      <Todo
        task="never you quit!"
        description="life will throw challenges at you, but do not quit"
        openPopup={openPopup}
      /> */}

      {/* Dynamic and Reusable Todos ELements now */}
      {loading ? <p>LOADING ...</p> : ''}
      {todos &&
        todos.map(todo => (
          <Todo
            key={todo.id}
            {...todo}
            openPopup={openPopup}
          />
        ))}

      {isPopupOpen ? (
        <Popup
          title="Are your sure?"
          closePopup={closePopup}
          deleteElement={deleteElement}
          currentClickedId={currentClickedId}
        />
      ) : null}

      {/* Exercise Tasks for Practice */}

      <h2>Exercises: </h2>

      <Exercises />
    </>
  )
}

export default App
