import React from "react";
import Button from "../UI/Button";

const NoteItem = (props) => {
	const noteDeleteHandler = () => {
		props.onDelete(props.id);
	};
	return (
		<div>
			<li key={props.id}>
				<h2>{props.title}</h2>
				<p>{props.desc}</p>
				<Button onClick={noteDeleteHandler}>Delete</Button>
			</li>
		</div>
	);
};

export default NoteItem;
