import React, { useState, useRef } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import People from "../../assets/people.svg";
import Arrow from "../../assets/arrow.svg";
import ContainerItems from "../../components/ContainerItems";
import H1 from "../../components/Title";
import Button from "../../components/Button";

import { Container, Image, InputLabel, Input } from "./styles";

const Home = () => {
  const navigate = useNavigate();
  const [users, setUsers] = useState([]);
  const inputName = useRef();
  const inputAge = useRef();

  async function addNewuser() {
    const { data: newUser } = await axios.post("http://localhost:8000/users", {
      name: inputName.current.value,
      age: inputAge.current.value,
    });

    setUsers([...users, newUser]);
    navigate("/users");
  }

  return (
    <Container>
      <Image alt="logo-imagem" src={People} />
      <ContainerItems>
        <H1>Olá!</H1>

        <InputLabel>Nome</InputLabel>
        <Input ref={inputName} placeholder="Nome" />

        <InputLabel>Idade</InputLabel>
        <Input ref={inputAge} placeholder="Idade" />

        <Button onClick={addNewuser}>
          Cadastrar
          <img alt="seta" src={Arrow} />
        </Button>
      </ContainerItems>
    </Container>
  );
};

export default Home;
