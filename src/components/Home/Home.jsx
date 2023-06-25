import { MdKeyboardArrowRight } from "react-icons/md";

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
} from "./HomeStyled";

const dashboardCard = [
  { id: 1, display: "Primary Card" },
  { id: 2, display: "Warning Card" },
  { id: 3, display: "Success Card" },
  { id: 4, display: "Danger Card" },
];

const Home = function () {
  return (
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
                <MdKeyboardArrowRight size={20}/>
              </DashboardCardDetailIcon>
            </DashboardCardViewIconCon>
          </DashboardCard>
        ))}
      </DashBoardUnOrder>
    </HomeComContainer>
  );
};

export default Home;
