import React, { Component } from 'react'
import TodoItem from './TodoItem'
import 'bootstrap/dist/css/bootstrap.min.css';
import {connect} from 'react-redux';

 class TodoList extends Component {
  

    render() {
        return (
            <ul className="list-group my-5">
            <h3 className="text-capitalize text-center">
             To do List
            </h3>
          
            { this.props.items.map(item=>(
            <TodoItem key={item.id} item={item}
                deletItem={()=>this.props.deletItem(item.id)}
                editItem={()=>this.props.editItem(item.id)}
            />))}
             <button type="button"
             className="btn btn-danger btn-block text-uppercase mt-5"
             onClick={e=>this.props.handelDelet(e)}>
                 Clear List
             </button>
            </ul>
        )
    }
}
const mapStateToProps=({todo})=>({
    items:todo.items,
  })
export default connect(mapStateToProps)(TodoList);
