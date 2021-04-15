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
  return(
  <form>
		<input/>
		<button/>
  </form>
  );
}

export default TodoForm;