import React, { useState, useEffect } from "react";

import { Link } from "react-router-dom";

import api from "../../services/api";

import { toast } from "react-toastify";

import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import "./home.css";

export default function Home() {
  const [searchFilm, setSearchFilm] = useState("");
  const [filmes, setFilmes] = useState([]);
  useEffect(() => {
    async function loadFilmes() {
      const response = await api.get(".json");
      setFilmes(response.data);
    }
    loadFilmes();
  }, []);

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
      </Form>
      <Row className="ctn">
        <Col>
          {Object.values(filmes)
            .filter((val) => {
              if (searchFilm == "") {
                return val;
              } else if (
                val.filme.toLowerCase().includes(searchFilm.toLowerCase())
              ) {
                return val;
              }
            })
            .map((filme) => (
              <li style={{ listStyle: "none" }} key={filme.id}>
                <h2 className="mt-4">{filme.filme}</h2>
                <img
                  data-aos="zoom-in"
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
                    href={`https://youtube.com/results?search_query=${filme.filme} Trailer`}
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
