import React, { useState, useEffect } from "react";
import BrokeBack from "../../assets/BrokeBack.jpeg";
import Woodstock from "../../assets/Woodstock.jpeg";

export default function Home() {
	const [filmes] = useState([
		{
			id: 1,
			nome: "O Segredo de Brokeback Mountain",
			sinopse:
				"Jack Twist (Jake Gyllenhaal) e Ennie Del Mar (Heath Ledger) são dois jovens que se conhecem no verão de 1963, após serem contratados para cuidar das ovelhas de Joe Aguirre (Randy Quaid) em Brokeback Mountain. Jack deseja ser cowboy e está trabalhando no local pelo 2º ano seguido, enquanto que Ennie pretende se casar com Alma (Michelle Williams) tão logo o verão acabe. Vivendo isolados por semanas, eles se tornam cada vez mais amigos e iniciam um relacionamento amoroso. Ao término do verão cada um segue sua vida, mas o período vivido naquele verão irá marcar suas vidas para sempre.",
			diretor: "Ang Lee",
			foto: BrokeBack,
		},
		{
			id: 2,
			nome: "Aconteceu em Woodstock",
			sinopse:
				"Se há algo que não se pode dizer de Ang Lee, é que ele seja repetitivo. Da Inglaterra do século XIX (Razão e Sensibilidade) ao velho oeste americano (Cavalgada com o Diabo), de um super-herói dos quadrinhos (Hulk) ao wuxia (O Tigre e o Dragão), de um libelo gay (O Segredo de Brokeback Mountain) a um filme com cenas tórridas de sexo heterossexual (Desejo e Perigo), a diversidade tem sido marca registrada de sua carreira. Aconteceu em Woodstock, seu novo filme, mais uma vez traz algo de novo em sua filmografia.O interesse de Lee não é propriamente apresentar os bastidores do mítico festival de Woodstock, mas mostrar o que estava por trás dele na sociedade de momento. Seu foco é o lado humano, em especial os preconceitos e até que ponto eles podem ser relevados devido ao lado capitalista. Sim, o princípio de tudo, quando é definido o local onde Woodstock ocorrerá e sua organização às pressa...",
			diretor: "Ang Lee",
			foto: Woodstock,
		},
	]);
	useEffect(() => {
		localStorage.setItem("filmes", JSON.stringify(filmes));
	}, [filmes]);
	return (
		<div className="has-background-info has-text-centered">
			<h1 className="has-text-white is-size-1">Almodovar Movie List</h1>
			<div className="">
				{filmes.map((filme) => (
					<li style={{ listStyle: "none" }} key={filme.id}>
						<h2 className="is-size-3">{filme.nome}</h2>
						<img src={filme.foto} />
						<br />
						diretor: {filme.diretor} <br /> sinopse: {filme.sinopse}
					</li>
				))}
			</div>
		</div>
	);
}
