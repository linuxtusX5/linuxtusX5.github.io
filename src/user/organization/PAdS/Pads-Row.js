import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import Bpa1 from "./Bpa";
import Bpa2 from "./Bpa2";
import  Bpa3 from "./Bpa3";
import Bpa4 from "./Bpa4";
function PadsRow() {
  return (
    <Tabs
      defaultActiveKey="Bpa1"
      id="justify-tab-example"
      className="mb-3 BG"
      justify
    >
      <Tab eventKey="Bpa1" title="BPA 1">
        <Bpa1/>
      </Tab>
      <Tab eventKey="Bpa2" title="BPA 2">
        <Bpa2/>
      </Tab>
      <Tab eventKey="Bpa3" title="BPA 3">
        <Bpa3/>
      </Tab>
      <Tab eventKey="Bpa4" title="BPA 4">
        <Bpa4/>
      </Tab>
    </Tabs>
  );
}

export default PadsRow;
