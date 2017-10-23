import React from 'react';

import Button from './Button';

class TodoItem extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
            editing: false
        };

        this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
        event.preventDefault();

        const title = this.refs.title.value;

        this.props.onEdit(this.props.id, title);
        this.setState({ editing: false });
    }

	renderDisplay() {
        return (
            <div className="todo-item">
                
                <span className="todo-title">{this.props.title}</span>

                <Button className="edit icon" icon="edit" onClick={() => this.setState({ editing: true })} />
                <Button className="delete icon" icon="delete" onClick={() => this.props.onDelete(this.props.id)} />
            </div>
        );
    }

    renderForm() {
        return (
            <form className="todo-edit-form" onSubmit={this.handleSubmit}>
                <input type="text" ref="title" defaultValue={this.props.title} />
                <Button className="save icon" icon="save" type="submit" />
            </form>
        );
    }

    render() {
        return this.state.editing ? this.renderForm() : this.renderDisplay();
    }
	
}

export default TodoItem;