import React, { useState } from "react";
import ReactDataGrid from "@inovua/reactdatagrid-community";
import "@inovua/reactdatagrid-community/theme/green-dark.css";
import "@inovua/reactdatagrid-community/base.css";
import "@inovua/reactdatagrid-community/index.css";
//import Button from "@inovua/reactdatagrid-community/packages/Button";
import { JsonToTable } from "react-json-to-table";
import { Heading, Stack, Button, useBreakpointValue } from '@chakra-ui/react'
const BACKEND_URL = process.env.REACT_APP_PYTHON_BACKEND_URL;
const gridStyle = { height: 1100 };

const columns = [
  { name: "_id", defaultVisible: false },
  { name: "firstName", defaultWidth: 250, header: "First Name" },
  { name: "lastName", defaultWidth: 250, header: "Last Name" },
  { name: "email", defaultWidth: 250, header: "Email" },
  { name: "phone", defaultWidth: 250, header: "Phone" },
  { name: "emergencyFirstName", defaultWidth: 250, header: "Emergency First Name" },
  { name: "emergencyLastName", defaultWidth: 250, header: "Emergency Last Name" },
  { name: "emergencyPhone", defaultWidth: 250, header: "Emergency Phone" },
  { name: "services", defaultWidth: 500, header: "Services" },
  { name: "times", defaultWidth: 500, header: "Times" },
  { name: "languages", defaultWidth: 500, header: "Languages" },
  { name: "notes", defaultWidth: 250, header: "Notes" },
];

const filterValue = [
  { name: "firstName", operator: "startsWith", type: "string", value: "" },
  { name: "lastName", operator: "startsWith", type: "string", value: "" },
  { name: "email", operator: "startsWith", type: "string", value: "" },
  { name: "phone", operator: "startsWith", type: "string", value: "" },
  {
    name: "emergencyFirstName",
    operator: "startsWith",
    type: "string",
    value: "",
  },
  {
    name: "emergencyLastName",
    operator: "startsWith",
    type: "string",
    value: "",
  },
  { name: "emergencyPhone", operator: "startsWith", type: "string", value: "" },
  { name: "services", operator: "contains", type: "string", value: "" },
  { name: "times", operator: "contains", type: "string", value: "" },
  { name: "languages", operator: "contains", type: "string", value: "" },
  { name: "notes", operator: "contains", type: "string", value: "" },
];

const DonationsTable = ({ data }) => {
  const donations = data.donations
  const registers = data.registers

  const [tableview, switchTableView] = useState(false);
  const [rowData, switchDataView] = useState(donations);
  const [dataType, switchDataType] = useState(false);

  var exportExcel = (dataType) => {
    console.log(dataType)
    window.open(`${BACKEND_URL}/getData?dataType=${dataType}`);
  };


  const changeTableView = () => {
    switchTableView(!tableview);
  };

  const changeDataView = () => {
    if (dataType === false) {
      switchDataView(registers);
      switchDataType(true);
    }
    else if (dataType === true) {
      switchDataView(donations);
      switchDataType(false);
    }

  };

  donations.forEach(donation => {
    delete donation._id
    delete donation.__v
  });

  registers.forEach(register => {
    delete register._id
    delete register.__v
  });

  return (
    <div>
      {dataType ?
        <Heading textAlign={"center"} pt={6}>
          Register Dashboard
        </Heading>
        :
        <Heading textAlign={"center"} pt={6}>
          Idara Dashboard
        </Heading>
        }
      <br></br>
      <Stack justify={"center"} p={1} direction={useBreakpointValue({ base: 'column', md: 'row' })}>
        <Button onClick={changeTableView}>
          Change View
        </Button>
        <Button onClick={changeDataView}>
          Check Other Database
        </Button>
        <Button onClick={() => exportExcel("donations")}>
          Export Idara Data
        </Button>
        <Button onClick={() => exportExcel("registers")}>
          Export Register Data
        </Button>
        <Button onClick={() => exportExcel("all")}>
          Export All Data
        </Button>
      </Stack>
      <br></br>
      {tableview ?
        <div>
          <JsonToTable json={rowData} />
        </div>
        :
        <ReactDataGrid
          theme="green-dark"
          idProperty="_id"
          style={gridStyle}
          columns={columns}
          dataSource={rowData}
          defaultFilterValue={filterValue}
        />}
    </div>
  );
};
export default DonationsTable;