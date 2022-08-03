import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import Bsba from "./Bsba";
import Bsba2 from "./Bsba2";
import Bsba3 from "./Bsba3";
import Bsba4 from "./Bsba4";
function JmeRow() {
  return (
    <Tabs
      defaultActiveKey="Bsba1"
      id="justify-tab-example"
      className="mb-3 BG"
      justify
    >
      <Tab eventKey="Bsba1" title="BSBA 1">
        <Bsba/>
      </Tab>
      <Tab eventKey="Bsba2" title="BSBA 2">
        <Bsba2/>
      </Tab>
      <Tab eventKey="Bsba3" title="BSBA 3">
        <Bsba3/>
      </Tab>
      <Tab eventKey="Bsba4" title="BSBA 4">
        <Bsba4/>
      </Tab>
    </Tabs>
  );
}

export default JmeRow;
