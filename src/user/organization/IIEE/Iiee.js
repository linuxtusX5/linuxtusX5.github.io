import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

import "../org.css";
import IieeRow from "./Iiee-Row"
import IieeALL from "./IieeALL";
import DeetRow from "./DEET/Deet-Row"
function Iiee() {
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
              <Nav.Link eventKey="first">ALL IIEE</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">BSEE</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">DEET</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <IieeALL />
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <IieeRow />
            </Tab.Pane>
            <Tab.Pane eventKey="third">
              <DeetRow />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default Iiee;
