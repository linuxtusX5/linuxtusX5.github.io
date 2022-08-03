import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import Bsnd1 from "./Bsnd1";
import Bsnd2 from "./Bsnd2";
import Bsnd3 from "./Bsnd3";
import Bsnd4 from "./Bsnd4";
function Bsnd() {
  return (
    <Tabs
      defaultActiveKey="BSND1"
      id="justify-tab-example"
      className="mb-3 BG"
      justify
    >
      <Tab eventKey="BSND1" title="BSND 1">
        <Bsnd1/>
      </Tab>
      <Tab eventKey="BSND2" title="BSND 2">
        <Bsnd2/>
      </Tab>
      <Tab eventKey="BSND3" title="BSND 3">
        <Bsnd3/>
      </Tab>
      <Tab eventKey="BSND4" title="BSND 4">
        <Bsnd4/>
      </Tab>
    </Tabs>
  );
}

export default Bsnd;
