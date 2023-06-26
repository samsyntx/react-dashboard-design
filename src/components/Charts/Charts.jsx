import ChartsContainer from "./ChartsContainer";
import AreaChartCom from "./AreaChartsCom";
import BarChartCom from "./BarChartCom";
import PieChartCom from "./PieChartCom";
import {AiOutlineAreaChart} from 'react-icons/ai'

const chartProps = [
  { id: 1, name: "Area Chart Example", icon: <AiOutlineAreaChart size={20}/>, time: "Updated yesterday at 11:59 PM", isFlexGrow: true},
  { id: 2, name: "Bar Chart Example", icon: "", time: "Updated yesterday at 11:59 PM", isFlexGrow: false},
  { id: 3, name: "Pie Chart Example", icon: "", time: "Updated yesterday at 11:59 PM", isFlexGrow: false},
];

const Charts = () => {
  return (
    <div>
      <ChartsContainer detail={chartProps[0]}>
        <AreaChartCom height={300} width={999}/>
      </ChartsContainer>
      <ChartsContainer detail={chartProps[1]}>
        <BarChartCom height={300} width={999}/>
      </ChartsContainer>
      <ChartsContainer detail={chartProps[2]}>
        <PieChartCom height={300} width={999}/>
      </ChartsContainer>
    </div>
  );
};

export default Charts;
