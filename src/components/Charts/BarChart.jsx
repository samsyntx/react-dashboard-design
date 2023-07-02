import { Bar } from "react-chartjs-2";
import Chart from "chart.js/auto";
import ChartsDetails from "./ChartsDetails";
import ChartsContainer from "./ChartsContainer";

const barChartData = {
  labels: ["Label 1", "Label 2", "Label 3"],
  datasets: [
    {
      label: "Bar Chart",
      data: [50, 70, 40],
      backgroundColor: "rgba(54, 162, 235, 0.2)",
      borderColor: "rgba(54, 162, 235, 1)",
      borderWidth: 1,
    },
  ],
};

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
};

const BarChart = () => {
  return (
    <ChartsContainer detail={ChartsDetails[1]}>
      <Bar data={barChartData} options={chartOptions} />
    </ChartsContainer>
  );
};

export default BarChart;
