import React from "react";
import { Tab, Col, Nav, Row } from "react-bootstrap";
import DICT1 from "../IBITS_COURSE/DICT/DICT1";
import DICT2 from "../IBITS_COURSE/DICT/DICT2";
import DICT3 from "../IBITS_COURSE/DICT/DICT3";

export default function CUSTOMDICT() {
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
                <h5 style={{ color: "#ff0" }}>1st Year</h5>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="2nd">
                <h5 style={{ color: "#ff0" }}>2nd Year</h5>
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="3rd">
                <h5 style={{ color: "#ff0" }}>3rd Year</h5>
              </Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={10}>
          <Tab.Content>
            <Tab.Pane eventKey="1st">
              <DICT1 />
            </Tab.Pane>
            <Tab.Pane eventKey="2nd">
              <DICT2 />
            </Tab.Pane>
            <Tab.Pane eventKey="3rd">
              <DICT3 />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}
