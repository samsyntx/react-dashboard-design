import styled from "styled-components";

// Container Style for Graph

export const ChartsContainerCom = styled.div`
  border: 1px solid #00000031;
  border-radius: 10px;
  background-color: #f2f2f2;
  width: 100%;
  overflow: hidden;
`;

export const CCHeadingIconContainer = styled.div`
  margin: 15px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const CCTitleIcon = styled.div`
`;

export const CCchartTitle = styled.p`
  margin-left: 10px;
  font-size: 15px;
`;

export const CCmainChildContainer = styled.div`
  background-color: white;
  border: 1px solid #00000031;
  width: 100%;
  height: 300px;
  padding: 30px 0px 30px 0px;
`;

export const CCbottomTimeContainer = styled.p`
  margin: 15px;
  font-size: 13px;
  color: #757575;
`;

// Chart.jsx Styling

export const ComContainerCharts = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  @media all and (max-width: 768px) {
    display: flex;
    flex-direction: column;
  }
`;

export const ChartShrinkContainer = styled.div`
  width: 40%;
  margin: 5px;
  flex-grow: 1;
  @media all and (max-width: 768px) {
    display: block;
    width: 100%;
  }
`;
