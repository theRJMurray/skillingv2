import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "../actions";

const Counter = () => {
	const counter = useSelector(state => state.counter);
	const isLogged = useSelector(state => state.isLogged);
	const dispatch = useDispatch();
	return (
		<div>
			<h1>Mining {counter}</h1>
			<button onClick={() => dispatch(increment(1))}>+</button>
			<button onClick={() => dispatch(decrement(2))}>-</button>
			{isLogged ? <h3>Logged in</h3> : <h3>Logged out</h3>}
		</div>
	);
};

export default Counter;
