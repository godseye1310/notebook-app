import React, { useState } from "react";
import Button from "../UI/Button";

const AddNote = (props) => {
	const [title, setTitle] = useState("");
	const [desc, setDesc] = useState("");

	const titleChangeHandler = (event) => {
		setTitle(event.target.value);
	};

	const descChangeHandler = (event) => {
		setDesc(event.target.value);
	};

	const addNotesHandler = (event) => {
		event.preventDefault();

		if (title.length > 0 && desc.length > 0) {
			props.onAddNotes(title, desc);
		}
		setTitle("");
		setDesc("");
	};
	return (
		<form onSubmit={addNotesHandler}>
			<div>
				<label htmlFor="username" style={{}}>
					Note Title :
				</label>
				<input type="text" id="username" value={title} onChange={titleChangeHandler} />
			</div>
			<div>
				<label htmlFor="desc">Note Desc : </label>
				<input type="text" id="desc" value={desc} onChange={descChangeHandler} />
			</div>
			<div>
				<Button type="submit">Add To Book</Button>
			</div>
		</form>
	);
};

export default AddNote;
