import React, { Component } from 'react'
import TodoItem from './TodoItem'
import { Link } from 'react-router-dom'

class TodoList extends Component {

	constructor(props){
		super(props)
		this.state = {
			todos: [  
								{ id: 0, name: 'Finish todo app', status: 'Active' },
						 		{ id: 1, name: 'Make breakfast', status: 'Completed' }
						 ],
			visibleFilter: 'Active'
		}
		this.addTodo = this.addTodo.bind(this)
		this.input;
	}

	handleFilteringTodo = (e) => {
		var filterStatus = e.target.text;
		this.setState(prevState => (
			{ todos: this.state.todos, visibleFilter: filterStatus }
		))
	}

	addTodo = (string) => {
		if(string != ''){
			var id = this.state.todos.length
			this.state.todos.push({ id: id, name: string, status: 'Active' })
			this.setState(prevState => (
				{ todos: this.state.todos, visibleFilter: this.state.visibleFilter }
			))
		}
	}

	moveToComplete = (id) => {
		if(id != ''){
			this.state.todos.map((item) => { 
				if(item.id == id){
					item.status = 'Completed'
				};
			})

			this.setState(prevState => (
				{ todos: this.state.todos, visibleFilter: this.state.visibleFilter }
			))
		}
	}

  render(){
    return(
      <div className="App">
       	<div className="new-todo-form">
	      	<input type="text" placeholder="What should be done?" ref={node => {this.input = node }}/>
	      	<button type="submit" onClick={() => { this.addTodo(this.input.value); this.input.value='' }}>Submit</button>
	      </div>
        <div className="filters">
        <Link to='#' onClick={ this.handleFilteringTodo } className='filter-link'>
						Active
				</Link>
				 <Link to='#' onClick={ this.handleFilteringTodo } className='filter-link'>
						Completed
				</Link>
	      </div>
      	<ul>
	        { 
	        	this.state.todos
	        		.filter((item) => {
	        			if (item.status === this.state.visibleFilter){
	        				return item
	        			}
	        		})
	        		.map((item) => {
	        		return(
	        			<TodoItem todo={item} key={item.id} moveToComplete={this.moveToComplete}/>
	        		)
	        	})
	        }
	      </ul>
      </div>
    )
  }
}

export default TodoList