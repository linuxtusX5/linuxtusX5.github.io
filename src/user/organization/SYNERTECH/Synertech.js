import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

import "../org.css";
import SynertechRow from "./DOMTLOM/DomtLom-Row";
import SynertechALL from "./SynertechALL";
import DomtMomRow from "./DOMTMOM/DomtMom-Row";
function Synertech() {
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
              <Nav.Link eventKey="first">ALL SYNERTECH</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">DOMT-LOM</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">DOMT-MOM</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <SynertechALL />
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <SynertechRow />
            </Tab.Pane>
            <Tab.Pane eventKey="third">
              <DomtMomRow/>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default Synertech;
