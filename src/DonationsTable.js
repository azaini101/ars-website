import React, { useState, useEffect } from "react";
import ReactDataGrid from "@inovua/reactdatagrid-community";
import "@inovua/reactdatagrid-community/theme/green-dark.css";
import "@inovua/reactdatagrid-community/base.css";
import "@inovua/reactdatagrid-community/index.css";
//import Button from "@inovua/reactdatagrid-community/packages/Button";
import { JsonToTable } from "react-json-to-table";
import { Heading, Stack, Button, useBreakpointValue } from "@chakra-ui/react";
const BACKEND_URL = process.env.REACT_APP_PYTHON_BACKEND_URL;
const gridStyle = { height: 1100 };

const columns = [
  { name: "_id", defaultVisible: false },
  { name: "firstName", defaultWidth: 250, header: "First Name" },
  { name: "lastName", defaultWidth: 250, header: "Last Name" },
  { name: "email", defaultWidth: 250, header: "Email" },
  { name: "phone", defaultWidth: 250, header: "Phone" },
  {
    name: "emergencyFirstName",
    defaultWidth: 250,
    header: "Emergency First Name",
  },
  {
    name: "emergencyLastName",
    defaultWidth: 250,
    header: "Emergency Last Name",
  },
  { name: "emergencyPhone", defaultWidth: 250, header: "Emergency Phone" },
  { name: "services", defaultWidth: 500, header: "Services" },
  { name: "times", defaultWidth: 500, header: "Times" },
  { name: "languages", defaultWidth: 500, header: "Languages" },
  { name: "notes", defaultWidth: 250, header: "Notes" },
  { name: "idaraMember", defaultWidth: 250, header: "Idara Member?" },
  { name: "idaraVisits", defaultWidth: 250, header: "Idara Visits" },
  { name: "faith", defaultWidth: 250, header: "Faith" },
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
  const donations = data.donations.map((e) => {
    delete e._id;
    delete e.__v;
    return e;
  });
  const registers = data.registers.map((e) => {
    delete e._id;
    delete e.__v;
    return e;
  });

  const [tableView, setTableView] = useState(false);

  const [dataRows, setDataRows] = useState({});
  const [dataType, setDataType] = useState(true);

  const exportExcel = (dataType) => {
    window.open(`${BACKEND_URL}/getData?dataType=${dataType}`);
  };

  const changeTableView = () => {
    setTableView(!tableView);
  };

  useEffect(() => {
    if (dataType === false) {
      setDataRows(registers);
    } else if (dataType === true) {
      setDataRows(donations);
    }
  }, [dataType]);

  return (
    <div>
      <Heading textAlign={"center"} pt={6}>
        {dataType ? "Idara Dashboard" : "Register Dashboard"}
      </Heading>
      <br></br>
      <Stack justify={"center"} p={1} direction={useBreakpointValue({ base: 'column', md: 'row' })}>
        <Button onClick={changeTableView}>
          Change View
        </Button>
        <Button onClick={() => exportExcel("donations")}>
          Export All Data
        </Button>
      </Stack>
      <br></br>
      {tableView ? (
        <div>
          <JsonToTable json={dataRows} />
        </div>
      ) : (
        <ReactDataGrid
          theme="green-dark"
          idProperty="_id"
          style={gridStyle}
          columns={columns}
          dataSource={dataRows}
          defaultFilterValue={filterValue}
        />
      )}
    </div>
  );
};
export default DonationsTable;
