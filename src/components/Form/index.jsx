import DropdownList from "../DropdownList";
import InputText from "../InputText";
import "./Form.css";

const Form = () => {

  const teams = [
    'Progamação',
    'Front-End',
    'Data Science',
    'Devops',
    'UX e Design',
    'Mobile',
    'Inovação e Gestão'
  ]

  return (
    <section className="form">
      <form>
        <h2>Preencha os dados para criar o card do colaborador</h2>
        <InputText label="Nome" placeholder="Digite o seu nome" />
        <InputText label="Cargo" placeholder="Digite o seu cargo" />
        <InputText label="Imagem" placeholder="Digite o endereço da imagem" />
        <DropdownList items={teams} />
      </form>
    </section>
  );
};

export default Form;
