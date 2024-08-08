import React, { useState } from "react";
import AddNote from "./components/Notes/AddNote";
import Header from "./components/Header/Header";
import NotesList from "./components/Notes/NotesList";

const App = () => {
	const [notesLi, setNotesLi] = useState([]);
	const [filterHeading, setFilterHeading] = useState("");

	const onAddNotes = (title, desc) => {
		setNotesLi([...notesLi, { title: title, desc: desc, id: Math.random().toString() }]);
	};
	const deleteHandler = (id) => {
		setNotesLi((prevNotes) => {
			const updatedList = prevNotes.filter((list) => list.id !== id);
			return updatedList;
		});
	};

	const filterHandler = (search) => {
		setFilterHeading(search);
	};
	let filteredNotes;
	if (filterHeading.trim().length > 0) {
		filteredNotes = notesLi.filter((element) => {
			if (element.title.toLowerCase().indexOf(filterHeading.toLowerCase()) !== -1) {
				return element.title;
			}
			return 0;
		});
	} else {
		filteredNotes = notesLi;
	}

	return (
		<>
			<Header filter={filterHandler} total={notesLi} showing={filteredNotes} />

			<AddNote onAddNotes={onAddNotes} />

			<NotesList notesList={filteredNotes} delete={deleteHandler} />
		</>
	);
};

export default App;
