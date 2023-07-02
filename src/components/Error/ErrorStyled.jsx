import styled from "styled-components";
import { Link } from "react-router-dom";

export const ErrorComContainer = styled.div`
  min-height: 90vh;
  position: relative;
  top: 40px;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "system-ui";
  text-align: center;
  
`;

export const ErrorCode = styled.p`
  font-size: 90px;
  font-weight: 300;
`;

export const ErrorDetail = styled.p`
  font-size: 20px;
  font-weight: 300;
  margin-bottom: 20px;
`;

export const ErrorExplain = styled.p`
font-size: 18px;
  font-weight: 400;
  margin-bottom: 20px;
`;

export const ReturnDashIconText = styled(Link)`
  color: #106cf5;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const ReturnText = styled.p`
padding-bottom: 5px;
margin-left: 5px;
`

export const Error404Img = styled.img`
  width: 300px;
  margin: 20px;
  @media all and (max-width: 768px){
    width: 150px;
  }
`