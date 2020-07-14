import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BsTrash,BsPencil } from "react-icons/bs"

export default function TodoItem({item,deletItem,editItem}) {
    return (
        <li className="list-group-item text-capitalize d-flex 
        justify-content-between my-2">
              <h6>{item.Title}</h6>
              <div className='todo-icon'>
              <span className="mx-2 text-danger"
            onClick={deletItem}>
                  <BsTrash />
              </span>
              <span className="mx-2 text-success"
              onClick={editItem}>
                  <BsPencil />
              </span>
        </div>
        </li>
    )
}
