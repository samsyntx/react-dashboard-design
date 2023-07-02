import { AiOutlineAreaChart } from "react-icons/ai";
import {FaChartBar} from 'react-icons/fa'
import {BiSolidPieChartAlt2} from 'react-icons/bi'

const ChartsDetails = [
    {
      id: 1,
      name: "Area Chart Example",
      icon: <AiOutlineAreaChart size={20} />,
      time: "Updated yesterday at 11:59 PM",
      isGrow: true
    },
    {
      id: 2,
      name: "Bar Chart Example",
      icon: <FaChartBar size={20} />,
      time: "Updated yesterday at 11:59 PM",
      isGrow: false
    },
    {
      id: 3,
      name: "Pie Chart Example",
      icon: <BiSolidPieChartAlt2 size={20}/>,
      time: "Updated yesterday at 11:59 PM",
      isGrow: false
    },
  ];

  export default ChartsDetails