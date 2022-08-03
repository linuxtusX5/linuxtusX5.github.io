import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

import BsbioALL from "./BsbioALL";
import BsbioRow from "./Bsbio-Row";
import "../org.css";

function TabS() {
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
              <Nav.Link eventKey="first">ALL BSBIO</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">BSBIO</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <BsbioALL />
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <BsbioRow />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default TabS;
