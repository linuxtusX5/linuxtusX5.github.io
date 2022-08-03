import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import DomtLom from "./DomtLom";
import DomtLom2 from "./DomtLom2";
import DomtLom3 from "./DomtLom3";
function DomtLomRow() {
  return (
    <Tabs
      defaultActiveKey="DOMTLOM1"
      id="justify-tab-example"
      className="mb-3 BG"
      justify
    >
      <Tab eventKey="DOMTLOM1" title="DOMTLOM 1">
        <DomtLom/>
      </Tab>
      <Tab eventKey="DOMTLOM2" title="DOMTLOM 2">
        <DomtLom2/>
      </Tab>
      <Tab eventKey="DOMTLOM3" title="DOMTLOM 3">
        <DomtLom3/>
      </Tab>
    </Tabs>
  );
}

export default DomtLomRow;
