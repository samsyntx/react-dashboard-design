import {
  MainCommonHeading,
  CommonPathPara,
  ContainerCommonDetail,
  CommonDetailSpan,
  CommonComContainer,
  LinkStyledCommon,ReactFraStyled
} from "./CommonStyled";
import FooterComp from "../FooterComp/FooterComp";

const StaticPage = () => {
  return (
    <ReactFraStyled>
      <CommonComContainer>
        <MainCommonHeading>Static Navigartion</MainCommonHeading>
        <CommonPathPara>
          <LinkStyledCommon to="/">Dashboard</LinkStyledCommon> / Static
          Navigation
        </CommonPathPara>
        <ContainerCommonDetail>
          This page is an example of using static navigation. By removing the{" "}
          <CommonDetailSpan>.sb-nav-fixed</CommonDetailSpan> class from the{" "}
          <CommonDetailSpan>body</CommonDetailSpan> , the top navigation and
          side navigation will become static on scroll. Scroll down this page to
          see an example.
        </ContainerCommonDetail>
      </CommonComContainer>
      <FooterComp />
    </ReactFraStyled>
  );
};

export default StaticPage;
