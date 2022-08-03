import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import Bsbio1 from "./Bsbio1";
import Bsbio2 from "./Bsbio2";
import Bsbio3 from "./Bsbio3";
import Bsbio4 from "./Bsbio4";
function Bsbio() {
  return (
    <Tabs
      defaultActiveKey="BSBIO1"
      id="justify-tab-example"
      className="mb-3 BG"
      justify
    >
      <Tab eventKey="BSBIO1" title="BSBIO 1">
        <Bsbio1/>
      </Tab>
      <Tab eventKey="BSBIO2" title="BSBIO 2">
        <Bsbio2/>
      </Tab>
      <Tab eventKey="BSBIO3" title="BSBIO 3">
        <Bsbio3/>                                                                                                     
      </Tab>
      <Tab eventKey="BSBIO4" title="BSBIO 4">
        <Bsbio4/>
      </Tab>
    </Tabs>
  );
}

export default Bsbio;
