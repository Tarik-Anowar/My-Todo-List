import { useState } from "react"
import { useDispatch } from "react-redux";
import { addNewTodo } from "../redux/actions"

const TodoForm = ()=>
{
    const [text,setText] = useState("");

    const dispatch = useDispatch();

    const onFormSubmit = (e)=>{
        e.preventDefault();
        dispatch(addNewTodo(text));
        console.log(" = " + text);
        let input = document.getElementById('input');
        input.value ='';
    }

    const onInputChange = (e)=>{
        setText(e.target.value);
    }
    return(
       <form className="todoForm" onSubmit={onFormSubmit}>
            <input 
                id = 'input'
                placeholder="Enter a new todo... " 
                className="formInput"
                onChange={onInputChange}
            />
       </form>
    )
}

export default TodoForm;