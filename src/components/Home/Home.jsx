import { MdKeyboardArrowRight } from "react-icons/md";
import AreaChart from "../Charts/AreaChart";
import BarChart from "../Charts/BarChart";
import { ChartShrinkContainer } from "../Charts/ChartsStyled";
import FooterComp from '../FooterComp/FooterComp';
import DataTableEl from '../Tables/DataTable';

import {
  HomeComContainer,
  HomeDashboardHeading,
  DashboardCard,
  LinkBar,
  DashboardCardpHead,
  DashBoardCardHr,
  DashboardCardViewIconCon,
  DashboardCardViewDetail,
  DashboardCardDetailIcon,
  DashBoardUnOrder,
  HomeChartsContainer,
} from "./HomeStyled";

const dashboardCard = [
  { id: 1, display: "Primary Card" },
  { id: 2, display: "Warning Card" },
  { id: 3, display: "Success Card" },
  { id: 4, display: "Danger Card" },
];

const Home = function () {
  return (
    <>
      <HomeComContainer>
        <HomeDashboardHeading>Dashboard</HomeDashboardHeading>
        <LinkBar>Dashboard</LinkBar>
        <DashBoardUnOrder>
          {dashboardCard.map((each) => (
            <DashboardCard key={each.id} bgcolor={each.id}>
              <DashboardCardpHead>{each.display}</DashboardCardpHead>
              <DashBoardCardHr />
              <DashboardCardViewIconCon>
                <DashboardCardViewDetail>View Details</DashboardCardViewDetail>
                <DashboardCardDetailIcon>
                  <MdKeyboardArrowRight size={20} />
                </DashboardCardDetailIcon>
              </DashboardCardViewIconCon>
            </DashboardCard>
          ))}
        </DashBoardUnOrder>
        <HomeChartsContainer>
          <ChartShrinkContainer>
            <AreaChart />
          </ChartShrinkContainer>
          <ChartShrinkContainer>
            <BarChart />
          </ChartShrinkContainer>
        </HomeChartsContainer>
        <DataTableEl />
        <FooterComp />
      </HomeComContainer>
    </>
  );
};

export default Home;
