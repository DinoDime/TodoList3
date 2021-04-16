import React from "react";
import Todo from "./Todo";

const TodoList = (todos, props) => {
	return(
		<ul>
			{props.todos.map(todo => (
				<Todo key={todo.id} todo={todo}/>
			))}
		</ul>
	);
}

export default TodoList