import React from "react";

const Todo = ({todo}) => {
  return(
		<div style={{display: "flex"}}>
			<input type="checkbox"/>
			<li
				style={{
					color: "wheat",
					textDecoration: todo.completed ? "'line-through" : null
				}}
			>
			{todo.task}
			</li>
			<button>X</button>
		</div>
  );
}

export default Todo;