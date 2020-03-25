import React, { useState } from "react";
import { Postview } from "./postview.js";
var a = 0;
//create your first component
export function Home() {
	const [state, setState] = useState([]);
	const [count, setCount] = useState(0);
	console.log(count);
	function createPost(e) {
		e.preventDefault();
		if (count != 0) {
			var updatedValue = state.map(item => {
				if (item.id == count) {
					item.name = document.getElementById("name").value;
					item.title = document.getElementById("title").value;
					item.post = document.getElementById("post").value;
				}
				return item;
			});
			setState(updatedValue);
			setCount(0);
		} else {
			var obj = {};
			obj["name"] = document.getElementById("name").value;
			obj["title"] = document.getElementById("title").value;
			obj["post"] = document.getElementById("post").value;
			a = a + 1;
			obj["id"] = a;
			var newArray = state.concat([obj]);
			setState(newArray);
		}
		document.getElementById("name").value = "";
		document.getElementById("title").value = "";
		document.getElementById("post").value = "";
	}
	function updatePost(obj) {
		console.log(obj);
		document.getElementById("name").value = obj.name;
		document.getElementById("title").value = obj.title;
		document.getElementById("post").value = obj.post;
		setCount(obj.id);
	}
	function deletePost(tobedeleted) {
		setState(state.filter(item => item.id != tobedeleted.id));
	}
	return (
		<div>
			<form onSubmit={createPost}>
				<div>
					<label>Name:</label>
					<input type="text" id="name" />
				</div>
				<div>
					<label>Title: </label>
					<input type="text" id="title" />
				</div>
				<div>
					{" "}
					<label>Post:</label>
					<textarea rows="4" cols="50" id="post" />
				</div>
				<div>
					<input type="submit" />
				</div>
			</form>

			{state.map(item => {
				return (
					<div key={item}>
						<Postview
							info={item}
							fun1={updatePost}
							fun2={deletePost}
						/>
					</div>
				);
			})}
		</div>
	);
}
