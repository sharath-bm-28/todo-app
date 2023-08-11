import React from "react";

const TodoForm = ({handleSubmit,todo,setTodo,editId})=> {
    
    return(
        <form className="todoform" onSubmit={handleSubmit}>
          <input type="text" value={todo}
            onChange={(e) => setTodo(e.target.value)} />
          <button type="submit">{editId ? "Update" : "Add"}</button>
        </form>
    );

}

export default TodoForm;