import React, { Component } from 'react'
// simport TodoItems from './TodoItems'
import AddItem from './AddItem'
import TodoItems from './TodoItems'

import './App.css';


export default class App extends Component {
  constructor() {
    super()
    this.state = {
      items: [

      ]
    }
  }

  addToDo = (newItem) => {
    this.setState({
      items: [...this.state.items, newItem]
    })
  }
  deleteleTodo = (key) => {

    this.setState({
      items: this.state.items.filter(el => el.key !== key)
    });
  }



  completeItem = (key) => {
    this.setState({
        items: this.state.items.map(el => {
            if (el.key === key) { el.checked = !el.checked;  return el }
            return el
        })
    },()=>console.log(this.state.items.find(e=>e.key===key)))
}





  render() {

    return (
      <div>
        <AddItem addToDo={this.addToDo} />
        <TodoItems items={this.state.items} deleteleTodo={this.deleteleTodo} completeItem={this.completeItem} />

      </div>
    )
  }
}
