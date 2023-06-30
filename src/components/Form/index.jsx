import { useState } from "react";
import Button from "../Button";
import DropdownList from "../DropdownList";
import InputText from "../InputText";
import "./Form.css";

const Form = ({handleRegisteredCollaborator}) => {
  const teams = [
    "Progamação",
    "Front-End",
    "Data Science",
    "Devops",
    "UX e Design",
    "Mobile",
    "Inovação e Gestão",
  ];

  const [name, setName] = useState('')
  const [role, setRole] = useState('')
  const [image, setImage] = useState('')
  const [team, setTeam] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
    handleRegisteredCollaborator({
      name,
      role,
      image,
      team
    })
  };

  return (
    <section className="form">
      <form onSubmit={handleSubmit}>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <InputText
          label="Nome"
          placeholder="Digite o seu nome"
          required={true}
          value={name}
          onHandleChange={value => setName(value)}
        />
        <InputText
          label="Cargo"
          placeholder="Digite o seu cargo"
          required={true}
          value={role}
          onHandleChange={value => setRole(value)}
        />
        <InputText
          label="Imagem"
          placeholder="Digite o endereço da imagem"
          required={true}
          value={image}
          onHandleChange={value => setImage(value)}
        />
        <DropdownList items={teams} required={true} />
        <Button>Criar Card</Button>
      </form>
    </section>
  );
};

export default Form;
