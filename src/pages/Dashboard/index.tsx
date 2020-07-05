import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import logoImg from '../../assets/logo.svg';
import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github.</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
        <button type="button">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="sadasd">
          <img
            src="https://avatars2.githubusercontent.com/u/26195401?s=460&u=6ef94d387483ba3cd321981ea0e5bdd18e6f1d75&v=4"
            alt="sadasdasd"
          />
          <div>
            <strong>Title</strong>
            <p>Description</p>
          </div>

          <FiChevronRight />
        </a>
        <a href="sadasd">
          <img
            src="https://avatars2.githubusercontent.com/u/26195401?s=460&u=6ef94d387483ba3cd321981ea0e5bdd18e6f1d75&v=4"
            alt="sadasdasd"
          />
          <div>
            <strong>Title</strong>
            <p>Description</p>
          </div>

          <FiChevronRight />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
