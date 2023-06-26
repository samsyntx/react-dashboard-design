import styled from "styled-components";

// Container Style for Graph

export const ChartsContainerCom = styled.div`
  border: 1px solid #00000031;
  border-radius: 10px;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 10px;
  width: 100%;
  @media all and (max-width: 768px){
    overflow: auto;
    margin: 0px;
  }
`;

export const CCHeadingIconContainer = styled.div`
align-self: flex-start;
margin: 15px;
display: flex;
justify-content: center;
align-items: center;
`;

export const CCTitleIcon = styled.div``;

export const CCchartTitle = styled.p`
  margin-left: 10px;
  font-size: 15px;
`;

export const CCmainChildContainer = styled.div`
  background-color: white;
  border: 1px solid #00000031;
  width: 100%;
  padding-top: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 350px;
  position: relative;
`;


export const CCbottomTimeContainer = styled.p`
align-self: flex-start;
margin: 15px;
font-size: 13px;
color: #757575;
`;


// Chart.jsx Styling

export const ComContainerCharts = styled.div `
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
`

export const FlexContainerCharts = styled.div `
display: flex;
flex-direction: row;
flex-grow: 1;
@media all and (max-width: 768px ){
  display: none;
}
`
