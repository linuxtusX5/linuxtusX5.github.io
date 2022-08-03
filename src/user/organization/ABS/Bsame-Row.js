import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import Bsame from "./Bsame";
import Bsame2 from "./Bsame2";
import Bsame3 from "./Bsame3";
import Bsame4 from "./Bsame4";
function DcetRow() {
  return (
    <Tabs
      defaultActiveKey="Bsame1"
      id="justify-tab-example"
      className="mb-3 BG"
      justify
    >
      <Tab eventKey="Bsame1" title="BSAME 1">
        <Bsame/>
      </Tab>
      <Tab eventKey="Bsame2" title="BSAME 2">
        <Bsame2/>
      </Tab>
      <Tab eventKey="Bsame3" title="BSAME 3">
        <Bsame3/>
      </Tab>
      <Tab eventKey="Bsame4" title="BSAME 4">
        <Bsame4/>
      </Tab>
    </Tabs>
  );
}

export default DcetRow;
