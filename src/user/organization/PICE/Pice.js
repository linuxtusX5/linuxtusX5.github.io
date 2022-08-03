import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

import "../org.css";
import PiceALL from "./PiceALL";
import BsceRow from "./BSCE/Bsce-Row";
import DcetRow from "./DCET/Dcet-Row";
function Pasoa() {
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
              <Nav.Link eventKey="first">ALL PICE</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">BSCE</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="third">DCET</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <PiceALL />
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <BsceRow/>
            </Tab.Pane>
            <Tab.Pane eventKey="third">
              <DcetRow/>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default Pasoa;
