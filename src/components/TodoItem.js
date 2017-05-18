import React, { Component } from 'react'

class TodoItem extends Component {
	render(){
		const { id, name, status, moveToComplete } = this.props.todo
	
		return(
			<li>
				<div>
					id: { id }, name: { name }, status: { status }

					{ status === 'Active' &&
					 	<button onClick={() => { this.props.moveToComplete(id) }}>Done</button>
					}
				</div>
			</li>
		)
	}
}

export default TodoItem