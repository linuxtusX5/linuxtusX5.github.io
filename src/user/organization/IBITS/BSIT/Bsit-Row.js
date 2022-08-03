import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import Bsit from "./Bsit";
import Bsit2 from "./Bsit2";
import Bsit3 from "./Bsit3";
import Bsit4 from "./Bsit4";
function DcetRow() {
  return (
    <Tabs
      defaultActiveKey="Bsit1"
      id="justify-tab-example"
      className="mb-3 BG"
      justify
    >
      <Tab eventKey="Bsit1" title="BSIT 1">
      <Bsit/>
      </Tab>
      <Tab eventKey="Bsit2" title="BSIT 2">
        <Bsit2/>
      </Tab>
      <Tab eventKey="Bsit3" title="BSIT 3">
        <Bsit3/>
      </Tab>
      <Tab eventKey="Bsit4" title="BSIT 4">
        <Bsit4/>
      </Tab>
    </Tabs>
  );
}

export default DcetRow;
