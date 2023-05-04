import React, { useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import Select from "react-select";


// ------- Cards Import-------
import Cards from "./card";
import Filters from "./filter";




//Import Breadcrumb
// import Breadcrumbs from "../../components/Common/Breadcrumb";

//Import Components
import CardUser from "./card-user";
import CardWelcome from "./card-welcome";
import MiniWidget from "./mini-widget";
import Earning from "./earning";
import SalesAnalytics from "./sales-analytics";
import TotalSellingProduct from "./total-selling-product";
import Tasks from "./tasks";
import ChatBox from "./chat-box";


// const [selectedGroup, setselectedGroup] = useState(null);

// function handleSelectCountry(selectedGroup) {
//   setselectedGroup(selectedGroup);
// }

// const optionGroup = [
//   {
//     label: "Picnic",
//     options: [
//       { label: "Mustard", value: "Mustard" },
//       { label: "Ketchup", value: "Ketchup" },
//       { label: "Relish", value: "Relish" },
//     ],
//   }
// ];



const DashboardSaas = (props) => {
  const reports = [
    {
      icon: "bx bx-copy-alt",
      title: "Orders",
      value: "1,452",
      badgeValue: "+ 0.2%",
      color: "success",
      desc: "From previous period",
    },
    {
      icon: "bx bx-archive-in",
      title: "Revenue",
      value: "$ 28,452",
      badgeValue: "+ 0.2%",
      color: "success",
      desc: "From previous period",
    },
    {
      icon: "bx bx-purchase-tag-alt",
      title: "Average Price",
      value: "$ 16.2",
      badgeValue: "0%",
      color: "warning",
      desc: "From previous period",
    },
  ];

  //meta title
  document.title = "Kunnga - Enterprise Portal";

  return (
    <React.Fragment>
      <div className="page-content">
        <Container fluid>

          <Row className="mb-3">
            <Col sm={6} md={8} lg={9} xl={10}>
              <h4 className="">Dashboard</h4>
            </Col>
            <Col sm={6} md={4} lg={3} xl={2} className="text-end">
              {/* <Filters /> */}
              {/* <Select
                            value={selectedGroup}
                            onChange={() => {
                              handleSelectGroup();
                            }}
                            options={optionGroup}
                            className="select2-selection"
                          /> */}
              <div className="form-floating">
                <select defaultValue="0" className="form-select">
                  <option>--Select-- </option>
                  <option value="1">India</option>
                  <option value="2">USA</option>
                  <option value="2">UAE</option>
                </select>
                <label htmlFor="floatingSelectGrid"> Country </label>
              </div>

            </Col>
          </Row>


          {/* Render Breadcrumb */}
          {/* <Breadcrumbs title="Dashboards" breadcrumbItem="" /> */}

          {/* Card User */}
          {/* <CardUser /> */}



          {/* --------cards---------- */}
          <Cards />


          <Row>
            {/* welcome card */}
            {/* <CardWelcome /> */}

            <Col xl="8">
              <Row>
                {/*mimi widgets */}
                {/* <MiniWidget reports={reports} /> */}
              </Row>
            </Col>
          </Row>

          <Row>
            {/* earning */}
            {/* <Earning dataColors='["--bs-primary"]' /> */}

            {/* sales anytics */}
            {/* <SalesAnalytics dataColors='["--bs-primary", "--bs-success", "--bs-danger"]' /> */}
          </Row>

          <Row>
            {/* total selling product */}
            {/* <TotalSellingProduct /> */}

            {/* tasks */}
            {/* <Tasks /> */}

            {/* chat box */}
            {/* <ChatBox /> */}
          </Row>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default DashboardSaas;
