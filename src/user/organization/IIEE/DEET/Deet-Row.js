import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import Deet from "./Deet";
import Deet2 from "./Deet2";
import Deet3 from "./Deet3";
import Deet4 from "./Deet4";
function IieeRow() {
  return (
    <Tabs
      defaultActiveKey="Deet1"
      id="justify-tab-example"
      className="mb-3 BG"
      justify
    >
      <Tab eventKey="Deet1" title="DEET 1">
        <Deet/>
      </Tab>
      <Tab eventKey="Deet2" title="DEET 2">
        <Deet2/>
      </Tab>
      <Tab eventKey="Deet3" title="DEET 3">
        <Deet3/>
      </Tab>
      <Tab eventKey="Deet4" title="DEET 4">
        <Deet4/>
      </Tab>
    </Tabs>
  );
}

export default IieeRow;
