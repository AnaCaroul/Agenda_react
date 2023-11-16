import './App.css';
import React from "react";
import { Box } from './componentes/Boxs/Box';
import { Header } from './componentes/header/header';
import { Spacer  } from './style';
import { BoxTime } from './componentes/BoxTime/BoxTime';
import { BoxTeacher } from './componentes/BoxTeacher/BoxTeacher';

function App() {
   // Array para armazenar os valores de input de cada Box
   const [boxValues, setBoxValues] = React.useState([]);

  // Função para lidar com o valor do input quando o botão é clicado
  const handleBoxButtonClick = (index, value) => {
    // Atualiza o array de valores com o valor específico da Box
    setBoxValues((prevValues) => {
      const newValues = [...prevValues];
      newValues[index] = value;
      return newValues;
    });

    console.log("Valores de Input:", boxValues);
    // Faça algo com os valores de input no contexto do App
  };



  // Array para armazenar os valores de input de cada BoxTime
  const [boxTimeValues, setBoxTimeValues] = React.useState([]);

  // Função para lidar com o valor do input quando o botão é clicado em BoxTime
  const handleBoxTimeButtonClick = (value) => {
    // Atualiza o array de valores com o valor específico de BoxTime
    setBoxTimeValues((prevValues) => [...prevValues, value]);

    console.log("Valores de Input em App.js:", boxTimeValues);
    // Faça algo com os valores de input no contexto do App
  };


  const dynamicOptions = ["Opção 1", "Opção 2", "Opção 3"];


  return (
    <>
    <Header />
    <Spacer margin="5%" />
    <div className="conteiner"> 
      <Box 
      key={0}
      text={`Cadastro de Professores`}
      placeholder={`Digite o nome do professor...`}
      onButtonClick={(value) => handleBoxButtonClick(0, value)}
      />

      <Box 
      key={1}
      text={`Cadastro de Disciplina`}
      placeholder={`Digite o nome da disciplina...`}
      onButtonClick={(value) => handleBoxButtonClick(1, value)}
      /> 

      <Box 
      key={2}
      text={`Cadastro de Turma`}
      placeholder={`Digite o nome da Turma...`}
      onButtonClick={(value) => handleBoxButtonClick(2, value)}
      /> 
    </div>

    <Spacer margin="2%"/>

    <div className='conteiner2'> 
        <BoxTime 
          placeholder="Digite o número de dias..."
          onButtonClick={handleBoxTimeButtonClick}
          options={dynamicOptions}
        />   
    </div>

    <Spacer margin="2%"/>

    <div className='conteiner2'> 
      <BoxTeacher />
    </div>
    
    </>
  );
}

export default App;
