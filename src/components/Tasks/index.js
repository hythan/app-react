import React from 'react';
import {FaEdit, FaWindowClose} from 'react-icons/fa'
import './Tasks.css'
import PropTypes from 'prop-types';

export default function Tasks({tasks, handleEdit, handleDelete}) {
  return (
    <ul className="tasks">
      {tasks.map((task, index) => (
        <li key={task}>
          {task}
          <span>
            <FaEdit className="edit" onClick={(e) => handleEdit(e, index)} />
            <FaWindowClose className="close" onClick={(e) => handleDelete(e, index)} />
          </span>
        </li>
      ))}
    </ul>
  )
}


Tasks.PropTypes = {
  tasks: PropTypes.array.isRequired,
  handleEdit: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
}
