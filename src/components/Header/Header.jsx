import React, { useEffect, useState } from "react";
import "./Header.css";

const Header = (props) => {
	const [searchNote, setSearchNote] = useState("");

	const searchHandler = (event) => {
		setSearchNote(event.target.value);
	};

	useEffect(() => {
		console.log("use effect");

		const timer = setTimeout(() => {
			props.filter(searchNote);
		}, 1000);

		return () => {
			console.log("cleanup");

			clearTimeout(timer);
		};
	}, [searchNote]);

	return (
		<div>
			<h1>NoteBook</h1>
			<div>
				<div className="search-bar">
					<label htmlFor="search">Search Notes :</label>
					<input type="text" id="search" onChange={searchHandler} />
				</div>
				<h5>Total Notes: {props.total.length}</h5>
				<h5>Showing: {props.showing.length}</h5>
			</div>
		</div>
	);
};

export default Header;
