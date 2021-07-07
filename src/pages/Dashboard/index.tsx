import React, { useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi'

import { string } from 'yargs';
import api from '../../services/api';
import Repository from '../Repository';

import { Title, Repositories, Form } from './style';

interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  }
}

const Dashboard: React.FC = () => {
  const [newRepo , setNewRepo] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    const response = await api.get<Repository>(`repos/${newRepo}`);
    const repository = response.data;

    setRepositories([...repositories, repository]);
    setNewRepo('');

  }

  return (
    <>
      <Title>Explore repositórios do GitHub</Title>

      <Form onSubmit={handleAddRepository}>
        <input value={newRepo} onChange={e => setNewRepo(e.target.value)} type="text" placeholder="Digite o nome do repositório"/>
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>

        {/*repositories.map(repository => (
         <a key={repository.full_name} href="teste">
          <img src={repository.owner.avatar_url} alt={repository.owner.login} />
          <div>
            <strong>{repository.full_name}</strong>
            <p>{repository.description}</p>
          </div>
        </a>
        ))*/}

        <a href="teste">
          <img src="https://avatars.githubusercontent.com/u/82897719?v=4" alt="daniela"/>
          <div>
            <strong>daniggie/GitHubRepository</strong>
            <p>Projeto para aprender a usar React</p>
          </div>
          <FiChevronRight size={20}/>
        </a>

      </Repositories>


    </>
  );
};

export default Dashboard;
