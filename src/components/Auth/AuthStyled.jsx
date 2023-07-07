import styled from "styled-components";
import { Link } from "react-router-dom";
// Login Page
export const CompleteAuthCon = styled.div`
  background-color: #106cf5;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`;

export const CompAuthInsideCon = styled.div`
  background-color: #f5f5f5;
  min-height: 300px;
  min-width: 200px;
  max-width: ${props => props.register === "true" ? '600px' : '450px'};
  flex-grow: 1;
  border-radius: 10px;
  text-align: center;
  overflow: hidden;
  padding: 0px 0px 30px 0px;
`;

export const AuthMainHeading = styled.h1`
  color: #242424;
  font-size: 25px;
  margin: 30px 0px 30px 0px;
`;

export const AuthWhiteConCom = styled.div`
  text-align: left;
  background-color: white;
  border: 1px solid #cccccc;
  min-height: 200px;
  width: 100%;
`;

export const AuthFormConCom = styled.form`
  margin: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const AuthLabelEle = styled.label`
  font-size: 15px;
  color: #242424;
  margin-left: 5px;
`;

export const AuthInputEle = styled.input`
  padding: 10px;
  font-size: 20px;
  color: #242424;
  outline: none;
  border: 1px solid #a7a7a7;
  border-radius: 5px;
  margin: 10px 5px 10px 5px;
`;

export const FlexContainerLeft = styled.div`
  display: flex;
  align-items: center;
  margin-top: 15px;
`;
export const FlexBottomSpaceBetween = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0px 15px 0px;
`;

export const LinkItemsAuth = styled(Link)`
  color: #106cf5;
  font-size: 14px;
  flex-grow: 1;
`;

export const SubmitButtonAuth = styled.button`
  background-color: #106cf5;
  padding: 10px 15px 10px 15px;
  border-radius: 5px;
  color: white;
  border: none;
`;

export const DetailAuth = styled.p`
color: #909090;
font-size: 15px;
margin-bottom: 15px;
line-height: 25px;
`
//Regiter

export const RegisterFlexCon = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
align-items: center;
width: 100%;
@media all and (max-width: 768px){
  display: flex;
  flex-direction: column;
}
`

export const RegisterInputWrap = styled.div`
margin: 10px 0px 10px 0px;
width: 100%;
display: flex;
flex-direction: column;
`

