import styled from "styled-components";

export const ButtonStyle = styled.button`
    width : ${(props) => props.width || "50px"};
    height : ${(props) => props.height || "50px"};
    border-radius : 5px;
    font-weight : bold;
    margin-left : ${(props) => props.margin_left || "0"}
`;