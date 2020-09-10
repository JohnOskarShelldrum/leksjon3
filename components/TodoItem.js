import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Todos from "./Todos";


class TodoItem extends Component {
    getStyle = () => {
       return {
           background: '#f4f4f4',
           padding: '5px',
           borderBottom: '1px #ccc dotted',
           textDecoration: this.props.todo.completed ?
               'line-trough' : 'none'
       }
    }

    markComplete = (e) => {
        console.log(this.props)
    }

    render() {
        const { id, title } = this.props.todo;
        return (
            <div style={this.getStyle()}>
                <p>
                    <input type="checkbox" onChange={this.props.markComplete.bind
                    (this, id)} /> {' '}
                    { title }</p>
                    <button onClick={this.props.delTodo.bind(this, id)} style={btnStyle}>x</button>
            </div>
        );
    }
}

// PropTypes
TodoItem.propTypes = {
    todos: PropTypes.object.isRequired,
    markComplete: PropTypes.func.isRequired,
    delTodo: PropTypes.func.isRequired
}


const btnStyle = {
    background: 'red',
    color: 'white',
    border: 'none',
    padding: '5px 8px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right'
}

export default TodoItem;
