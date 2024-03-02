import { useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTodo,updateTodo,deleteTodo} from "../redux/actions/index";


const Todo = ({ todo }) => {
    const [editing, setEditing] = useState(false);
    const dispatch = useDispatch();
    const [text,setText] = useState(todo.data);

    const onFormSubmit = (e) =>{
        e.preventDefault();
        setEditing(prevState=>!prevState);
        dispatch(updateTodo(todo._id,text));
    }

    return (
        <li
            className="task"
            key={todo._id}
            onClick={() => dispatch(toggleTodo(todo._id))}
            style={{
                textDecoration: todo.done ? 'line-through' : ''
            }}

        >
            <span style={{ display: editing ? 'none' : '' }}>{todo.data}</span>

            <form action="" 
                style={{display: editing ? 'inline' : 'none' }}
                onSubmit={onFormSubmit}
            >   
                <input 
                    type="text" 
                    value={text}
                    className="edit-todo"
                    onChange={(e)=>setText(e.target.value)}
                />
            </form>


            <span className="icon" onClick={()=>dispatch(deleteTodo(todo._id))}>
                <i className="fas fa-trash" />
            </span>


            <span className="icon" onClick={() => setEditing(prevState => !prevState)}>
                <i className="fas fa-pen"></i>
            </span>
        </li>
    )

}

export default Todo;