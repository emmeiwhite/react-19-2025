import './App.css'
import Popup from './components/Popup'
import Title from './components/Title'
import Todo from './components/Todo'

function App() {
  return (
    <>
      <Title />
      <Todo task="Master the game and fear will fade away" />
      <Todo task="Live and let live" />
      <Todo task="life is a race" />
      <Todo task="never you quit!" />

      {/* <Popup /> */}
    </>
  )
}

export default App
