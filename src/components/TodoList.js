import React from "react";

const TodoList = ({todos,handleDelete,handleEdit}) =>{
    return(
        <ul className="TodosList">
          {todos.map((t) => (
            <li className="Todo">
                <span className="Todotext" key={t.id}> 
                {t.todo}
                </span>
              <button onClick={() => handleEdit(t.id)}>Edit</button>
              <button onClick={() => handleDelete(t.id)}>Delete</button>
            </li>
          ))}
        </ul>
    );
};

export default TodoList;