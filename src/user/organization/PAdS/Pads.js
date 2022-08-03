import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

import "../org.css";
import PadsALL from "./PadsALL";
import PadsRow from "./Pads-Row";
function Pads() {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row className="rows">
        <Col sm={2}>
          <Nav
            variant="pills"
            className="flex-column"
            style={{ cursor: "pointer" }}
          >
            <Nav.Item>
              <Nav.Link eventKey="first">ALL PAdS</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">BPA</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <PadsALL/>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <PadsRow/>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default Pads;
