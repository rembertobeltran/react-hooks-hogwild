import React from "react";

function Pen({ greasedPigs, pigsGreased, pigsSort }) {
    <div>
        <button onClick={() => pigsGreased(!greasedPigs)}>
            {greasedPigs ? "All Hogs" : "Greased Hogs"}
        </button>
        <select
            onChange={(event) => {
                pigsSort(event.target.value);
            }}
        >
            <option>none</option>
            <option>name</option>
            <option>weight</option>
        </select>
    </div>
}

export default Pen;