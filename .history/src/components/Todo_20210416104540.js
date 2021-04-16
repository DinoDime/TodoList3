import React from "react";

const Todo = ({todo}) => {
  return(
		<div>
			<input type="checkbox"/>
			<li
				style={{
					color: "wheat",
					textDecoration: todo.completed ? "'line-through" : null
				}}
			>
				{todo.task}
			</li>
			<button>x</button>
		</div>
  );
}

export default Todo;