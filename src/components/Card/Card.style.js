import styled from "styled-components";

export const Card = styled.div`
border-radius: 3px;
box-shadow: 0 0 0 1px rgba(16,22,26,.15), 0 0 0 rgba(16,22,26,0), 0 0 0 rgba(16,22,26,0);
background-color: white;
padding: ${props => props.space ? "24px" : "0px"};
width: ${props => props.width || "100%"};
`