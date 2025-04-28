const Todo = ({ task, description }) => {
  return (
    <div className="todo">
      <h2>{task}</h2>
      <p>{description}</p>
      <button>Delete</button>
    </div>
  )
}
export default Todo
