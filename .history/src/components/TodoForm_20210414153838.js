import React, {useState} from "react";
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from "react-dom";

const TodoForm = () => {
	const [todo, setTodo] = useState({
		id: "",
		task: "",
		completed: false
	});

	const handleTaskInputChange = (e) => {
		setTodo({...todo, task: e.target.value});
	}

	const handleSubmit = (e) => {
		e.preventDefault();
		if (todo.task.trim()) {
			addTodo({...todo, id: uuid.v4()});
		}

	}

  return(
  <form>
		<input
			name="task"
			type="text"
			value={todo.task}
			onChange={handleTaskInputChange}
		/>
		<button type="submit"/>
  </form>
  );
}

export default TodoForm;