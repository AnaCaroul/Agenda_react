import styled from "styled-components";

export const Div = styled.div`
    display: grid;
    background-color: #EDEDED;
    border-radius: 5px;
    width: 98vw;
    justify-content: center;
    justify-items: center;
    align-items: center;
    height: 24vh;
    box-shadow: rgba(0,0,0,0.14902) 0px 2px 2px 0px,rgba(0,0,0,0.09804) 0px 2px 3px 0px;
    grid-template-rows: 1fr 1fr;
    align-items: center;

`;

export const Div2 = styled.div`
    display: grid;
    justify-content: center;
    justify-items: center;
    width: 100%;
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    column-gap: 30px;
`;

export const Select = styled.select`
    width: 14vw;
    background-color: #EDEDED;
    border: 1px solid gray;
`;

