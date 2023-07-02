import styled from "styled-components";
import { Link } from "react-router-dom";

export const ReactFraStyled = styled.div`
min-height: 95vh;
display: flex;
flex-direction: column;
justify-content: space-between;
`

export const CommonComContainer = styled.div`
  padding: 15px;
  color: #212429;
`;

export const MainCommonHeading = styled.h1`
  margin: 20px 0px 20px 0px;
`;

export const CommonPathPara = styled.p`
  margin: 10px 0px 10px 0px;
  color: #02010199;
`;

export const ContainerCommonDetail = styled.p`
  margin: 20px 0px 20px 0px;
  border: 1px solid #00000031;
  padding: 15px;
  border-radius: 5px;
  line-height: 30px;
  font-size: 15px;
`;

export const CommonDetailSpan = styled.span`
color: #ff00b3;
`;

export const LinkStyledCommon = styled(Link)`
color: #106cf5;
`