import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import Dict1 from "./Dict";
import Dict2 from "./Dict2";
import Dict3 from "./Dict3";

function DictRow() {
  return (
    <Tabs
      defaultActiveKey="Dict1"
      id="justify-tab-example"
      className="mb-3 BG"
      justify
    >
      <Tab eventKey="Dict1" title="DICT 1">
        <Dict1 />
      </Tab>
      <Tab eventKey="Dict2" title="DICT 2">
        <Dict2 />
      </Tab>
      <Tab eventKey="Dict3" title="DICT 3">
        <Dict3 />
      </Tab>
    </Tabs>
  );
}

export default DictRow;
