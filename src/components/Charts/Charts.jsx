import {
  ComContainerCharts,
  ChartShrinkContainer,
} from "./ChartsStyled";
import AreaChart from "./AreaChart";
import PieChart from "./PieChart";
import BarChart from "./BarChart";

const Charts = () => {
  return (
    <ComContainerCharts>
      <AreaChart />
      <ChartShrinkContainer>
        <BarChart />
      </ChartShrinkContainer>
      <ChartShrinkContainer>
        <PieChart />
      </ChartShrinkContainer>
    </ComContainerCharts>
  );
};

export default Charts;
