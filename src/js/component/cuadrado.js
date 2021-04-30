import React from "react";
import PropTypes from "prop-types";

function Cuadrado({ value, chooseCuadrado }) {
	return (
		<button
			type="button"
			className="btn square btn-outline-secondary m-1"
			onClick={chooseCuadrado}>
			{value}
		</button>
	);
}

Cuadrado.propTypes = {
	value: PropTypes.string,
	chooseCuadrado: PropTypes.func
};

export default Cuadrado;
