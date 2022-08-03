import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import Bsee from "./BSEE/Bsee";
import Bsee2 from "./BSEE/Bsee2";
import Bsee3 from "./BSEE/Bsee3";
import Bsee4 from "./BSEE/Bsee4";
import Bsee5 from "./BSEE/Bsee5";
function IieeRow() {
  return (
    <Tabs
      defaultActiveKey="Bsee1"
      id="justify-tab-example"
      className="mb-3 BG"
      justify
    >
      <Tab eventKey="Bsee1" title="BSEE 1">
        <Bsee/>
      </Tab>
      <Tab eventKey="Bsee2" title="BSEE 2">
        <Bsee2/>
      </Tab>
      <Tab eventKey="Bsee3" title="BSEE 3">
        <Bsee3/>
      </Tab>
      <Tab eventKey="Bsee4" title="BSEE 4">
        <Bsee4/>
      </Tab>
      <Tab eventKey="Bsee5" title="BSEE 5">
        <Bsee5/>
      </Tab>
    </Tabs>
  );
}

export default IieeRow;
