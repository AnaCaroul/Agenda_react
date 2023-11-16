import React, { useState } from "react";
import { Button, Tipografia } from "../../style";
import { Input } from "../Boxs/BoxS";
import { Div, Div2, Select } from "./BoxTimeS";


export const BoxTime = (props) => {

    const estiloCustomizado = {
        width: '14vw'
    };

    const { placeholder, onButtonClick, options } = props

    const [professorValue, setProfessorValue] = useState("");
    const [disciplinaValue, setDisciplinaValue] = useState("");
    const [turmaValue, setTurmaValue] = useState("");
    const [inputValue, setInputValue] = useState("");

    const handleInputChange = (event) => {
        setInputValue(event.target.value);
    };

    const handleProfessorChange = (event) => {
        setProfessorValue(event.target.value);
    };

    const handleDisciplinaChange = (event) => {
        setDisciplinaValue(event.target.value);
    };

    const handleTurmaChange = (event) => {
        setTurmaValue(event.target.value);
    };


    const handleButtonClick = () => {
        onButtonClick(professorValue, disciplinaValue, turmaValue, inputValue);
        setProfessorValue("");
        setDisciplinaValue("");
        setTurmaValue("");
        setInputValue("");
    };


 return(
    <>
    <Div>
        <Tipografia size="22px"> Cadastro de Horários </Tipografia>
        <Div2> 
            <Select value={professorValue} onChange={handleProfessorChange}> 
                <option value="" disabled>
                    Selecione o professor...
                </option>
                {options.map((option, index) => (
                <option key={index} value={option}>
                    {option}
                </option>
            ))}
            </Select>

            <Select value={disciplinaValue} onChange={handleDisciplinaChange}> 
                <option value="" disabled>
                    Selecione o disciplina...
                </option>
                {options.map((option, index) => (
                <option key={index} value={option}>
                    {option}
                </option>
            ))}
            </Select>

            <Select value={turmaValue} onChange={handleTurmaChange}> 
                <option value="" disabled>
                    Selecione a turma...
                </option>
                {options.map((option, index) => (
                <option key={index} value={option}>
                    {option}
                </option>
            ))}
            </Select>

            <Input
            style={estiloCustomizado}
            placeholder={placeholder} 
            value={inputValue}
            onChange={handleInputChange}
            />
            <Button onClick={handleButtonClick}>CADASTRAR</Button>
        </Div2>
        
    </Div>
    </>
 )
};