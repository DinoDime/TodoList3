import React from "react";
import Todo from "./Todo";

const TodoList = (props) => {
	return(
		<ul>
			{props.map(todo => (
				<Todo key={todo.id} todo={todo}/>
			))}
		</ul>
	);
}

export default TodoList