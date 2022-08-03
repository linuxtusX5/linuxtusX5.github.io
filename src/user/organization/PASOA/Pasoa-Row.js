import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import Bsoa1 from "./Bsoa";
import Bsoa2 from "./Bsoa2";
import Bsoa3 from "./Bsoa3";
import Bsoa4 from "./Bsoa4";
function PadsRow() {
  return (
    <Tabs
      defaultActiveKey="Bsoa1"
      id="justify-tab-example"
      className="mb-3 BG"
      justify
    >
      <Tab eventKey="Bsoa1" title="BSOA 1">
        <Bsoa1/>
      </Tab>
      <Tab eventKey="Bsoa2" title="BSOA 2">
        <Bsoa2/>
      </Tab>
      <Tab eventKey="Bsoa3" title="BSOA 3">
        <Bsoa3/>
      </Tab>
      <Tab eventKey="Bsoa4" title="BSOA 4">
        <Bsoa4/>
      </Tab>
    </Tabs>
  );
}

export default PadsRow;
