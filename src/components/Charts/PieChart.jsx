import { Pie, } from "react-chartjs-2";
import Chart from "chart.js/auto";
import ChartsDetails from "./ChartsDetails";
import ChartsContainer from "./ChartsContainer";

const pieChartData = {
  labels: ["Label 1", "Label 2", "Label 3"],
  datasets: [
    {
      data: [40, 30, 30],
      backgroundColor: [
        "rgba(255, 99, 132, 0.2)",
        "rgba(54, 162, 235, 0.2)",
        "rgba(255, 206, 86, 0.2)",
      ],
      borderColor: [
        "rgba(255, 99, 132, 1)",
        "rgba(54, 162, 235, 1)",
        "rgba(255, 206, 86, 1)",
      ],
      borderWidth: 1,
    },
  ],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
};

const PieChart = () => {
  return (
    <ChartsContainer detail={ChartsDetails[2]}>
      <Pie data={pieChartData} options={chartOptions} />
    </ChartsContainer>
  );
};

export default PieChart;
