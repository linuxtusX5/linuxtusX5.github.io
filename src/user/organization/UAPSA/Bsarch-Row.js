import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import Bsarch from "./Bsarch";
import Bsarch2 from "./Bsarch2";
import Bsarch3 from "./Bsarch3";
import Bsarch4 from "./Bsarch4";
function BsarchRow() {
  return (
    <Tabs
      defaultActiveKey="BSARCH1"
      id="justify-tab-example"
      className="mb-3 BG"
      justify
    >
      <Tab eventKey="BSARCH1" title="BSARCH 1">
        <Bsarch/>
      </Tab>
      <Tab eventKey="BSARCH2" title="BSARCH 2">
        <Bsarch2/>
      </Tab>
      <Tab eventKey="BSARCH3" title="BSARCH 3">
        <Bsarch3/>
      </Tab>
      <Tab eventKey="BSARCH4" title="BSARCH 4">
        <Bsarch4/>
      </Tab>
    </Tabs>
  );
}

export default BsarchRow;
