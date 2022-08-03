import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

import "../org.css";
import YesALL from "./YesALL";
import BsedRow from "./BSED/Bsed-Row";
import BeedRow from "./BEED/Beed-Row";
function Yes() {
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
              <Nav.Link eventKey="first">ALL YES</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">BSED</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">BEED</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <YesALL/>
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <BsedRow/>
            </Tab.Pane>
            <Tab.Pane eventKey="third">
              <BeedRow/>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default Yes;
