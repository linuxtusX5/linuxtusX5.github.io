import Col from "react-bootstrap/Col";
import Nav from "react-bootstrap/Nav";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";

import Dcet1 from "./Dcet";
import Dcet2 from "./Dcet2";
import Dcet3 from "./Dcet3";
function DcetRow() {
  return (
    <Tabs
      defaultActiveKey="Dcet1"
      id="justify-tab-example"
      className="mb-3 BG"
      justify
    >
      <Tab eventKey="Dcet1" title="DCET 1">
        <Dcet1/>
      </Tab>
      <Tab eventKey="Dcet2" title="DCET 2">
        <Dcet2/>
      </Tab>
      <Tab eventKey="Dcet3" title="DCET 3">
        <Dcet3/>
      </Tab>
    </Tabs>
  );
}

export default DcetRow;
