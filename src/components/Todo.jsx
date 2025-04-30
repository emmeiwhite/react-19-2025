const Todo = ({ id, task, description, openPopup }) => {
  return (
    <div className="todo">
      <h2>{task}</h2>
      <p>{description}</p>
      <button onClick={() => openPopup(id)}>Delete</button>
    </div>
  )
}
export default Todo
