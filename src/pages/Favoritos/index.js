// import { useEffect, useState } from "react";
// import { Link } from "react-router-dom";

// import { toast } from "react-toastify";

// import Button from "react-bootstrap/Button";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";

// export default function Favoritos() {
// 	const [filmes, setFilmes] = useState([]);

// 	useEffect(() => {
// 		const minhaLista = localStorage.getItem("filmes");
// 		setFilmes(JSON.parse(minhaLista) || []);
// 	}, []);

// 	function handleDelete(id) {
// 		let filtroFilmes = filmes.filter((item) => {
// 			return item.id !== id;
// 		});

// 		setFilmes(filtroFilmes);
// 		localStorage.setItem("filmes", JSON.stringify(filtroFilmes));
// 		toast.success("Filme excluído com sucesso!");
// 	}
// 	return (
// 		<Container>
// 			<h1>Favoritos</h1>
// 			<Row>
// 				<Col>
// 					{filmes.map((item) => {
// 						return (
// 							<li style={{ listStyle: "none" }} key={item.id}>
// 								<h2 className="">{item.nome}</h2>
// 								<img
// 									className="animate__animated animate__pulse"
// 									src={item.foto}
// 								/>
// 								<br />
// 								<span className="">diretor: </span>
// 								{item.diretor}
// 								<section className="">
// 									<p className="sinopse" data-aos="fade-up">
// 										<span style={{ color: "#f00" }}>sinopse: </span>
// 										{item.sinopse}
// 									</p>
// 								</section>{" "}
// 								<div data-aos="fade-up">
// 									<a
// 										className="mr-4"
// 										target="blank"
// 										href={`https://youtube.com/results?search_query=${item.nome} Trailer`}
// 									>
// 										<Button variant="info" size="lg">
// 											Trailer
// 										</Button>
// 									</a>
// 									<Button
// 										variant="danger"
// 										size="lg"
// 										onClick={handleDelete}
// 									>
// 										Excluir
// 									</Button>
// 								</div>
// 								<hr />
// 							</li>
// 						);
// 					})}
// 				</Col>
// 			</Row>
// 		</Container>
// 	);
// }
