import React from "react";
import { Box } from "@chakra-ui/react";
import { DataGrid } from "@material-ui/data-grid";

const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "firstName",
    headerName: "First name",
    width: 150,
    editable: true,
  },
  {
    field: "lastName",
    headerName: "Last name",
    width: 150,
  },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 110,
  },
];

const DonationsTable = ({ donations }) => {
  const columns = [
    { field: "id", headerName: "ID" },
    { field: "firstName", headerName: "First Name", width: 150 },
    { field: "lastName", headerName: "Last Name", width: 150 },
    { field: "email", headerName: "Email", width: 250 },
    { field: "phone", headerName: "Phone", width: 150 },
    { field: "languages", headerName: "Languages", width: 200 },
    { field: "services", headerName: "Services", width: 550 },
    { field: "description", headerName: "Description", width: 350 },
  ];

  const rows = donations.map((donation) => {
    return {
      ...donation,
      id: donation._id,
      services: donation.services.join(", "),
      languages: donation.languages.join(", "),
    };
  });

  return (
    <Box px={4} backgroundColor={"white"}>
      table
      {/* {JSON.stringify(donations)} */}
      {/* <DataGrid columns={columns} rows={rows} /> */}
      <div style={{ height: 800 }}>
        <DataGrid
          rows={rows}
          columns={columns}
          pageSize={5}
          rowsPerPageOptions={[5]}
          autoPageSize
        />
      </div>
    </Box>
  );
};

export default DonationsTable;
