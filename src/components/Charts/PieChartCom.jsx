import { PieChart, Pie, Legend, Cell, ResponsiveContainer } from "recharts"

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
  const {height, width} = props
  return (
    <ResponsiveContainer width={width} height={height}>
      <PieChart>
        <Pie
          cx="70%"
          cy="40%"
          data={data}
          startAngle={0}
          endAngle={360}
          innerRadius="40%"
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
    </ResponsiveContainer>
  )
}

export default PieChartCom