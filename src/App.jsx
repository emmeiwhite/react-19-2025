import './App.css'
import Popup from './components/Popup'
import Title from './components/Title'
import Todo from './components/Todo'

function App() {
  const handleChange = e => {
    console.log(e.target.value)
  }
  return (
    <>
      <Title />
      <input
        type="text"
        onChange={handleChange}
      />
      <Todo
        task="Master the game and fear will fade away"
        description="code every 3-4 hours"
      />
      <Todo
        task="Live and let live"
        description="set aside time for your well being"
      />
      <Todo
        task="life is a race"
        description="Do not forget to sleep on time"
      />
      <Todo
        task="never you quit!"
        description="life will throw challenges at you, but do not quit"
      />

      {/* <Popup title="Are your sure?" /> */}
    </>
  )
}

export default App
