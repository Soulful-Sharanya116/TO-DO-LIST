import React, { useState } from 'react';
import { FaPen, FaTrash } from 'react-icons/fa';

function TodoItem({ task, toggleComplete, deleteTask, editTask }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newText, setNewText] = useState(task.text);

  const handleEdit = () => {
    if (newText.trim()) {
      editTask(task.id, newText);
      setIsEditing(false);
    }
  };

  return (
    <div className={`todo-item ${task.completed ? 'completed' : ''}`}>
      <div className="task-content">
        <div
          className="custom-checkbox"
          onClick={() => toggleComplete(task.id)}
        >
          {task.completed && <div className="checkmark"></div>}
        </div>
        {isEditing ? (
          <input
            type="text"
            value={newText}
            onChange={(e) => setNewText(e.target.value)}
            onBlur={handleEdit}
            onKeyPress={(e) => e.key === 'Enter' && handleEdit()}
            autoFocus
            className="edit-input"
          />
        ) : (
          <span className="task-text">{task.text}</span>
        )}
      </div>
      <div className="item-buttons">
        <button onClick={() => setIsEditing(!isEditing)} className="icon-button edit-btn">
          <FaPen />
        </button>
        <button onClick={() => deleteTask(task.id)} className="icon-button delete-btn">
          <FaTrash />
        </button>
      </div>
    </div>
  );
}

export default TodoItem;
