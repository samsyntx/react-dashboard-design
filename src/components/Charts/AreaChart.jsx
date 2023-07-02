import { Line} from "react-chartjs-2";
import ChartsDetails from "./ChartsDetails";
import ChartsContainer from './ChartsContainer'
/* eslint-disable no-unused-vars */
import Chart from "chart.js/auto";

const areaChartData = {
  labels: ["Label 1", "Label 2", "Label 3"],
  datasets: [
    {
      label: "Area Chart",
      data: [10, 20, 30],
      backgroundColor: "rgba(75, 192, 192, 0.2)",
      borderColor: "rgba(75, 192, 192, 1)",
      borderWidth: 1,
    },
  ],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
};

const AreaChart = () => {
  return (
    <ChartsContainer detail={ChartsDetails[0]}>
      <Line data={areaChartData} options={chartOptions} />
    </ChartsContainer>
  );
};
export default AreaChart;
