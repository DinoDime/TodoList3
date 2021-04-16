import React, {useState} from "react";

const TodoForm = () => {
	const [todo, setTodo] = useState({
		id: "",
		task: "",
		completed: false
	});

	const handleTaskInputChange = (e) => {
		setTodo({...todo, task: e.target.value});
	}

	const handleSubmit = (e, props) => {
		e.preventDefault();
		if (todo.task.trim()){
			props.addTodo({...todo, id: Date.now()});
			//reset the task input
			setTodo({...todo, task:""});
		}
	}

  return(
  <form onSubmit={handleSubmit}>
		<input
			name="task"
			type="text"
			value={todo.task}
			onChange={handleTaskInputChange}
		/>
		<button type="submit">submit</button>
  </form>
  );
}

export default TodoForm;