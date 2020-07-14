import React, { Component } from 'react'
import Todoinput from './components/Todoinput';
import TodoList from './components/TodoList';
import { v4 as uuidv4 } from 'uuid';
import {connect} from 'react-redux';
import {setItem,setEditItim,setItems,setId} from './redux/todo/todo.action';
import 'bootstrap/dist/css/bootstrap.min.css';

 class App extends Component {

handelChange=(e)=>{
 
  this.props.setItem(e.target.value)
console.log("1",this.props.setItem);

}
handelSubmit=(e)=>{
  e.preventDefault();
  const newItem={
    id:this.props.id,
    Title:this.props.item
  }

  const upDate=[...this.props.items,newItem]
  this.props.setId(uuidv4())
this.props.setItems(upDate)
this.props.setItem("");
this.props.setEditItim(false)

 
}
handelDelet=(e)=>{
  this.props.setItems([])
}
deletItem=(e)=>{
 const lits = this.props.items.filter(item=>item.id !== e);
 this.props.setItems(lits)
}
editItem=e=>{
  const lits = this.props.items.filter(item=>item.id !== e);
  const edilist = this.props.items.find(item=>item.id === e);
  this.props.setId(e);
  this.props.setItems(lits);
  this.props.setItem(edilist.Title);
  this.props.setEditItim(true);
}
  render() {
    return (
      <div className='container'>
      <div className='row'>
      <div className="col-10 mx-auto col-md-8 mt-5">
      <h3 className="text-capitalize text-center">To Do List</h3>
      
        <Todoinput handelChange={this.handelChange} 
          handelSubmit={this.handelSubmit}
       
        />
         <TodoList handelDelet={this.handelDelet}
         
         deletItem={this.deletItem}
         editItem={this.editItem}
         />

        </div>
      </div>
      </div>
    )
  }
}
const mapStateToProps=({todo})=>({
  item:todo.item,
  editItim:todo.editItim,
  items:todo.items,
  id:todo.id

})

const mapDispatchToprops= dispatch =>({
  setItem : user =>dispatch(setItem(user)),
  setEditItim : opposit=>dispatch(setEditItim(opposit)),
  setItems : edit => dispatch(setItems(edit)),
  setId:id => dispatch(setId(id))
})

export default connect (mapStateToProps, mapDispatchToprops)(App);