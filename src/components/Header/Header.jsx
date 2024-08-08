import React, { useEffect, useState } from "react";
import Card from "../UI/Card";

const Header = (props) => {
	const [searchNote, setSearchNote] = useState("");

	const searchHandler = (event) => {
		setSearchNote(event.target.value);
	};

	useEffect(() => {
		setTimeout(() => {
			props.filter(searchNote);
		}, 1000);
	}, [searchNote]);

	return (
		<Card>
			<h1>NoteBook</h1>
			<div>
				<div>
					<label htmlFor="search">Search Notes : </label>
					<input type="text" id="search" value={searchNote} onChange={searchHandler} />
				</div>
				<h5>Total Notes: </h5>
				<h5>Showing: </h5>
			</div>
		</Card>
	);
};

export default Header;
