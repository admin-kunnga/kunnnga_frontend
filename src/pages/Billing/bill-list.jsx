// src/components/filter.
import React, { useMemo } from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


//import components
import Breadcrumbs from '../../components/Common/Breadcrumb';
import TableContainer from '../../components/Common/TableContainer';
import {  Card,CardBody,Col, Container,  Row, Modal, ModalHeader,  ModalBody,  Label,  FormFeedback,  UncontrolledTooltip, Input,  Form, UncontrolledDropdown, DropdownToggle, DropdownItem, DropdownMenu } from "reactstrap";
function BillList() {
  const columns = useMemo(
    () => [
      {
        Header: 'Company Name',
        accessor: 'name',
      },

      {
        Header: 'Payment Status',
        accessor: 'payStatus'
      },


      {
        Header: 'Bill Date',
        accessor: 'startDate'
      },

      
      {
        Header: 'Expiry Date',
        accessor: 'endDate'
      },



      // {
      //     Header: 'Salary',
      //     accessor: 'salary'
      // },
      {
        Header: "Action",
        Cell: (cellProps) => {
          return (
            <UncontrolledDropdown className="text-center">
              <DropdownToggle tag="a" className="card-drop">
                <i className="mdi mdi-dots-horizontal fs-18"></i>
              </DropdownToggle>

              <DropdownMenu className="dropdown-menu-end">

                <DropdownItem onClick={() => {
                  const customerData = cellProps.row.original;
                  handleCustomerClick(customerData);
                }} >
                  <i className="fas fa-eye font-size-16 me-2" id="ViewTooltip"></i>
                  View
                  <UncontrolledTooltip placement="top" target="ViewTooltip">
                    View
                  </UncontrolledTooltip>
                </DropdownItem>

                <DropdownItem
                  onClick={() => {
                    const customerData = cellProps.row.original;
                    handleCustomerClick(customerData);
                  }}  >
                  <i className="fas fa-pen font-size-16 me-2" id="edittooltip"></i>
                  Edit
                  <UncontrolledTooltip placement="top" target="edittooltip">
                    Edit
                  </UncontrolledTooltip>
                </DropdownItem>

                <DropdownItem
                  onClick={() => {
                    const customerData = cellProps.row.original;
                    onClickDelete(customerData);
                  }}>
                  <i className="fas fa-trash-alt font-size-16 me-2" id="deletetooltip"></i>
                  Delete
                  <UncontrolledTooltip placement="top" target="deletetooltip">
                    Delete
                  </UncontrolledTooltip>
                </DropdownItem>
              </DropdownMenu>
            </UncontrolledDropdown>
          );
        },
      },
    ],
    []
  );

  const data = [
    {
      "name": "Jennifer Chang",
      "position": "Regional Director",
      "age": 28,
      "email": "Jennifer@gmail.com",
      "office": "Singapore",
      "startDate": "2010/11/14",
      "endDate": "2020/11/14",

      "payStatus":"Paid",
      "salary": "$357,650"

    },
    {
      "name": "Gavin Joyce",
      "position": "Developer",
      "age": 42,
      "email": "Gavin@gmail.com",
      "office": "Edinburgh",
      "startDate": "2010/12/22",
      "endDate": "2025/01/05",
      "payStatus":"Unpaid",
      "salary": "$92,575"
    },
    {
      "name": "Angelica Ramos",
      "position": "Chief Executive Officer (CEO)",
      "age": 47,
      "email": "Angelica@gmail.com",
      "office": "London",
      "startDate": "2009/10/09",
      "endDate": "2025/01/05",

      "payStatus":"Paid",

      "salary": "$1,200,000"
    },
    {
      "name": "Doris Wilder",
      "position": "Sales Assistant",
      "age": 23,
      "email": "Doris@gmail.com",
      "payStatus":"Unpaid",

      "office": "Sidney",
      "startDate": "2010/09/20",
      "endDate": "2025/01/05",

      "salary": "$85,600"
    },
    {
      "name": "Caesar Vance",
      "position": "Pre-Sales Support",
      "age": 21,
      "email": "Caesar@gmail.com",
      "office": "New York",
      "startDate": "2011/12/12",
      "endDate": "2025/01/05",

      "payStatus":"Paid",

      "salary": "$106,450"
    },
    {
      "name": "Yuri Berry",
      "position": "Chief Marketing Officer (CMO)",
      "age": 40,
      "email": "Yuri@gmail.com",
      "office": "New York",
      "startDate": "2009/06/25",
      "endDate": "2025/01/05",
      "payStatus":"Paid",
      "salary": "$675,000"
    },
    {
      "name": "Jenette Caldwell",
      "position": "Development Lead",
      "age": 30,
      "email": "Jenette@gmail.com",
      "payStatus":"Unpaid",
      "endDate": "2025/01/05",
      
      "office": "New York",
      "startDate": "2011/09/03",
      "salary": "$345,000"
    },
    {
      "name": "Dai Rios",
      "position": "Personnel Lead",
      "age": 35,
      "email": "Dai@gmail.com",
      "office": "Edinburgh",
      "startDate": "2012/09/26",
      "payStatus":"Paid",
      "endDate": "2025/01/05",

      "salary": "$217,500"
    },
    {
      "name": "Bradley Greer",
      "position": "Software Engineer",
      "age": 41,
      "email": "Bradley@gmail.com",
      "payStatus":"Unpaid",
      "endDate": "2025/01/05",

      "office": "London",
      "startDate": "2012/10/13",
      "salary": "$132,000"
    },
    {
      "name": "Gloria Little",
      "position": "Systems Administrator",
      "age": 59,
      "email": "Gloria@gmail.com",
      "office": "New York",
      "startDate": "2009/04/10",
      "payStatus":"Paid",
      "endDate": "2025/01/05",

      "salary": "$237,500"
    },
    {
      "name": "Paul Byrd",
      "position": "Chief Financial Officer (CFO)",
      "age": 64,
      "email": "Paul@gmail.com",
      "endDate": "2025/01/05",

      "office": "New York",
      "startDate": "2010/06/09",
      "payStatus":"Paid",

      "salary": "$725,000"
    },
    {
      "name": "Michael Silva",
      "position": "Marketing Designer",
      "age": 66,
      "email": "Michael@gmail.com",
      "payStatus":"Unpaid",
      "endDate": "2025/01/05",

      "office": "London",
      "startDate": "2012/11/27",
      "salary": "$198,500"
    },
    {
      "name": "Tatyana Fitzpatrick",
      "position": "Regional Director",
      "age": 19,
      "office": "London",
      "startDate": "2010/03/17",
      "payStatus":"Paid",
      "endDate": "2025/01/05",

      "salary": "$385,750"
    },
    {
      "name": "Haley Kennedy",
      "position": "Senior Marketing Designer",
      "age": 43,
      "email": "Haley@gmail.com",
      "payStatus":"Unpaid",
      "endDate": "2025/01/05",

      "office": "London",
      "startDate": "2012/12/18",
      "salary": "$313,500"
    },
    {
      "name": "Charde Marshall",
      "position": "SRegional Director",
      "age": 36,
      "email": "Charde@gmail.com",
      "payStatus":"Paid",
      "endDate": "2025/01/05",

      "office": "San Francisco",
      "startDate": "2008/10/16",
      "salary": "$470,600"
    },
    {
      "name": "Quinn Flynn",
      "position": "Support Lead",
      "age": 22,
      "email": "Quinn@gmail.com",
      "payStatus":"Paid",
      "endDate": "2025/01/05",

      "office": "Edinburgh",
      "startDate": "2013/03/03",
      "salary": "$342,000"
    },
    {
      "name": "Jena Gaines",
      "position": "Office Manager",
      "age": 30,
      "email": "Jena@gmail.com",
      "payStatus":"Unpaid",
      "endDate": "2025/01/05",

      "office": "London",
      "startDate": "2008/12/19",
      "salary": "$90,560"
    },
    {
      "name": "Sonya Frost",
      "position": "Software Engineer",
      "age": 23,
      "email": "Sonya@gmail.com",
      "payStatus":"Paid",
      "endDate": "2025/01/05",

      "office": "Edinburgh",
      "startDate": "2008/12/13",
      "salary": "$103,600"
    },
    {
      "name": "Colleen Hurst",
      "position": "Javascript Developer",
      "age": 39,
      "email": "Colleen@gmail.com",
      "payStatus":"Unpaid",
      "endDate": "2025/01/05",

      "office": "San Francisco",
      "startDate": "2009/09/15",
      "salary": "$205,500"
    },
    {
      "name": "Rhona Davidson",
      "position": "Integration Specialist",
      "age": 55,
      "email": "Rhona@gmail.com",
      "payStatus":"Paid",
      "endDate": "2025/01/05",

      "office": "Tokyo",
      "startDate": "2010/10/14",
      "salary": "$327,900"
    },
    {
      "name": "Herrod Chandler",
      "position": "Sales Assistant",
      "age": 59,
      "email": "Herrod@gmail.com",
      "payStatus":"Unpaid",
      "endDate": "2025/01/05",

      "office": "San Francisco",
      "startDate": "2012/08/06",
      "salary": "$137,500"
    },
    {
      "name": "Brielle Williamson",
      "position": "Integration Specialist",
      "age": 62,
      "email": "Brielle@gmail.com",
      "payStatus":"Paid",
      "endDate": "2025/01/05",

      "office": "New York",
      "startDate": "2012/12/02",
      "salary": "$372,000"
    },
    {
      "name": "Airi Satou",
      "position": "Accountant",
      "age": 33,
      "email": "Airi@gmail.com",
      "payStatus":"Unpaid",
      "endDate": "2025/01/05",

      "office": "Tokyo",
      "startDate": "2008/11/28",
      "salary": "$162,700"
    },
    {
      "name": "Cedric Kelly",
      "position": "Senior Javascript Developer",
      "age": 22,
      "email": "Cedric@gmail.com",
      "payStatus":"Paid",
      "endDate": "2025/01/05",

      "office": "Edinburgh",
      "startDate": "2012/03/29",
      "salary": "$433,060"
    },
    {
      "name": "Ashton Cox",
      "position": "Junior Technical Author",
      "age": 66,
      "email": "Ashton@gmail.com",
      "payStatus":"Unpaid",
      "endDate": "2025/01/05",

      "office": "San Francisco",
      "startDate": "2009/01/12",
      "salary": "$86,000"
    },
    {
      "name": "Garrett Winters",
      "position": "Accountant",
      "age": 63,
      "email": "Garrett@gmail.com",
      "payStatus":"Paid",
      "endDate": "2025/01/05",

      "office": "Tokyo",
      "startDate": "2011/07/25",
      "salary": "$170,750"
    },
    {
      "name": "Tiger Nixon",
      "position": "System Architect",
      "age": 61,
      "email": "Tiger@gmail.com",
      "payStatus":"Unpaid",
      "endDate": "2025/01/05",

      "office": "Edinburgh",
      "startDate": "2011/04/25",
      "salary": "$320,800"
    },
  ];

  //meta title
  document.title = "Billing List | Kunnga";

  return (
    <div className="page-content">
      <div className="container-fluid">
        <Breadcrumbs title="Billing" breadcrumbItem="Billing List" />

        <Card>
          <CardBody>

            <TableContainer
              columns={columns}
              data={data}
              isGlobalFilter={true}
              isAddOptions={false}
              customPageSize={10}
              className="custom-header-css"
            />
          </CardBody>

        </Card>


      </div>
    </div>
  );
}
BillList.propTypes = {
  preGlobalFilteredRows: PropTypes.any,

};


export default BillList;