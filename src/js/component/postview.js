import React, { useState } from "react";
import PropTypes from "prop-types";

export function Postview(props) {
	function buttonEdit() {
		props.fun1(props.info);
	}
	function buttonDelete() {
		props.fun2(props.info);
	}
	return (
		<div>
			<div>{props.info.name}</div>
			<div>{props.info.title}</div>
			<div>{props.info.post}</div>
			<div>{props.info.id}</div>
			<button onClick={buttonEdit}>edit</button>
			<button onClick={buttonDelete}>delete</button>
		</div>
	);
}
Postview.propTypes = {
	info: PropTypes.object,
	fun1: PropTypes.func,
	fun2: PropTypes.func
};
