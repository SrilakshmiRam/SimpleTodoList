import {Component} from 'react'
import TodoItem from '../TodoItem/index'
import './index.css'

const initialTodosList = [
  {
    id: 1,
    title: 'Book the ticket for today evening',
  },
  {
    id: 2,
    title: 'Rent the movie for tomorrow movie night',
  },
  {
    id: 3,
    title: 'Confirm the slot for the yoga session tomorrow morning',
  },
  {
    id: 4,
    title: 'Drop the parcel at Bloomingdale',
  },
  {
    id: 5,
    title: 'Order fruits on Big Basket',
  },
  {
    id: 6,
    title: 'Fix the production issue',
  },
  {
    id: 7,
    title: 'Confirm my slot for Saturday Night',
  },
  {
    id: 8,
    title: 'Get essentials for Sunday car wash',
  },
]

// Write your code here

class SimpleTodos extends Component {
  state = {todosCardList: initialTodosList}

  deleteItem = id => {
    const {todosCardList} = this.state
    const filteredItemsList = todosCardList.filter(
      eachItem => eachItem.id !== id,
    )

    this.setState({
      todosCardList: filteredItemsList,
    })
  }

  render() {
    const {todosCardList} = this.state

    return (
      <div className="container">
        <div className="simpleTodos-container">
          <h1 className="heading">Simple Todos</h1>
          <ul>
            {todosCardList.map(eachTodoItem => (
              <TodoItem
                todoItemDetails={eachTodoItem}
                deleteItem={this.deleteItem}
                key={eachTodoItem.id}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default SimpleTodos
