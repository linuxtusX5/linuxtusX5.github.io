import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import Bsa from "./Bsa";
import Bsa2 from "./Bsa2";
import Bsa3 from "./Bsa3";
import Bsa4 from "./Bsa4";
function JpiaRow() {
  return (
    <Tabs
      defaultActiveKey="Bsa1"
      id="justify-tab-example"
      className="mb-3 BG"
      justify
    >
      <Tab eventKey="Bsa1" title="BSA 1">
        <Bsa />
      </Tab>
      <Tab eventKey="Bsa2" title="BSA 2">
        <Bsa2 />
      </Tab>
      <Tab eventKey="Bsa3" title="BSA 3">
        <Bsa3/>
      </Tab>
      <Tab eventKey="Bsa4" title="BSA 4">
        <Bsa4/>
      </Tab>
    </Tabs>
  );
}

export default JpiaRow;
