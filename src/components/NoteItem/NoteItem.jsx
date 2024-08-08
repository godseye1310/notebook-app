import React from "react";
import "./NoteItem.css";
import Button from "../UI/Button";

const NoteItem = (props) => {
	const noteDeleteHandler = () => {
		props.onDelete(props.id);
	};
	return (
		<li className="note-item">
			<h2>{props.title}</h2>
			<p>{props.desc}</p>
			<Button onClick={noteDeleteHandler}>Delete</Button>
		</li>
	);
};

export default NoteItem;
