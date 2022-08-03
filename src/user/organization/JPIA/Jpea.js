import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

import JpiaRow from "./Jpia-Row";
import JpiaALL from "./jpiaALL";
import "../org.css";

function Jpea() {
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
              <Nav.Link eventKey="first">ALL JPIA</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">BSA</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <JpiaALL/>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <JpiaRow />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default Jpea;
