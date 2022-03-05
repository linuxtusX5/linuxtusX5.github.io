import React from "react";
import { Tab, Col, Nav, Row } from "react-bootstrap";
import DCET1 from "../IBITS_COURSE/DCET/DCET1";
import DCET2 from "../IBITS_COURSE/DCET/DCET2";
import DCET3 from "../IBITS_COURSE/DCET/DCET3";

export default function CUSTOMDCET() {
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
              <DCET1 />
            </Tab.Pane>
            <Tab.Pane eventKey="2nd">
              <DCET2 />
            </Tab.Pane>
            <Tab.Pane eventKey="3rd">
              <DCET3 />
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}
