import React, { useState, UseState } from "react";
import Nav from "./Nav";
import Pig from "./Pig";
import Pen from "./Pen";
import hogs from "../porkers_data";

const [clickedSet, setClicked] = useState(false);
const [greasedPigs, pigsGreased] = useState(false);
const [sortPigs, pigsSort] = useState("none");

const filterSortHogs = () => {
	const filtered = hogs.filter((hog) => {
		greasedPigs ? hog.greased : true;
	});
	sortSet === 'none'
		? filtered
		: sortPigs === 'name'
		? filtered.sort((a, b) => {
			a.name > b.name ? 1 : -1;
		})
		: filtered.sort((a, b) => {
			a.weight < b.weight ? 1 : 01;
		});
}

function App() {
	return (
		<div className="App">
			<Nav />
			<Pen greasedPigs={greasedPigs} pigsGreased={pigsGreased} pigsSort={pigsSort} />
			<Pig
				uuidv4={uuidv4}
				clickedSet={clickedSet}
				setClicked={setClicked}
				filterSortHogs={filterSortHogs}
			/>
		</div>
	);
}

export default App;
