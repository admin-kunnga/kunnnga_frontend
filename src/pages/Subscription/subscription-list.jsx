// src/components/filter.
import React, { useMemo } from "react";
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";


//import components
import Breadcrumbs from '../../components/Common/Breadcrumb';
import TableContainer from '../../components/Common/TableContainer';
import {
  Card,
  CardBody,
  Col,
  Container,
  Row,
  Modal,
  ModalHeader,
  ModalBody,
  Label,
  FormFeedback,
  UncontrolledTooltip,
  Input,
  Form,
} from "reactstrap";
function SubscriptionList() {
  const columns = useMemo(
    () => [
      {
        Header: 'Name',
        accessor: 'name',
      },
      {
        Header: 'Category',
        accessor: 'type'
      },
      {
        Header: 'Status',
        accessor: 'PlansStatus', 
      },
      {
        Header: "Action",
        Cell: (cellProps) => {
          return (
            <div className="d-flex gap-3">
              <Link
                to="#"
                className="text-primary"
              >
                <i className="fas fa-eye font-size-16" id="viewtooltip" />
                <UncontrolledTooltip placement="top" target="viewtooltip">
                  View
                </UncontrolledTooltip>
              </Link>
              <Link
                to="#"
                className="text-success"
                onClick={() => {
                  const userData = cellProps.row.original;
                  handleUserClick(userData);
                }}
              >
                <i className="fas fa-pen font-size-16" id="edittooltip" />
                <UncontrolledTooltip placement="top" target="edittooltip">
                  Edit
                </UncontrolledTooltip>
              </Link>

              <Link
                to="#"
                className="text-danger"
                onClick={() => {
                  const userData = cellProps.row.original;
                  onClickDelete(userData);
                }}
              >
                <i className="fas fa-trash-alt  font-size-16" id="deletetooltip" />
                <UncontrolledTooltip placement="top" target="deletetooltip">
                  Delete
                </UncontrolledTooltip>
              </Link>

            </div>
          );
        },
      },
    ],
    []
  );

 

  const data = [
    {
      "name": "Subscription One",
      "type": "Platinum",
      "pricing": "$1000",
      "PlansStatus": "Inactive"
    },
    {
      "name": "Subscription Two",
      "type": "Gold",
      "pricing": "$800",
      "PlansStatus": "Active"

    },
    {
      "name": "Subscription Three",
      "type": "Silver",
      "pricing": "$500",
      "PlansStatus": "Inactive"

    },
    {
      "name": "Subscription Three",
      "type": "Bronze",
      "pricing": "$300",
      "PlansStatus": "Inactive"

    },
  ];

  //meta title
  document.title = "Subscription Plans | Kunnga";

  return (
    <div className="page-content">
      <div className="container-fluid">
        <Breadcrumbs title="Subscription Management" breadcrumbItem="Plans" />


        <Card>
          <CardBody>
            <Row>
              <col>

              </col>
            </Row>
          </CardBody>
        </Card>


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
SubscriptionList.propTypes = {
  preGlobalFilteredRows: PropTypes.any,

};


export default SubscriptionList;