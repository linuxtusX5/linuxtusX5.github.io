import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import Bsnd1 from "./Bsnd1";
import Bsnd2 from "./Bsnd2";
import Bsnd3 from "./Bsnd3";
import Bsnd4 from "./Bsnd4";

function BsndRow() {
  return (
    <Tabs
      defaultActiveKey="Bsnd1"
      id="justify-tab-example"
      className="mb-3 BG"
      justify
    >
      <Tab eventKey="Bsnd1" title="BSND 1">
        <Bsnd1 />
      </Tab>
      <Tab eventKey="Bsnd2" title="BSND 2">
        <Bsnd2 />
      </Tab>
      <Tab eventKey="Bsnd3" title="BSND 3">
        <Bsnd3 />
      </Tab>
      <Tab eventKey="Bsnd4" title="BSND 4">
        <Bsnd4 />
      </Tab>
    </Tabs>
  );
}

export default BsndRow;
