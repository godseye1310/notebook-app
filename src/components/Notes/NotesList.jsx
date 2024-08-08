import React from "react";
import NoteItem from "../NoteItem/NoteItem";
import "./NotesList.css";

const NotesList = (props) => {
	// console.log(props.notesList);
	return (
		<>
			<h3>Notes List</h3>
			<ul className="notes-list">
				{props.notesList.map((list) => (
					<NoteItem
						key={list.id}
						id={list.id}
						title={list.title}
						desc={list.desc}
						onDelete={props.delete}
					/>
				))}
			</ul>
		</>
	);
};

export default NotesList;
