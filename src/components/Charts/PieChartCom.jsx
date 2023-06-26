import { PieChart, Pie, Legend, Cell} from "recharts"

const data = [
  {
    count: 809680,
    language: "Telugu",
  },
  {
    count: 4555697,
    language: "Hindi",
  },
  {
    count: 12345657,
    language: "English",
  },
]

const PieChartCom = (props) => {
  const { height, width } = props
  return (
    <PieChart width={width} height={height}>
      <Pie
        cx="40%"
        cy="40%"
        data={data}
        startAngle={0}
        endAngle={360}
        innerRadius="30%"
        outerRadius="70%"
        dataKey="count"
      >
        <Cell name="Telugu" fill="#fecba6" />
        <Cell name="Hindi" fill="#b3d23f" />
        <Cell name="English" fill="#a44c9e" />
      </Pie>
      <Legend
        iconType="circle"
        layout="vertical"
        verticalAlign="middle"
        align="right"
      />
    </PieChart>
  )
}

export default PieChartCom