import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import Beed1 from "./Beed";
import Beed2 from "./Beed2";
import Beed3 from "./Beed3";
import Beed4 from "./Beed4";
function BeedRow() {
  return (
    <Tabs
      defaultActiveKey="BEED1"
      id="justify-tab-example"
      className="mb-3 BG"
      justify
    >
      <Tab eventKey="BEED1" title="BEED 1">
        <Beed1/>
      </Tab>
      <Tab eventKey="BEED2" title="BEED 2">
        <Beed2/>
      </Tab>
      <Tab eventKey="BEED3" title="BEED 3">
        <Beed3/>
      </Tab>
      <Tab eventKey="BEED4" title="BEED 4">
        <Beed4/>
      </Tab>
    </Tabs>
  );
}

export default BeedRow;
