import React, { useState } from "react";
import { Div, Input, Button, Typography } from "./BoxS"; // Certifique-se de importar os componentes corretos

export const Box = (props) => {
  const { text, placeholder, onButtonClick } = props;

  // Estado local para armazenar o valor do input
  const [inputValue, setInputValue] = useState("");

  // Manipulador de evento para atualizar o estado quando o valor do input muda
  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  // Função para lidar com o clique no botão e chamar a função de retorno de chamada
  const handleButtonClick = () => {
    // Chama a função de retorno de chamada passando o valor do input
    onButtonClick(inputValue);

    // Limpa o valor do input após o clique no botão
    setInputValue("");
  };

  return (
    <>
      <Div>
        <Typography size="22px">{text}</Typography>

        <Input
          placeholder={placeholder}
          value={inputValue}
          onChange={handleInputChange}
        />

        <Button onClick={handleButtonClick}>CADASTRAR</Button>
      </Div>
    </>
  );
};