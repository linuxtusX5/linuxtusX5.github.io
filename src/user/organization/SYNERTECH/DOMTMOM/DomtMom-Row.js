import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import DomtMom from "./DomtMom";
import DomtMom2 from "./DomtMom2";
import DomtMom3 from "./DomtMom3";
function DomtMomRow() {
  return (
    <Tabs
      defaultActiveKey="DOMTMOM1"
      id="justify-tab-example"
      className="mb-3 BG"
      justify
    >
      <Tab eventKey="DOMTMOM1" title="DOMTMOM 1">
        <DomtMom/>
      </Tab>
      <Tab eventKey="DOMTMOM2" title="DOMTMOM 2">
        <DomtMom2/>
      </Tab>
      <Tab eventKey="DOMTMOM3" title="DOMTMOM 3">
        <DomtMom3/>
      </Tab>
    </Tabs>
  );
}

export default DomtMomRow;
