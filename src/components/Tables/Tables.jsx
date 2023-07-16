import {
  MainCommonHeading,
  CommonPathPara,
  ContainerCommonDetail,
  CommonComContainer,
  LinkStyledCommon,
} from "../CommonPage/CommonStyled";
import FooterComp from "../FooterComp/FooterComp";
import DataTableEl from "./DataTable";

const Tables = () => {
  return (
    <>
      <CommonComContainer>
        <MainCommonHeading>Tables</MainCommonHeading>
        <CommonPathPara>
          <LinkStyledCommon to="/">Dashboard</LinkStyledCommon> / Tables
        </CommonPathPara>
        <ContainerCommonDetail>
          DataTables is a third party plugin that is used to generate the demo
          table below. For more information about DataTables, please visit the
          official{" "}
          <LinkStyledCommon
            to="#"
            onClick={() =>
              window.open("https://datatables.net/", "_blank")
            }
          >
            DataTables documentation.
          </LinkStyledCommon>
        </ContainerCommonDetail>
      </CommonComContainer>

      <DataTableEl />
      
      <FooterComp />
    </>
  );
};

export default Tables;
