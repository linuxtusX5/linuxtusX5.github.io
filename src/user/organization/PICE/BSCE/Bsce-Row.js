import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import Bsce1 from "./Bsce";
import Bsce2 from "./Bsce2";
import Bsce3 from "./Bcse3";
import Bsce4 from "./Bsce4";
function BsceRow() {
  return (
    <Tabs
      defaultActiveKey="Bsce1"
      id="justify-tab-example"
      className="mb-3 BG"
      justify
    >
      <Tab eventKey="Bsce1" title="BSCE 1">
        <Bsce1/>
      </Tab>
      <Tab eventKey="Bsce2" title="BSCE 2">
        <Bsce2/>
      </Tab>
      <Tab eventKey="Bsce3" title="BSCE 3">
        <Bsce3/>
      </Tab>
      <Tab eventKey="Bsce4" title="BSCE 4">
        <Bsce4/>
      </Tab>
    </Tabs>
  );
}

export default BsceRow;
