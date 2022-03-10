import React, { useState } from "react";
import ReactDataGrid from "@inovua/reactdatagrid-community";
import "@inovua/reactdatagrid-community/theme/green-dark.css";
import "@inovua/reactdatagrid-community/base.css";
import "@inovua/reactdatagrid-community/index.css";
import Button from "@inovua/reactdatagrid-community/packages/Button";

const gridStyle = { height: 1100 };

const downloadBlob = (blob, fileName = "grid-data.csv") => {
  const link = document.createElement("a");
  const url = URL.createObjectURL(blob);

  link.setAttribute("href", url);
  link.setAttribute("download", fileName);
  link.style.position = "absolute";
  link.style.visibility = "hidden";

  document.body.appendChild(link);

  link.click();

  document.body.removeChild(link);
};

const SEPARATOR = ",";

const columns = [
  { name: "_id", defaultVisible: false},
  { name: "firstName", defaultWidth: 250, header:"First Name"},
  { name: "lastName", defaultWidth: 250, header:"Last Name"},
  { name: "email", defaultWidth: 250, header:"Email"},
  { name: "phone", defaultWidth: 250, header:"Phone"},
  { name: "emergencyFirstName", defaultWidth: 250, header: "Emergency First Name"},
  { name: "emergencyLastName", defaultWidth: 250, header: "Emergency Last Name"},
  { name: "emergencyPhone", defaultWidth: 250, header:"Emergency Phone"},
  { name: "services", defaultWidth: 500, header:"Services"},
  { name: "times", defaultWidth: 500, header:"Times"},
  { name: "languages", defaultWidth: 500, header:"Languages"},
  { name: "notes", defaultWidth: 250, header:"Notes"},
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

const DonationsTable = ({ donations }) => {
  const [gridRef, setGridRef] = useState(null);
  const exportCSV = () => {
    const columnNames = gridRef.current.visibleColumns.map(
      (column) => column.header
    );

    const columnIds = gridRef.current.visibleColumns.map((column) => column.id);

    const rows = gridRef.current.data.map((row) =>
      columnIds
        .map((column) => {
          if (column === "services") {
            return `"${row[column]}"`;
          } else {
            return row[column];
          }
        })
        .join(SEPARATOR)
    );

    const header = columnNames.join(SEPARATOR);
    const contents = [header].concat(rows).join("\n");
    const blob = new Blob([contents], { type: "text/csv;charset=utf-8;" });

    downloadBlob(blob);
  };

  const rowData = donations;

  return (
    <>
      <ReactDataGrid
        handle={setGridRef}
        theme="green-dark"
        idProperty="_id"
        style={gridStyle}
        columns={columns}
        dataSource={rowData}
        defaultFilterValue={filterValue}
      />
      <Button style={{ marginTop: 20 }} onClick={exportCSV}>
        Export CSV
      </Button>
    </>
  );
};

export default DonationsTable;
