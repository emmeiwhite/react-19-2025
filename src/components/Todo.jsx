const Todo = ({ task, description, openPopup }) => {
  return (
    <div className="todo">
      <h2>{task}</h2>
      <p>{description}</p>
      <button onClick={() => openPopup()}>Delete</button>
    </div>
  )
}
export default Todo
