import { useMemo } from "react";
import { MaterialReactTable } from "material-react-table";
import { MainContainerTable } from "./StyledTable";
import {
  MainCommonHeading,
  CommonPathPara,
  ContainerCommonDetail,
  CommonComContainer,
  LinkStyledCommon,
} from "../CommonPage/CommonStyled";
import FooterComp from "../FooterComp/FooterComp";

const data = [
  {
    name: "John",
    age: 30,
  },
  {
    name: "Sara",
    age: 25,
  },
];

const Tables = () => {
  const columns = useMemo(
    () => [
      {
        accessorKey: "name", //simple recommended way to define a column
        header: "Name",
        muiTableHeadCellProps: { sx: { color: "green" } }, //custom props
        Cell: ({ renderedCellValue }) => <strong>{renderedCellValue}</strong>, //optional custom cell render
      },
      {
        accessorFn: (row) => row.age, //alternate way
        id: "age", //id required if you use accessorFn instead of accessorKey
        header: "Age",
        Header: <i style={{ color: "red" }}>Age</i>, //optional custom markup
      },
    ],
    []
  );

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
      <MainContainerTable>
        <MaterialReactTable columns={columns} data={data} />
      </MainContainerTable>
      <FooterComp />
    </>
  );
};

export default Tables;
