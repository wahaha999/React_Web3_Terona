import React from "react";
import DataTable, { TableProps, TableStyles } from "react-data-table-component";
import { Form } from "react-bootstrap-v5";

const customStyles: TableStyles = {
  headRow: {
    style: {
      borderBottomStyle: "dashed",
      borderBottomColor: "#eff2f5",
      color: "#73738c !important",
      textTransform: "uppercase",
      fontWeight: "600 !important",
    },
  },
  headCells: {
    style: {
      padding: "1.25rem 0",
      "&:last-of-type": {
        justifyContent: "flex-end",
      },
    },
  },
  rows: {
    style: {
      borderBottomStyle: "dashed",
      borderBottomColor: "#eff2f5",
      "&:last-of-type": {
        border: "none",
      },
    },
  },
  cells: {
    style: {
      padding: "1.25rem 0",
      maxWidth: "200px !important",
      "&:last-of-type": {
        justifyContent: "flex-end",
      },
    },
  },
  pagination: {
    style: {
      border: "none",
      justifyContent: "flex-start",
      "& > span:first-child": {
        display: "none",
      },
      "& > div": {
        "& > select": {
          backgroundColor: "#f5f8fa",
          padding: "6px 40px 6px 10px",
          borderRadius: ".475rem",
          "&:focus-visible": {
            outline: "none",
          },
        },
        "& > svg": {
          top: "6px",
        },
      },
      "& > div:last-child": {
        position: "absolute",
        right: "0",
      },
    },
  },
};

const CustomCheckbox = React.forwardRef((props: any, ref: any) => {
  return (
    <Form.Check
      ref={ref}
      className="form-check form-check-sm form-check-custom form-check-solid"
      {...props}
    ></Form.Check>
  );
});

function DataTableBase<T>(props: TableProps<T>): JSX.Element {
  return (
    <DataTable
      pagination
      selectableRows
      customStyles={customStyles}
      selectableRowsComponent={CustomCheckbox}
      progressComponent={
        <span className="p-4">
          Loading...
          <span className="spinner-border spinner-border-sm align-middle ms-2"></span>
        </span>
      }
      dense
      {...props}
    />
  );
}

export default DataTableBase;
