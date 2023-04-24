import React from 'react';
import Card from '../../components/demand/demand';
import './ListarChamados.css'

type Props = {}

const ListarChamados = (props: Props) => {
  const chamados = [
    {
      title: "Título do chamado 1",
      description: "Descrição do chamado 1",
      fileName: "Nome do arquivo 1"
    },
    {
      title: "Título do chamado 2",
      description: "Descrição do chamado 2",
      fileName: "Nome do arquivo 2"
    },
    {
      title: "Título do chamado 3",
      description: "Descrição do chamado 3",
      fileName: "Nome do arquivo 3"
    },
    {
      title: "Título do chamado 4",
      description: "Descrição do chamado 4",
      fileName: "Nome do arquivo 4"
    },
    {
      title: "Título do chamado 5",
      description: "Descrição do chamado 5",
      fileName: "Nome do arquivo 5"
    },
    {
      title: "Título do chamado 6",
      description: "Descrição do chamado 6",
      fileName: "Nome do arquivo 6"
    },
    {
      title: "Título do chamado 7",
      description: "Descrição do chamado 7",
      fileName: "Nome do arquivo 7"
    },
    {
      title: "Título do chamado 8",
      description: "Descrição do chamado 8",
      fileName: "Nome do arquivo 8"
    },
  ];

  document.title = 'Listar Chamados'

  return (
    <div className='container-list'>
      <p className='title-container' >Listar Chamados</p>
      <div className='cards'>
        {chamados.map((chamado, index) => (
          <Card
            key={index}
            title={chamado.title}
            description={chamado.description}
            fileName={chamado.fileName}
          />
        ))}
      </div>
    </div>
  );
};

export default ListarChamados;