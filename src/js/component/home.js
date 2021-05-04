import React, { useState, useEffect } from "react";
import Cuadrado from "./cuadrado.js";
import { Ganador } from "./ganador.js";

export function Home() {
	const [board, setBoard] = useState(["", "", "", "", "", "", "", "", ""]);
	const [player, setPlayer] = useState("O");
	const [resultado, setResultado] = useState({
		gana: "Nadie",
		juego: "Gana"
	});
	const [start, setStart] = useState("d-none");
	const [start2, setStart2] = useState("d-block");
	const [showWinner, setShowWinner] = useState("d-none");
	const setStart1 = () => {
		setStart("d-block");
		setStart2("d-none");
	};

	useEffect(() => {
		setGanador();
		setEmpate();

		if (player == "X") {
			setPlayer("O", status);
		} else {
			setPlayer("X", status);
		}
	}, [board]);

	useEffect(() => {
		if (resultado.gana != "Nadie") {
			reiniciarJuego();
			setShowWinner("d-block");
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

	function reiniciarJuego() {
		setBoard(["", "", "", "", "", "", "", "", ""]);
		setPlayer("X");
	}

	return (
		<div className="container-fluid board">
			<div className="row justify-content-center">
				<div className={"login " + start2}>
					<div className="card text-white bg-dark">
						<div className="card-header">Choose Your Destiny</div>
						<div className="card-body row">
							<form>
								<div className="form-row">
									<div className="col">
										<input
											type="text"
											className="form-control"
											placeholder="Jugador 1"
										/>
									</div>
									<div className="col">
										<input
											type="text"
											className="form-control"
											placeholder="Jugador 2"
										/>
									</div>
								</div>
								<div className="form-row">
									<button
										type="button"
										className="btn btn-dark col">
										X
									</button>
									<button
										type="button"
										className="btn btn-dark col">
										O
									</button>
								</div>
							</form>
						</div>
						<div className="card-footer row">
							<button
								type="button"
								className="btn btn-dark col"
								onClick={setStart1}>
								Start
							</button>
						</div>
					</div>
				</div>
			</div>
			<div className={start}>
				<h1 id="titulo">Tic Tac Toe with React.js</h1>
				<h1 id="titulo">Es el turno de {player}</h1>
				<h1 id="titulo" className={showWinner}>
					Juego Terminado! Ganó: {resultado.gana}
				</h1>
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
		</div>
	);
}
