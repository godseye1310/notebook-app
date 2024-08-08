import React from "react";
import Card from "../UI/Card";
import NoteItem from "../NoteItem/NoteItem";

const NotesList = (props) => {
	// console.log(props.notesList);
	return (
		<>
			<h3>Notes List</h3>
			<Card>
				<ul>
					{props.notesList.map((list) => (
						<NoteItem
							id={list.id}
							title={list.title}
							desc={list.desc}
							onDelete={props.delete}
						/>
					))}
				</ul>
			</Card>
		</>
	);
};

export default NotesList;
