import React, { useEffect, useMemo, useState } from 'react';
import TableContainer from "../../../Components/Common/TableContainerReactTable";
import { Link } from 'react-router-dom';
import { Spinner } from 'reactstrap';



const PaginationTable = () => {
  const paginationTable =
    [{ id: "#VL2111", name: "Jonathan", date: "07 Oct, 2021", total: "$24.05", status: "Paid" },
    { id: "#VL2110", name: "Harold", date: "07 Oct, 2021", total: "$26.15", status: "Paid" },
    { id: "#VL2109", name: "Shannon", date: "06 Oct, 2021", total: "$21.25", status: "Refund" },
    { id: "#VL2108", name: "Robert", date: "05 Oct, 2021", total: "$25.03", status: "Paid" },
    { id: "#VL2107", name: "Noel", date: "05 Oct, 2021", total: "$22.61", status: "Paid" },
    { id: "#VL2106", name: "Traci", date: "04 Oct, 2021", total: "$24.05", status: "Paid" },
    { id: "#VL2105", name: "Kerry", date: "04 Oct, 2021", total: "$26.15", status: "Paid" },
    { id: "#VL2104", name: "Patsy", date: "04 Oct, 2021", total: "$21.25", status: "Refund" },
    { id: "#VL2103", name: "Cathy", date: "03 Oct, 2021", total: "$22.61", status: "Paid" },
    { id: "#VL2102", name: "Tyrone", date: "03 Oct, 2021", total: "$25.03", status: "Paid" }]

  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: (cellProps) => {
          return (
            <Link to="#" className="fw-medium">{cellProps.id}</Link>
          )
        },
        disableFilters: true,
        filterable: false,
      },

      {
        Header: "Name",
        accessor: "name",
        disableFilters: true,
        filterable: false,
      },
      {
        Header: "Date",
        accessor: "date",
        disableFilters: true,
        filterable: false,
      },
      {
        Header: "Total",
        accessor: "total",
        disableFilters: true,
        filterable: false,
      },
      {
        Header: "Status",
        disableFilters: true,
        filterable: true,
        accessor: (cellProps) => {
          switch (cellProps.status) {
            case "Paid":
              return (<span className="badge bg-success-subtle text-success text-uppercase"> {cellProps.status}</span>)
            case "Refund":
              return (<span className="badge bg-warning-subtle  text-warning text-uppercase"> {cellProps.status}</span>)
            default:
              return (<span className="badge bg-danger-subtle  text-danger text-uppercase"> {cellProps.status}</span>)
          }
        },
      },
      {
        Header: "Actions",
        disableFilters: true,
        filterable: true,
        accessor: (cellProps) => {
          return (
            <React.Fragment>
              Details
            </React.Fragment>
          )
        },
      },
    ],
    []
  );

  return (
    <React.Fragment >
      <TableContainer
        columns={(columns || [])}
        data={(paginationTable || [])}
        isPagination={true}
        // isGlobalFilter={false}
        iscustomPageSize={false}
        isBordered={false}
        customPageSize={5}
        className="custom-header-css table align-middle table-nowrap"
        tableClassName="table-centered align-middle table-nowrap mb-0"
        theadClassName="text-muted table-light"
        SearchPlaceholder='Search Products...'
      />
    </React.Fragment >
  );
};

const SearchTable = () => {
  const searchTable =
    [
     
    ]

  const columns = useMemo(
    () => [
      {
        Header: "ID",
        accessor: (cellProps) => {
          return (
            <span className="fw-semibold">{cellProps.id}</span>
          )
        },
        disableFilters: true,
        filterable: false,
      },

      {
        Header: "Name",
        accessor: "name",
        disableFilters: true,
        filterable: false,
      },
      {
        Header: "Email",
        accessor: "email",
        disableFilters: true,
        filterable: false,
      },
      {
        Header: "Designation",
        accessor: "designation",
        disableFilters: true,
        filterable: false,
      },
      {
        Header: "Company",
        accessor: "company",
        disableFilters: true,
        filterable: false,
      },
      {
        Header: "Location",
        accessor: "location",
        disableFilters: true,
        filterable: false,
      }
    ],
    []
  );

  return (
    <React.Fragment >
      <TableContainer
        columns={(columns || [])}
        data={(searchTable || [])}
        isPagination={true}
        isGlobalFilter={true}
        iscustomPageSize={false}
        isBordered={false}
        customPageSize={5}
        className="custom-header-css table align-middle table-nowrap"
        tableClassName="table-centered align-middle table-nowrap mb-0"
        theadClassName="text-muted table-light"
        SearchPlaceholder='Search...'
      />
    </React.Fragment >
  );
};



const LoadingStateTable = () => {

  const [display, setDisplay] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setDisplay(true)
    }, 3000);
  }, [])

  const loadingStateTable =
    [
     
    ]

  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
        disableFilters: true,
        filterable: true,
      },
      {
        Header: "Email",
        accessor: "email",
        disableFilters: true,
        filterable: true,
      },
      {
        Header: "Designation",
        accessor: "designation",
        disableFilters: true,
        filterable: true,
      },
      {
        Header: "Company",
        accessor: "company",
        disableFilters: true,
        filterable: true,
      },
      {
        Header: "Location",
        accessor: "location",
        disableFilters: true,
        filterable: true,
      }
    ],
    []
  );

  return (
    <React.Fragment >
      {display ? <TableContainer
        columns={(columns || [])}
        data={(loadingStateTable || [])}
        isPagination={true}
        // isGlobalFilter={false}
        iscustomPageSize={false}
        isBordered={false}
        customPageSize={5}
        className="custom-header-css table align-middle table-nowrap"
        tableClassName="table-centered align-middle table-nowrap mb-0"
        theadClassName="text-muted table-light"
        SearchPlaceholder='Search Products...'
      /> : <div className="text-center"><Spinner animation="border" variant="primary" /></div>}
    </React.Fragment >
  );
};

const HiddenColumns = () => {
  const sortingTable =
    [
     
    ]

  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
        disableFilters: true,
        filterable: true,
      },
      {
        Header: "Email",
        accessor: "email",
        disableFilters: true,
        filterable: true,
      },
      {
        Header: "Designation",
        accessor: "designation",
        disableFilters: true,
        filterable: true,
      },
      {
        Header: "Company",
        accessor: "company",
        disableFilters: true,
        filterable: true,
      }
    ],
    []
  );

  return (
    <React.Fragment >
      <TableContainer
        columns={(columns || [])}
    
        isPagination={true}
        // isGlobalFilter={false}
        iscustomPageSize={false}
        isBordered={false}
        customPageSize={5}
        className="custom-header-css table align-middle table-nowrap"
        tableClassName="table-centered align-middle table-nowrap mb-0"
        theadClassName="text-muted table-light"
        SearchPlaceholder='Search Products...'
      />
    </React.Fragment >
  );
};

export {  PaginationTable, SearchTable,  LoadingStateTable, HiddenColumns };