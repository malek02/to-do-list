import React from 'react'
 import InputGroup from 'react-bootstrap/InputGroup';
 import {connect} from 'react-redux';
 import 'bootstrap/dist/css/bootstrap.min.css';
 import { BsLayoutTextSidebar } from "react-icons/bs";





 function Todoinput(props) {



    return (
      <>
     
        <div className="my-3">
        <form onSubmit={e=>props.handelSubmit(e)}>
              <InputGroup className="mb-3">
    <InputGroup.Prepend>
      <InputGroup.Text id="basic-addon1" className="bg-primary text-white">
      <BsLayoutTextSidebar />
      </InputGroup.Text>
    </InputGroup.Prepend>
    <input type="text" className="form-control"
      placeholder="Add Tod Item"
      name="item"
      value={props.item}
      onChange={e=>props.handelChange(e)
    
        }
        
        required
    />
    <button 
    type='submit'
    className={`${props.editItim ? "btn-success" : "btn-primary"} btn btn-block btn-primary mt-3 textuppercase` }
     >
      { props.editItim ? "EDIT LIST" : "ADD LIST"}
    </button>
  </InputGroup>
  </form>


        </div>
        </>
    )
}
const mapStateToProps=({todo})=>({
  item:todo.item,
  editItim:todo.editItim,
  
})
export default connect(mapStateToProps)(Todoinput);