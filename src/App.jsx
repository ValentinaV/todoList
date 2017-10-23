import React from 'react';
import ReactDOM from 'react-dom';

import axios from 'axios';

import Todo from './components/TodoItem';
import Form from './components/Form';
import Header from './components/Header';

class App extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			todoList: []
		}

		this.url = 'https://private-anon-dbd9f0c09d-note10.apiary-mock.com/notes';

		this.handleAdd = this.handleAdd.bind(this);
		this.handleDelete = this.handleDelete.bind(this);
        this.handleEdit = this.handleEdit.bind(this);
	}

	componentDidMount() {
		axios.get(this.url)
		.then(response => response.data)
		.then(todoList => this.setState({todoList: todoList}))
		.catch(error => console.error(error));
	}

	handleAdd(title) {
		axios.post(this.url, {title: title})
		.then(response => response.data)
		.then(todo => {
			let todoList = this.state.todoList.slice();
			todoList.push(todo);

			this.setState({ todoList: todoList });
		})
		.catch(error => console.error(error));
	}

	handleDelete(id){
		axios.delete(`${this.url}/${id}`)
		.then(() => {
			let todoList = this.state.todoList.filter( todo => todo.id !== id);

			this.setState({todoList: todoList})
		})
		.catch(error => console.error(error));
	}

	handleEdit(id, title) {
		axios.put(`${this.url}/${id}`, {title: title} )
		.then(response => {
			const todoList = this.state.todoList.map(todo => {
	            if (todo.id === id) {
	                todo = response.data;
	            }

	            return todo;
	        });

	        this.setState({ todoList: todoList });
		})
		.catch(error => console.error(error));
    }

	render() {
		return(
			<div className="todoApp">
				<Header />
				<Form onAdd={this.handleAdd} />
					{this.state.todoList.map( todo =>
						<Todo 
							key={todo.id}
							id={todo.id}
							title={todo.title}
							onDelete={this.handleDelete}
							onEdit={this.handleEdit}
						/>
					)}
			</div>
		);
	}
}

ReactDOM.render(<App />, document.getElementById('root'));