import styled, { createGlobalStyle } from "styled-components";
 
export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        text-decoration: none;
        border: none;
    }

    body{
        width: 100%;
        height: 100vh;
        justify-content: center;
        display: flex;
    }

`;



export const Flex = styled.div`
    display: flex;
    width: 100%;
    align-items: ${(props) => props.align || "center"};
    justify-content: ${(props) => props.justify || "center"};
    flex-direction: ${(props) => props.direction || "row"};
    gap: ${(props) => props.gap || "16px"};
`;

export const Spacer =  styled.div`
    width: 100%;
    margin: ${(props) => props.margin || "20px"};
`;

export const Tipografia = styled.p`
font-weight: ${(props) => props.fontWeight || "400"};
font-size: ${(props) => props.size || "18px"};
//color: ${(props) => (props.primary ? "#1A1A1A" : "#ECECEC")};
`;

export const Button = styled.button `
    background-color: #7F3AE0;
    width: 12vw;
    height: 4vh;
    color: white;
    font-weight: 600;
    border-radius: 10px;
    border: none;
    cursor: pointer;
`;