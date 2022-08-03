import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import Bshm from "./Bshm";
import Bshm2 from "./Bshm2";
import Bshm3 from "./Bshm3";
import Bshm4 from "./Bshm4";
function HmsRow() {
  return (
    <Tabs
      defaultActiveKey="Bshm1"
      id="justify-tab-example"
      className="mb-3 BG"
      justify
    >
      <Tab eventKey="Bshm1" title="BSHM 1">
        <Bshm />
      </Tab>
      <Tab eventKey="Bshm2" title="BSHM 2">
        <Bshm2 />
      </Tab>
      <Tab eventKey="Bshm3" title="BSHM 3">
        <Bshm3 />
      </Tab>
      <Tab eventKey="Bshm4" title="BSHM 4">
        <Bshm4 />
      </Tab>
    </Tabs>
  );
}

export default HmsRow;
