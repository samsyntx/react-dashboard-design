import styled from "styled-components";

const switchToCheckProp = (props) => {
  switch (props.bgcolor) {
    case 1:
      return "#106cf5";
    case 2:
      return "#f0b209";
    case 3:
      return "green";
    case 4:
      return "#c80000";
    default:
      return "";
  }
};

export const HomeComContainer = styled.div`
  height: 90vh;
  padding: 15px;
  color: #222121;
`;

export const HomeDashboardHeading = styled.h1`
  margin: 20px 0px 15px 0px;
`;

export const LinkBar = styled.p`
  margin-bottom: 20px;
  color: #616161;
`;

export const DashBoardUnOrder = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  list-style: none;
  flex-wrap: wrap;
`;

export const DashboardCard = styled.li`
  background-color: ${switchToCheckProp};
  width: 200px;
  flex-grow: 1;
  margin: 5px;
  border: 1px solid #00000031;
  padding: 5px;
  color: white;
  border-radius: 6px;
  height: 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  font-weight: 300;
`;

export const DashboardCardpHead = styled.p`
  font-size: 15px;
  padding: 10px;
  margin-top: 10px;
`;

export const DashBoardCardHr = styled.hr`
  border: 1px solid #00000031;
  margin: 10px 0px 5px 0px;
`;

export const DashboardCardViewIconCon = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
padding: 15px 10px 0px 10px;
`;

export const DashboardCardViewDetail = styled.p`
    text-decoration: underline;
    font-size: 13px;
`;

export const DashboardCardDetailIcon = styled.div``;

export const HomeChartsContainer = styled.div`
display: flex;
margin: 10px 0px 10px 0px;
@media all and (max-width: 768px){
  display: block;
}
`
