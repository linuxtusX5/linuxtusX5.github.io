import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

import "../org.css";
import JmeALL from "./JmeALL";
import JmeRow from "./Jme-Row";
function Jme() {
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
              <Nav.Link eventKey="first">ALL JME</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">BSBA</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <JmeALL/>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <JmeRow/>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default Jme;
