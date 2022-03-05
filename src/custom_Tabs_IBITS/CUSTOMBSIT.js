import React from 'react';
import {
  Tab,
  Col,
  Nav,
  Row
} from "react-bootstrap";
import BSIT1 from '../IBITS_COURSE/BSIT/BSIT1';
import BSIT2 from '../IBITS_COURSE/BSIT/BSIT2';
import BSIT3 from '../IBITS_COURSE/BSIT/BSIT3';
import BSIT4 from '../IBITS_COURSE/BSIT/BSIT4';

export default function CUSTOMBSIT() {
  return (
    <Tab.Container id="left-tabs-example" defaultActiveKey="1st">
      <Row>
        <Col sm={2}>
          <Nav
            variant="pills"
            className="flex-column"
            style={{ cursor: "pointer", marginLeft: 20, marginTop: 10 }}
          >
            <Nav.Item>
              <Nav.Link eventKey="1st">
                <h5 style={{ color: "#fff" }}>1st Year</h5>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="2nd">
                <h5 style={{ color: "#fff" }}>2nd Year</h5>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="3rd">
                <h5 style={{ color: "#fff" }}>3rd Year</h5>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="4th">
                <h5 style={{ color: "#fff" }}>4th Year</h5>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={10}>
          <Tab.Content>
            <Tab.Pane eventKey="1st">
              <BSIT1 />
            </Tab.Pane>
            <Tab.Pane eventKey="2nd">
              <BSIT2 />
            </Tab.Pane>
            <Tab.Pane eventKey="3rd">
              <BSIT3 />
            </Tab.Pane>
            <Tab.Pane eventKey="4th">
              <BSIT4 />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}
