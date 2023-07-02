import { ComContainerCharts, ChartShrinkContainer } from "./ChartsStyled";
import AreaChart from "./AreaChart";
import PieChart from "./PieChart";
import BarChart from "./BarChart";
import {
  MainCommonHeading,
  CommonPathPara,
  ContainerCommonDetail,
  CommonComContainer,
  LinkStyledCommon,
} from "../CommonPage/CommonStyled";
import FooterComp from "../FooterComp/FooterComp";

const Charts = () => {
  return (
    <>
      <ComContainerCharts>
        <CommonComContainer>
          <MainCommonHeading>Charts</MainCommonHeading>
          <CommonPathPara>
            <LinkStyledCommon to="/">Dashboard</LinkStyledCommon> / Charts
          </CommonPathPara>
          <ContainerCommonDetail>
            Chart.js is a third party plugin that is used to generate the charts
            in this template. The charts below have been customized - for
            further customization options, please visit the official{" "}
            <LinkStyledCommon
              to="#"
              onClick={() =>
                window.open("https://www.chartjs.org/docs/latest/", "_blank")
              }
            >
              Chart.js documentation .
            </LinkStyledCommon>
          </ContainerCommonDetail>
        </CommonComContainer>
        <AreaChart />
        <ChartShrinkContainer>
          <BarChart />
        </ChartShrinkContainer>
        <ChartShrinkContainer>
          <PieChart />
        </ChartShrinkContainer>
      </ComContainerCharts>
      <FooterComp />
    </>
  );
};

export default Charts;
