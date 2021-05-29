import React, { useState, useEffect } from "react";

import { toast } from "react-toastify";

import BrokeBack from "../../assets/BrokeBack.jpeg";
import Woodstock from "../../assets/Woodstock.jpeg";
import Schindler from "../../assets/Schindler.jpeg";
import Purpura from "../../assets/Purpura.jpeg";
import Elefante from "../../assets/Elefante.jpeg";
import Destino from "../../assets/Destino.jpeg";
import Vinhas from "../../assets/Vinhas.jpeg";
import Desajustados from "../../assets/Desajustados.jpeg";
import Oeste from "../../assets/Oeste.jpeg";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./home.css";

export default function Home() {
	const [searchFilm, setSearchFilm] = useState("");
	const [filme, setFilme] = useState([
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
				"No verão de 1969, no estado de Nova York, Elliot divide seu tempo entre Greenwich Village e o motel de seus pais nas montanhas, que está falindo. Quando organizadores do festival de Woodstock planejam o histórico evento musical de uma geração, Elliot se envolve e oferece o motel e terrenos na cidade para a organização do evento, mas sem imaginar a proporção gigantesca que o festival iria tomar.",
			diretor: "Ang Lee",
			foto: Woodstock,
		},
		{
			id: 3,
			nome: "A Lista de Schindler",
			sinopse:
				"O alemão Oskar Schindler viu na mão de obra judia uma solução barata e viável para lucrar com negócios durante a guerra. Com sua forte influência dentro do partido nazista, foi fácil conseguir as autorizações e abrir uma fábrica. O que poderia parecer uma atitude de um homem não muito bondoso, transformou-se em um dos maiores casos de amor à vida da História, pois este alemão abdicou de toda sua fortuna para salvar a vida de mais de mil judeus em plena luta contra o extermínio alemão.",
			diretor: "Steven Spielberg",
			foto: Schindler,
		},
		{
			id: 4,
			nome: "A Cor Púrpura",
			sinopse:
				"Georgia, 1909. Em uma pequena cidade Celie (Whoopi Goldberg), uma jovem com apenas 14 anos que foi violentada pelo pai, se torna mãe de duas crianças. Além de perder a capacidade de procriar, Celie imediatamente é separada dos filhos e da única pessoa no mundo que a ama, sua irmã, e é doada a 'Mister' (Danny Glover), que a trata simultaneamente como escrava e companheira. Grande parte da brutalidade de Mister provêm por alimentar uma forte paixão por Shug Avery (Margaret Avery), uma sensual cantora de blues. Celie fica muito solitária e compartilha sua tristeza em cartas (a única forma de manter a sanidade em um mundo onde poucos a ouvem), primeiramente com Deus e depois com a irmã Nettie (Akosua Busia), missionária na África. Mas quando Shug, aliada à forte Sofia (Oprah Winfrey), esposa de Harpo (Willard E. Pugh), filho de Mister, entram na sua vida, Celie revela seu espírito brilhante, ganhando consciência do seu valor e das possibilidades que o mundo lhe oferece.",
			foto: Purpura,
		},
		{
			id: 5,
			nome: "O Homem Elefante",
			sinopse:
				"John Merrick nasceu desfigurado e parecia estar condenado a uma triste existência como atração de um show de aberrações. Porém, um cirurgião londrino o introduziu à sociedade. Apesar de suas dolorosas experiências, Merrick é gentil e inteligente e se torna convidado frequente nos salões vitorianos, mas precisa cobrir totalmente as feições deformadas.",
			diretor: "David Lynch",
			foto: Elefante,
		},
		{
			id: 6,
			nome: "Marcas do Destino",
			sinopse:
				"Rocky Dennis (Eric Stoltz) é um adolescente inteligente, bem-humorado e extrovertido que sofre de uma rara deformidade facial. Rusty (Cher) luta para que seu filho seja aceito na escola pública, já que ele pode provar que é competente para isso. Mesmo enfrentando discriminação, Rocky encontra suporte em sua família e também se apaixona pela primeira vez.",
			diretor: "Peter Bogdanovich",
			foto: Destino,
		},
		{
			id: 7,
			nome: "As Vinhas da Ira",
			sinopse:
				"O clã Joad está à procura de uma vida melhor na Califórnia. Depois que sua seca fazenda é apreendida pelo banco, a família, liderada pelo filho Tom (Henry Fonda) recém libertado condicionalmente, carrega um caminhão e vai para o Oeste. Na estrada, assolada por dificuldades, os Joad encontram dezenas de outras famílias que fazem o mesmo trajeto e têm o mesmo sonho. Uma vez na Califórnia, no entanto, os Joad logo percebem que a terra prometida não é bem o que eles esperavam.",
			diretor: "John Ford",
			foto: Vinhas,
		},
		{
			id: 8,
			nome: "Os Desajustados",
			sinopse:
				"Enquanto está se divorciando, a bela ex-stripper Roslyn Taber acaba encontrando Gay Langland, um velho vaqueiro que se tornou jogador, e Guido Racanelli, um ex-aviador da Segunda Guerra Mundial. Os dois homens se apaixonam por Roslyn e os três decidem se mudar para a casa semi-acabada de Guido no deserto. Quando o grisalho ex-cavaleiro de rodeio Perce Howland chega, o quarteto começa uma empresa capturando cavalos selvagens.",
			diretor: "John Huston",
			foto: Desajustados,
		},
		{
			id: 9,
			nome: "Era uma vez no Oeste",
			sinopse:
				"Em virtude das terras que possuía serem futuramente a rota da estrada de ferro, um pai e todos os filhos são brutalmente assassinados por um matador profissional. Entretanto, ninguém sabia que ele, viúvo há seis anos, tinha se casado com uma outra mulher, de Nova Orleans, que passa ser a dona do local e recebe a proteção de um hábil atirador, que tem contas a ajustar com o frio matador.",
			diretor: "Sergio Leone",
			foto: Oeste,
		},
	]);
	useEffect(() => {
		localStorage.setItem("filmes", JSON.stringify(filme));
	}, [filme]);
	function salvarFilme() {
		const minhaLista = localStorage.getItem("filmes");
		let filmesSalvos = JSON.parse(minhaLista) || [];

		// const temFilmes = filmesSalvos.some(
		// 	(filmeSalvo) => filmeSalvo.id === filme.id
		// );
		filmesSalvos.push(filme);
		localStorage.setItem("filmes", JSON.stringify(filmesSalvos));
		let id = filmesSalvos.id;
		console.log(id);
		setFilme([...filme, []]);
		filme.push(filmesSalvos);
		console.log(filme);
		toast.success("Filme salvo!");
	}
	return (
		<Container>
			<h1>Almodóvar Cult Movie List</h1>
			<Form className="d-flex">
				<FormControl
					type="search"
					placeholder="Filme"
					className="mr-2"
					aria-label="Search"
					onChange={(event) => {
						setSearchFilm(event.target.value);
					}}
				/>
				<Button variant="info">Procurar</Button>
			</Form>
			<Row className="ctn">
				<Col>
					{filme
						.filter((val) => {
							if (searchFilm == "") {
								return val;
							} else if (
								val.nome
									.toLowerCase()
									.includes(searchFilm.toLowerCase())
							) {
								return val;
							}
						})
						.map((filme) => (
							<li style={{ listStyle: "none" }} key={filme.id}>
								<h2 className="mt-4">{filme.nome}</h2>
								<img
									className="mb-2 animate__animated animate__pulse"
									src={filme.foto}
								/>
								<br />
								<span style={{ color: "#ff0" }}>diretor: </span>
								{filme.diretor}
								<section className="mt-4">
									<p className="sinopse" data-aos="zoom-in">
										<span style={{ color: "#ff0" }}>sinopse: </span>
										{filme.sinopse}
									</p>
								</section>{" "}
								<div className="mb-4">
									<a
										className=""
										target="blank"
										href={`https://youtube.com/results?search_query=${filme.nome} Trailer`}
									>
										<Button variant="info" size="lg">
											Trailer
										</Button>
									</a>
								</div>
								<hr style={{ color: "#ff0" }} />
							</li>
						))}
				</Col>
			</Row>
		</Container>
	);
}

// <Button variant="danger" size="lg" onClick={salvarFilme}>
// 	Salvar
// </Button>;
