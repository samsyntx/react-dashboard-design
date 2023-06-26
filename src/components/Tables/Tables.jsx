import { useMemo } from 'react'
import {
    MaterialReactTable,
} from 'material-react-table';
import { MainContainerTable } from './StyledTable'

const data = [
    {
        name: 'John',
        age: 30,
    },
    {
        name: 'Sara',
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
            Cell: ({ renderedCellValue }) => <strong>{renderedCellValue}</strong> //optional custom cell render
          },
          {
            accessorFn: (row) => row.age, //alternate way
            id: "age", //id required if you use accessorFn instead of accessorKey
            header: "Age",
            Header: <i style={{ color: "red" }}>Age</i> //optional custom markup
          }
        ],
        []
      );


    return (
        <MainContainerTable>
            <MaterialReactTable columns={columns} data={data} />
        </MainContainerTable>
    )
}

export default Tables