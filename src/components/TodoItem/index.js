// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoItemDetails, deleteItem} = props
  const {title, id} = todoItemDetails

  const OnDelete = () => {
    deleteItem(id)
  }

  return (
    <li className="TodoCard-Container">
      <p className="todo-heading">{title}</p>
      <div className="button-container">
        <button type="button" className="button" onClick={OnDelete}>
          Delete
        </button>
      </div>
    </li>
  )
}

export default TodoItem
