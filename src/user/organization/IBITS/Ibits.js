import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Row from "react-bootstrap/Row";
import Tab from "react-bootstrap/Tab";

import DICT from "../IBITS/DICT/Dict-Row";
import DCET from "./DCET/Dcet-Row";
import BSIT from "./BSIT/Bsit-Row";
import IBITS from './IbitsALL';
import '../org.css';

function Ibits() {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
      <Row className="rows">
        <Col sm={2}>
          <Nav variant="pills" className="flex-column" style={{cursor: "pointer"}}>
            <Nav.Item>
              <Nav.Link eventKey="first">ALL IBITS</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">DICT</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="Third">DCET</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="fourth">BSIT</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              <IBITS />
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <DICT />
            </Tab.Pane>
            <Tab.Pane eventKey="Third">
              <DCET />
            </Tab.Pane>
            <Tab.Pane eventKey="fourth">
              <BSIT />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}

export default Ibits;
