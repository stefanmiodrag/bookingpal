import styled from "styled-components";

export const Card = styled.div`
border-radius: 8px;
box-shadow: ${props => props.elevated ? "0 0 0 1px rgba(16,22,26,.1), 0 0 0 rgba(16,22,26,0), 0 1px 1px rgba(16,22,26,.2)" :
        "0 0 0 1px rgba(16,22,26,.15), 0 0 0 rgba(16,22,26,0), 0 0 0 rgba(16,22,26,0)"};
box-sizing: border-box;
background-color: white;
padding: ${props => props.space ? "24px" : "0px"};
width: ${props => props.width || "100%"};
border-top: ${props => props.bar ? "4px solid #2D9BF3" : "none"};
`