import ChartsContainer from "./ChartsContainer";
import AreaChartCom from "./AreaChartsCom";
import BarChartCom from "./BarChartCom";
import PieChartCom from "./PieChartCom";
import { AiOutlineAreaChart } from 'react-icons/ai'

import { ComContainerCharts, FlexContainerCharts } from './ChartsStyled'
const mediaQuery = window.matchMedia('(max-width: 768px)');

const chartProps = [
  { id: 1, name: "Area Chart Example", icon: <AiOutlineAreaChart size={20} />, time: "Updated yesterday at 11:59 PM" },
  { id: 2, name: "Bar Chart Example", icon: "", time: "Updated yesterday at 11:59 PM", },
  { id: 3, name: "Pie Chart Example", icon: "", time: "Updated yesterday at 11:59 PM", },
];

const Charts = () => {
  return (
    <ComContainerCharts>
      <ChartsContainer detail={chartProps[0]}>
        <AreaChartCom height={300} width={mediaQuery === true ? 300 : 800} />
      </ChartsContainer>
      <FlexContainerCharts>
        <ChartsContainer detail={chartProps[1]}>
          <BarChartCom height={300} width={500} />
        </ChartsContainer>
        <ChartsContainer detail={chartProps[2]}>
          <PieChartCom height={300} width={400} />
        </ChartsContainer>
      </FlexContainerCharts>
      {mediaQuery.matches && <><ChartsContainer detail={chartProps[1]} >
        <BarChartCom height={300} width={250} />
      </ChartsContainer>
        <ChartsContainer detail={chartProps[2]}>
          <PieChartCom height={300} width={250} />
        </ChartsContainer></>}
    </ComContainerCharts>
  );
};

export default Charts;
