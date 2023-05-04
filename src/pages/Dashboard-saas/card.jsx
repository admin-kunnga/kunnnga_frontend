import React, { useState } from "react"
import {
    Row,
    Col,
    Card,
    CardBody,
} from "reactstrap";


const reports = [
    { title: "Number of Properties", iconClass: "bx-copy-alt", description: "1,235" },
    { title: "Number of Units ", iconClass: "bx-archive-in", description: "2566" },
    { title: "Number of Customers",  iconClass: "bx-purchase-tag-alt",  description: "48566",},
];

function Cards(props) {
    return (
        <React.Fragment>

            <Row>
                {reports.map((report, key) => (
                    <Col md="4" lg="3" key={"_col_" + key}>
                        <Card className="mini-stats-wid">
                            <CardBody>
                                <div className="d-flex">
                                    <div className="flex-grow-1">
                                        <p className="text-muted fw-medium">
                                            {report.title}
                                        </p>
                                        <h4 className="mb-0">{report.description}</h4>
                                    </div>
                                    <div className="avatar-sm rounded-circle bg-primary align-self-center mini-stat-icon">
                                        <span className="avatar-title rounded-circle bg-primary">
                                            <i
                                                className={
                                                    "bx " + report.iconClass + " font-size-24"
                                                }
                                            ></i>
                                        </span>
                                    </div>
                                </div>
                            </CardBody>
                        </Card>
                    </Col>
                ))}
            </Row>

        </React.Fragment>
    )
}


export default Cards
