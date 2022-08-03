import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import Bsed1 from "./Bsed";
import Bsed2 from "./Bsed2";
import Bsed3 from "./Bsed3";
import Bsed4 from "./Bsed4";
function BsedRow() {
  return (
    <Tabs
      defaultActiveKey="BSED1"
      id="justify-tab-example"
      className="mb-3 BG"
      justify
    >
      <Tab eventKey="BSED1" title="BSED 1">
        <Bsed1/>
      </Tab>
      <Tab eventKey="BSED2" title="BSED 2">
        <Bsed2/>
      </Tab>
      <Tab eventKey="BSED3" title="BSED 3">
        <Bsed3/>
      </Tab>
      <Tab eventKey="BSED4" title="BSED 4">
        <Bsed4/>
      </Tab>
    </Tabs>
  );
}

export default BsedRow;
