import React, { useState, useEffect } from "react";
import Cuadrado from "./cuadrado.js";
import { Ganador } from "./ganador.js";

export function Home() {
	const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
	const [player, setPlayer] = useState("O");
	const [resultado, setResultado] = useState({ gana: "none", juego: "Gana" });

	useEffect(() => {
		setGanador();
		setEmpate();

		if (player == "X") {
			setPlayer("O");
		} else {
			setPlayer("X");
		}
	}, [board]);

	useEffect(() => {
		if (resultado.juego != "none") {
			alert(`Juego Terminado! Ganó: ${resultado.gana}`);
		}
	}, [resultado]);

	const chooseCuadrado = square => {
		setBoard(
			board.map((value, index) => {
				if (index == square && value == "") {
					return player;
				}

				return value;
			})
		);
	};

	const setGanador = () => {
		Ganador.forEach(Winner => {
			const jugador1 = board[Winner[0]];
			if (jugador1 == "") return;
			let foundWinner = true;
			Winner.forEach(index => {
				if (board[index] != jugador1) {
					foundWinner = false;
				}
			});

			if (foundWinner) {
				setResultado({ gana: player, juego: "Ganó" });
			}
		});
	};

	const setEmpate = () => {
		let lleno = true;
		board.forEach(square => {
			if (square == "") {
				lleno = false;
			}
		});

		if (lleno) {
			setResultado({ juego: "No one", gana: "Empate" });
		}
	};

	return (
		<div className="container-fluid board">
			<div className="row justify-content-center">
				<div className="outside outside1">
					<Cuadrado
						value={board[0]}
						chooseCuadrado={() => {
							chooseCuadrado(0);
						}}
					/>
					<Cuadrado
						value={board[1]}
						chooseCuadrado={() => {
							chooseCuadrado(1);
						}}
					/>
					<Cuadrado
						value={board[2]}
						chooseCuadrado={() => {
							chooseCuadrado(2);
						}}
					/>
				</div>
			</div>
			<div className="row justify-content-center">
				<div className="outside">
					<Cuadrado
						value={board[3]}
						chooseCuadrado={() => {
							chooseCuadrado(3);
						}}
					/>
					<Cuadrado
						value={board[4]}
						chooseCuadrado={() => {
							chooseCuadrado(4);
						}}
					/>
					<Cuadrado
						value={board[5]}
						chooseCuadrado={() => {
							chooseCuadrado(5);
						}}
					/>
				</div>
			</div>
			<div className="row justify-content-center">
				<div className="outside outside2">
					<Cuadrado
						value={board[6]}
						chooseCuadrado={() => {
							chooseCuadrado(6);
						}}
					/>
					<Cuadrado
						value={board[7]}
						chooseCuadrado={() => {
							chooseCuadrado(7);
						}}
					/>
					<Cuadrado
						value={board[8]}
						chooseCuadrado={() => {
							chooseCuadrado(8);
						}}
					/>
				</div>
			</div>
		</div>
	);
}
