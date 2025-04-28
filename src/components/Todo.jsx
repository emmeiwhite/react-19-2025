const Todo = ({ task }) => {
  return (
    <div className="todo">
      <h2>{task}</h2>
      <button>Delete</button>
    </div>
  )
}
export default Todo
